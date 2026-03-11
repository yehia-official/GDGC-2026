
        // Progress Bar
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            document.getElementById('progressBar').style.width = progress + '%';
        });

        // Quiz Logic
        function checkSection(sectionNum) {
            const quizQuestions = document.querySelectorAll('.quiz-question');
            let correct = 0;
            let total = 0;

            const sectionQuestions = Array.from(quizQuestions).filter((q, idx) => {
                return idx >= (sectionNum - 1) * 2 && idx < sectionNum * 2;
            });

            sectionQuestions.forEach((question) => {
                const selectedBtn = question.querySelector('.quiz-option.selected');
                const feedback = question.querySelector('.quiz-feedback');

                if (selectedBtn) {
                    const isCorrect = selectedBtn.getAttribute('data-answer') === '1';
                    total++;

                    question.querySelectorAll('.quiz-option').forEach(btn => {
                        btn.classList.add('answered');
                        if (btn.getAttribute('data-answer') === '1') {
                            btn.classList.add('correct');
                        }
                        if (btn === selectedBtn && !isCorrect) {
                            btn.classList.add('wrong');
                        }
                    });

                    if (isCorrect) {
                        feedback.classList.add('show', 'correct');
                        feedback.textContent = '✅ إجابة صحيحة تماماً! برافو عليك 🎉';
                        correct++;
                    } else {
                        feedback.classList.add('show', 'wrong');
                        feedback.textContent = '❌ إجابة غير صحيحة - شوف الإجابة الصحيحة باللون الأخضر';
                    }
                }
            });

            if (total > 0) {
                const scoreEl = document.getElementById(`score-${sectionNum}`);
                scoreEl.style.display = 'block';
                const percentage = Math.round((correct / total) * 100);
                scoreEl.innerHTML = `✨ النتيجة: <strong>${correct}/${total}</strong> (${percentage}%)`;
            }
        }

        // Quiz Selection
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('quiz-option') && !e.target.classList.contains('answered')) {
                const question = e.target.parentElement.parentElement;
                question.querySelectorAll('.quiz-option').forEach(btn => {
                    btn.classList.remove('selected');
                });
                e.target.classList.add('selected');
            }
        });
    