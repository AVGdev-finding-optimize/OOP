// Ứng dụng chính (App Controller)
const app = {
    // Trạng thái hiện tại
    currentExam: [],
    examTimer: null,
    examTimeRemaining: 0,
    
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
        if (screenId === 'exam') this.showExamConfig(); // Hiển thị form cấu hình khi vào trang thi
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

    // 3. Logic Màn hình Thi (Exam) - CẤU HÌNH
    
    // Lấy danh sách chủ đề duy nhất từ QUESTION_BANK
    getUniqueTopics: function() {
        if (typeof QUESTION_BANK === 'undefined' || QUESTION_BANK.length === 0) {
            return [];
        }
        const topics = QUESTION_BANK.map(q => q.topic);
        return [...new Set(topics)].sort();
    },

    // Hiển thị form cấu hình đề thi (State A)
    showExamConfig: function() {
        // Dừng timer nếu đang chạy
        this.stopTimer();
        
        // Hiển thị State A, ẩn State B
        document.getElementById('exam-config').style.display = 'block';
        document.getElementById('exam-active').style.display = 'none';
        
        // Render danh sách chủ đề
        this.renderTopicList();
        
        // Reset select all checkbox
        document.getElementById('select-all-topics').checked = false;
        
        // Reset duration
        document.getElementById('exam-duration').value = '0';
    },

    // Render danh sách checkbox chủ đề
    renderTopicList: function() {
        const topicList = document.getElementById('topic-list');
        const topics = this.getUniqueTopics();
        
        if (topics.length === 0) {
            topicList.innerHTML = '<div style="padding:10px; color:red;">Chưa có dữ liệu câu hỏi!</div>';
            return;
        }
        
        let html = '';
        topics.forEach((topic, index) => {
            html += `
                <label class="topic-checkbox">
                    <input type="checkbox" name="topic" value="${this.escapeHtml(topic)}" onchange="app.updateSelectAll()">
                    <span>${this.escapeHtml(topic)}</span>
                </label>
            `;
        });
        topicList.innerHTML = html;
    },

    // Toggle tất cả chủ đề
    toggleAllTopics: function() {
        const selectAll = document.getElementById('select-all-topics').checked;
        const checkboxes = document.querySelectorAll('#topic-list input[name="topic"]');
        checkboxes.forEach(cb => cb.checked = selectAll);
    },

    // Cập nhật trạng thái "Chọn tất cả" dựa trên các checkbox con
    updateSelectAll: function() {
        const checkboxes = document.querySelectorAll('#topic-list input[name="topic"]');
        const checkedCount = document.querySelectorAll('#topic-list input[name="topic"]:checked').length;
        const selectAll = document.getElementById('select-all-topics');
        selectAll.checked = checkedCount === checkboxes.length && checkboxes.length > 0;
    },

    // Bắt đầu thi với cấu hình đã chọn
    startExamWithConfig: function() {
        // Lấy các chủ đề đã chọn
        const selectedTopics = [];
        document.querySelectorAll('#topic-list input[name="topic"]:checked').forEach(cb => {
            selectedTopics.push(cb.value);
        });
        
        // Kiểm tra có chọn ít nhất 1 chủ đề
        if (selectedTopics.length === 0) {
            alert('Vui lòng chọn ít nhất một chủ đề!');
            return;
        }
        
        // Lấy thời gian
        const duration = parseInt(document.getElementById('exam-duration').value);
        
        // Lọc câu hỏi theo chủ đề
        const filteredQuestions = QUESTION_BANK.filter(q => selectedTopics.includes(q.topic));
        
        if (filteredQuestions.length === 0) {
            alert('Không có câu hỏi nào thuộc chủ đề đã chọn!');
            return;
        }
        
        // Chọn ngẫu nhiên tối đa 40 câu
        const maxQuestions = 40;
        const count = Math.min(maxQuestions, filteredQuestions.length);
        this.currentExam = this.getRandomQuestions(filteredQuestions, count);
        
        // Ẩn State A, hiển thị State B
        document.getElementById('exam-config').style.display = 'none';
        document.getElementById('exam-active').style.display = 'block';
        
        // Reset giao diện
        document.getElementById('btn-submit').style.display = 'inline-block';
        document.getElementById('btn-reset').style.display = 'none';
        document.getElementById('score-display').style.display = 'none';
        
        // Cập nhật thông tin thời gian
        const examInfo = document.getElementById('exam-info');
        const timerDisplay = document.getElementById('timer-display');
        
        if (duration > 0) {
            examInfo.textContent = `Thời gian làm bài: ${duration} phút | Số câu: ${this.currentExam.length}`;
            timerDisplay.style.display = 'flex';
            this.startTimer(duration * 60);
        } else {
            examInfo.textContent = `Thời gian làm bài: Không giới hạn | Số câu: ${this.currentExam.length}`;
            timerDisplay.style.display = 'none';
        }
        
        // Render câu hỏi
        this.renderExamQuestions();
    },

    // Timer functions
    startTimer: function(seconds) {
        this.examTimeRemaining = seconds;
        this.updateTimerDisplay();
        
        this.examTimer = setInterval(() => {
            this.examTimeRemaining--;
            this.updateTimerDisplay();
            
            if (this.examTimeRemaining <= 0) {
                this.stopTimer();
                alert('Hết thời gian! Bài thi của bạn sẽ được tự động nộp.');
                this.submitExam(true); // true = auto submit, skip confirmation
            }
        }, 1000);
    },

    updateTimerDisplay: function() {
        const minutes = Math.floor(this.examTimeRemaining / 60);
        const seconds = this.examTimeRemaining % 60;
        const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('timer-countdown').textContent = display;
        
        // Thay đổi màu sắc theo thời gian còn lại
        const timerDisplay = document.getElementById('timer-display');
        timerDisplay.classList.remove('warning', 'danger');
        
        if (this.examTimeRemaining <= 60) {
            timerDisplay.classList.add('danger');
        } else if (this.examTimeRemaining <= 300) {
            timerDisplay.classList.add('warning');
        }
    },

    stopTimer: function() {
        if (this.examTimer) {
            clearInterval(this.examTimer);
            this.examTimer = null;
        }
    },

    // Reset về trang cấu hình
    resetExam: function() {
        this.stopTimer();
        this.showExamConfig();
    },

    // Legacy function for backward compatibility
    startExam: function() {
        this.showExamConfig();
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
    submitExam: function(autoSubmit) {
        // Dừng timer
        this.stopTimer();
        
        if(!autoSubmit && !confirm("Bạn có chắc chắn muốn nộp bài?")) return;

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
        
        // Ẩn timer sau khi nộp bài
        document.getElementById('timer-display').style.display = 'none';
        
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