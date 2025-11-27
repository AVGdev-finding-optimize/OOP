// Ứng dụng chính (App Controller)
const app = {
    // Trạng thái hiện tại
    currentExam: [],
    
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
        if (screenId === 'exam') this.startExam(); // Tự động load đề khi vào trang thi
    },

    // 2. Logic Màn hình Review (ĐÃ SỬA LỖI HIỂN THỊ)
    renderReviewSidebar: function() {
        const sidebar = document.getElementById('slide-sidebar');
        
        // Kiểm tra nếu đã có bài học rồi thì không render lại (tránh mất highlight)
        if (sidebar.querySelector('.topic-item')) return;

        // Xóa sạch nội dung cũ (bao gồm cả comment HTML nếu có)
        sidebar.innerHTML = '';

        let html = '';
        // Kiểm tra xem dữ liệu SLIDE_DATA có tồn tại không
        if (typeof SLIDE_DATA === 'undefined' || SLIDE_DATA.length === 0) {
            sidebar.innerHTML = '<div style="padding:10px; color:red;">Chưa có dữ liệu slide!</div>';
            return;
        }

        SLIDE_DATA.forEach((slide, index) => {
            html += `<div class="topic-item" onclick="app.loadSlide(${index}, this)">${slide.title}</div>`;
        });
        sidebar.innerHTML = html;

        // Tự động chọn bài đầu tiên khi vào
        const firstItem = sidebar.querySelector('.topic-item');
        if(firstItem) {
            this.loadSlide(0, firstItem);
        }
    },

    loadSlide: function(index, element) {
        // Highlight mục được chọn
        document.querySelectorAll('.topic-item').forEach(el => el.classList.remove('active'));
        if(element) element.classList.add('active');

        // Hiển thị nội dung
        const contentArea = document.getElementById('slide-content');
        contentArea.innerHTML = SLIDE_DATA[index].content;
        
        // Scroll lên đầu nội dung
        contentArea.scrollTop = 0;

        // Mobile: Scroll xuống nội dung
        if(window.innerWidth < 768) {
            contentArea.scrollIntoView({behavior: 'smooth'});
        }
    },

    // 3. Logic Màn hình Thi (Exam)
    startExam: function() {
        // Reset giao diện
        document.getElementById('btn-submit').style.display = 'inline-block';
        document.getElementById('btn-reset').style.display = 'none';
        document.getElementById('score-display').style.display = 'none';
        
        // Lấy ngẫu nhiên 40 câu
        // Nếu số câu trong kho < 40 thì lấy hết
        const maxQuestions = 40;
        const totalAvailable = typeof QUESTION_BANK !== 'undefined' ? QUESTION_BANK.length : 0;
        const count = Math.min(maxQuestions, totalAvailable);
        
        if (totalAvailable === 0) {
            document.getElementById('exam-container').innerHTML = '<p>Chưa có dữ liệu câu hỏi.</p>';
            return;
        }

        this.currentExam = this.getRandomQuestions(QUESTION_BANK, count);
        this.renderExamQuestions();
    },

    // Thuật toán xáo trộn mảng
    getRandomQuestions: function(sourceArray, n) {
        const shuffled = [...sourceArray].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
    },

    renderExamQuestions: function() {
        const container = document.getElementById('exam-container');
        let html = '';

        this.currentExam.forEach((q, index) => {
            html += `
            <div class="question-card" id="q-card-${index}">
                <div class="q-text">Câu ${index + 1}: ${q.question}</div>
                ${q.code ? `<div class="code-block"><pre>${this.escapeHtml(q.code)}</pre></div>` : ''}
                
                <div class="options-list">
                    ${this.renderOptions(q, index)}
                </div>
                
                <div class="feedback" id="feedback-${index}"></div>
            </div>
            `;
        });

        container.innerHTML = html;
        // Scroll lên đầu trang thi
        const examScreen = document.getElementById('screen-exam');
        if(examScreen) examScreen.scrollTop = 0;
    },

    renderOptions: function(q, index) {
        if (q.type === 'text') {
            return `<input type="text" class="input-text" name="ans-${index}" placeholder="Nhập câu trả lời..." style="width:100%; padding:10px; border:1px solid #ccc; border-radius:4px;">`;
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
    submitExam: function() {
        if(!confirm("Bạn có chắc chắn muốn nộp bài?")) return;

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

            // Hiển thị kết quả từng câu
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
        
        // Đổi nút Nộp bài -> Làm lại
        document.getElementById('btn-submit').style.display = 'none';
        document.getElementById('btn-reset').style.display = 'inline-block';
        
        // Cuộn lên đầu để xem điểm
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