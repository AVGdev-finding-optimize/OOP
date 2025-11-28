// Ứng dụng chính (App Controller)
const app = {
    // Trạng thái hiện tại
    currentExam: [],
    timerInterval: null,
    isExamActive: false,

    // 1. Điều hướng màn hình
    navigate: function(screenId) {
        // Ẩn tất cả screen
        document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
        
        // Hiện screen cần đến
        document.getElementById(`screen-${screenId}`).classList.add('active');
        
        // Active menu tương ứng
        const navIndex = ['home', 'review', 'exam'].indexOf(screenId);
        if(navIndex !== -1) {
            const navBtns = document.querySelectorAll('.nav-btn');
            if(navBtns[navIndex]) navBtns[navIndex].classList.add('active');
        }

        // Logic riêng cho từng màn hình
        if (screenId === 'review') this.renderReviewSidebar();
        if (screenId === 'exam') this.initExamSetup(); // Vào màn hình thi là hiện Setup trước
    },

    // --- PHẦN LOGIC REVIEW (GIỮ NGUYÊN) ---
    renderReviewSidebar: function() {
        const sidebar = document.getElementById('slide-sidebar');
        if (sidebar.querySelector('.topic-item')) return;
        sidebar.innerHTML = '';

        if (typeof SLIDE_DATA === 'undefined' || SLIDE_DATA.length === 0) {
            sidebar.innerHTML = '<div style="padding:10px; color:red;">Chưa có dữ liệu slide!</div>';
            return;
        }

        let html = '';
        SLIDE_DATA.forEach((slide, index) => {
            html += `<div class="topic-item" onclick="app.loadSlide(${index}, this)">${slide.title}</div>`;
        });
        sidebar.innerHTML = html;

        const firstItem = sidebar.querySelector('.topic-item');
        if(firstItem) this.loadSlide(0, firstItem);
    },

    loadSlide: function(index, element) {
        document.querySelectorAll('.topic-item').forEach(el => el.classList.remove('active'));
        if(element) element.classList.add('active');
        const contentArea = document.getElementById('slide-content');
        contentArea.innerHTML = SLIDE_DATA[index].content;
        contentArea.scrollTop = 0;
        if(window.innerWidth < 768) contentArea.scrollIntoView({behavior: 'smooth'});
    },

    // --- PHẦN LOGIC EXAM (NÂNG CẤP) ---

    // A. Khởi tạo màn hình cài đặt
    initExamSetup: function() {
        // Reset trạng thái hiển thị
        document.getElementById('exam-setup').style.display = 'block';
        document.getElementById('exam-active').style.display = 'none';
        this.stopTimer();

        // Lấy danh sách Topic duy nhất từ dữ liệu
        if (typeof QUESTION_BANK === 'undefined') return;
        const uniqueTopics = [...new Set(QUESTION_BANK.map(q => q.topic))];
        
        // Render checkboxes
        const listContainer = document.getElementById('topic-selection-list');
        listContainer.innerHTML = uniqueTopics.map(topic => `
            <label class="checkbox-container">
                <input type="checkbox" class="topic-checkbox" value="${topic}" checked onchange="app.checkSelectAllStatus()">
                <span class="checkmark"></span>
                ${topic}
            </label>
        `).join('');
    },

    // Helper: Xử lý nút "Chọn tất cả"
    toggleAllTopics: function(source) {
        const checkboxes = document.querySelectorAll('.topic-checkbox');
        checkboxes.forEach(cb => cb.checked = source.checked);
    },

    // Helper: Kiểm tra nếu bỏ chọn 1 cái thì bỏ tick "Chọn tất cả"
    checkSelectAllStatus: function() {
        const checkboxes = document.querySelectorAll('.topic-checkbox');
        const allChecked = Array.from(checkboxes).every(cb => cb.checked);
        document.getElementById('check-all-topics').checked = allChecked;
    },

    // B. Bắt đầu thi với cấu hình đã chọn
    startConfiguredExam: function() {
        // 1. Lấy các topic được chọn
        const selectedTopics = Array.from(document.querySelectorAll('.topic-checkbox:checked')).map(cb => cb.value);
        
        if (selectedTopics.length === 0) {
            alert("Vui lòng chọn ít nhất một chủ đề!");
            return;
        }

        // 2. Lọc câu hỏi
        let filteredQuestions = QUESTION_BANK.filter(q => selectedTopics.includes(q.topic));
        
        if (filteredQuestions.length === 0) {
            alert("Không tìm thấy câu hỏi nào thuộc chủ đề này.");
            return;
        }

        // 3. Random và giới hạn 40 câu
        const maxQuestions = 40;
        const count = Math.min(maxQuestions, filteredQuestions.length);
        this.currentExam = this.getRandomQuestions(filteredQuestions, count);

        document.body.classList.add('exam-mode');

        // B. Bật cảnh báo chống thoát (Anti-leave warning)
        // Nếu người dùng cố tắt tab hoặc F5, trình duyệt sẽ hỏi lại
        window.onbeforeunload = function() {
            return "Bạn đang làm bài thi. Nếu tải lại trang, kết quả sẽ bị mất!";
        };

        // 4. Chuyển giao diện
        document.getElementById('exam-setup').style.display = 'none';
        document.getElementById('exam-active').style.display = 'block';
        
        // Reset UI kết quả
        document.getElementById('btn-submit').style.display = 'inline-block';
        document.getElementById('btn-reset').style.display = 'none';
        document.getElementById('score-display').style.display = 'none';
        document.getElementById('topic-summary').innerText = `Chủ đề: ${selectedTopics.length} mục đã chọn | Tổng: ${count} câu`;

        // 5. Render câu hỏi
        this.renderExamQuestions();

        // 6. Xử lý Timer
        const durationMinutes = parseInt(document.getElementById('exam-duration').value);
        this.startTimer(durationMinutes);
    },

    // Logic đếm ngược
    startTimer: function(minutes) {
        this.stopTimer(); // Clear timer cũ nếu có
        const display = document.getElementById('timer-display');
        
        if (minutes === 0) {
            display.innerText = "∞";
            display.classList.remove('warning');
            return;
        }

        let totalSeconds = minutes * 60;
        this.isExamActive = true;

        this.updateTimerDisplay(totalSeconds); // Show ngay lập tức

        this.timerInterval = setInterval(() => {
            totalSeconds--;
            this.updateTimerDisplay(totalSeconds);

            // Cảnh báo khi còn dưới 1 phút
            if (totalSeconds < 60) display.classList.add('warning');
            else display.classList.remove('warning');

            // Hết giờ
            if (totalSeconds <= 0) {
                this.stopTimer();
                alert("⏰ Hết giờ làm bài! Hệ thống sẽ tự động nộp bài.");
                this.submitExam(true); // true = force submit
            }
        }, 1000);
    },

    stopTimer: function() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        this.isExamActive = false;
        document.getElementById('timer-display').classList.remove('warning');
    },

    updateTimerDisplay: function(seconds) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        document.getElementById('timer-display').innerText = 
            `${m < 10 ? '0'+m : m}:${s < 10 ? '0'+s : s}`;
    },

    // Thuật toán xáo trộn mảng
    getRandomQuestions: function(sourceArray, n) {
        const shuffled = [...sourceArray].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
    },

    renderExamQuestions: function() {
        const container = document.getElementById('exam-container');
        const paletteContainer = document.getElementById('question-palette'); // Lấy container bảng số
        
        let htmlQuestions = '';
        let htmlPalette = '';

        this.currentExam.forEach((q, index) => {
            // 1. Render Câu hỏi (Giữ nguyên logic cũ)
            htmlQuestions += `
            <div class="question-card" id="q-card-${index}">
                <div class="q-text">Câu ${index + 1}: ${q.question} <span style="font-size:0.8em; color:#666; font-weight:normal">(${q.topic})</span></div>
                ${q.code ? `<div class="code-block"><pre>${this.escapeHtml(q.code)}</pre></div>` : ''}
                
                <div class="options-list" onchange="app.trackProgress(${index})">
                    ${this.renderOptions(q, index)}
                </div>
                
                <div class="feedback" id="feedback-${index}"></div>
            </div>
            `;

            // 2. Render Ô số trên bảng Palette (MỚI)
            // Thêm onclick để cuộn tới câu hỏi
            htmlPalette += `<div class="q-dot" id="q-dot-${index}" onclick="app.scrollToQuestion(${index})">${index + 1}</div>`;
        });

        container.innerHTML = htmlQuestions;
        paletteContainer.innerHTML = htmlPalette; // Đưa ô số vào giao diện
        
        document.getElementById('screen-exam').scrollTop = 0;
    },

    // Hàm 1: Theo dõi tiến độ (Gọi khi user chọn đáp án)
    trackProgress: function(index) {
        const q = this.currentExam[index];
        let hasAnswer = false;

        if (q.type === 'text') {
            const input = document.querySelector(`input[name="ans-${index}"]`);
            // Kiểm tra xem đã nhập text chưa
            if (input && input.value.trim() !== '') hasAnswer = true;
        } else {
            // Kiểm tra xem radio đã được check chưa
            const checked = document.querySelector(`input[name="ans-${index}"]:checked`);
            if (checked) hasAnswer = true;
        }

        // Cập nhật giao diện ô số
        const dot = document.getElementById(`q-dot-${index}`);
        if (hasAnswer) {
            dot.classList.add('answered');
        } else {
            dot.classList.remove('answered');
        }
    },

    // [MỚI] Hàm bật tắt bảng câu hỏi
    togglePalette: function() {
        const palette = document.getElementById('question-palette');
        const btn = document.querySelector('.palette-toggle-btn');
        
        // Toggle class 'open' cho bảng
        palette.classList.toggle('open');
        
        // Toggle class 'active' cho nút (để đổi màu nút khi đang mở)
        btn.classList.toggle('active');
    },

    // Hàm 2: Cuộn nhanh tới câu hỏi
    scrollToQuestion: function(index) {
        const card = document.getElementById(`q-card-${index}`);
        
        // Tính toán vị trí trừ đi header
        const headerOffset = 100; // Giảm offset xuống vì bảng đã thu gọn
        const elementPosition = card.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

        // Tự động đóng bảng sau khi chọn (nếu muốn)
        this.togglePalette(); 
    },

    // Hàm phụ: Render options dựa trên loại câu hỏi
    renderOptions: function(q, index) {
        if (q.type === 'text') {
            // Thêm oninput="app.trackProgress(${index})"
            return `<input type="text" class="input-text" name="ans-${index}" 
                    oninput="app.trackProgress(${index})" 
                    placeholder="Nhập câu trả lời..." 
                    style="width:100%; padding:10px; border:1px solid #ccc; border-radius:4px;">`;
        }
        
        let html = '';
        q.options.forEach((opt, optIndex) => {
            html += `
                <label>
                    <input type="radio" name="ans-${index}" value="${optIndex}">
                    ${this.escapeHtml(opt)}
                </label>
            `;
        });
        return html;
    },

    // Hàm chấm điểm
    submitExam: function(isAutoSubmit = false) {
        if (!isAutoSubmit && !confirm("Bạn có chắc chắn muốn nộp bài?")) return;

        this.stopTimer(); // Dừng đồng hồ

        // A. Tắt chế độ khóa (Hiện lại Navbar)
        document.body.classList.remove('exam-mode');

        // B. Tắt cảnh báo chống thoát
        window.onbeforeunload = null;

        let score = 0;
        
        this.currentExam.forEach((q, index) => {
            const feedbackEl = document.getElementById(`feedback-${index}`);
            let isCorrect = false;
            
            // Logic chấm điểm
            if (q.type === 'text') {
                const input = document.querySelector(`input[name="ans-${index}"]`);
                if (input) {
                    const userVal = input.value.trim().toLowerCase();
                    const correctVal = q.answer.toLowerCase();
                    if (userVal === correctVal) isCorrect = true;
                }
            } else {
                const checked = document.querySelector(`input[name="ans-${index}"]:checked`);
                if (checked) {
                    if (parseInt(checked.value) === q.answer) isCorrect = true;
                }
            }

            // Hiển thị kết quả
            feedbackEl.style.display = 'block';
            if (isCorrect) {
                score++;
                feedbackEl.className = 'feedback correct';
                feedbackEl.innerHTML = `✅ <b>Chính xác!</b><br>${q.explanation}`;
            } else {
                feedbackEl.className = 'feedback incorrect';
                let correctContent = q.type === 'text' ? q.answer : q.options[q.answer];
                feedbackEl.innerHTML = `❌ <b>Sai rồi!</b><br>Đáp án đúng: <b>${correctContent}</b><br><em>${q.explanation}</em>`;
            }
        });

        // Hiển thị tổng điểm
        const scoreBadge = document.getElementById('score-display');
        scoreBadge.style.display = 'block';
        scoreBadge.innerText = `${score}/${this.currentExam.length}`;
        
        // Đổi nút
        document.getElementById('btn-submit').style.display = 'none';
        document.getElementById('btn-reset').style.display = 'inline-block';
        
        // Scroll lên để xem điểm
        document.querySelector('.exam-header').scrollIntoView({ behavior: 'smooth' });
    },

    // Helper: Escape HTML
    escapeHtml: function(text) {
        if (!text) return "";
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
};

// Khởi chạy ứng dụng
window.onload = function() {
    app.navigate('home');
};