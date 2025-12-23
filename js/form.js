// Валидация формы контактов
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');
    
    // Регулярное выражение для email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Валидация формы
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Валидация имени
        if (nameInput.value.trim() === '') {
            showError(nameInput, nameError, 'Пожалуйста, введите имя');
            isValid = false;
        } else {
            hideError(nameInput, nameError);
        }
        
        // Валидация email
        if (emailInput.value.trim() === '') {
            showError(emailInput, emailError, 'Пожалуйста, введите email');
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, emailError, 'Введите корректный email');
            isValid = false;
        } else {
            hideError(emailInput, emailError);
        }
        
        // Валидация сообщения
        if (messageInput.value.trim() === '') {
            showError(messageInput, messageError, 'Пожалуйста, введите сообщение');
            isValid = false;
        } else {
            hideError(messageInput, messageError);
        }
        
        // Если форма валидна
        if (isValid) {
            // Имитация отправки
            setTimeout(() => {
                successMessage.style.display = 'block';
                contactForm.reset();
                
                // Скрываем сообщение через 5 секунд
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            }, 1000);
            
            // В реальном проекте здесь был бы AJAX-запрос
            // Например: 
            // fetch('sendmail.php', {
            //     method: 'POST',
            //     body: new FormData(contactForm)
            // })
        }
    });
    
    // Функции для отображения/скрытия ошибок
    function showError(input, errorElement, message) {
        input.classList.add('error');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    function hideError(input, errorElement) {
        input.classList.remove('error');
        errorElement.style.display = 'none';
    }
    
    // Сброс ошибок при вводе
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                this.classList.remove('error');
                const errorId = this.id + 'Error';
                document.getElementById(errorId).style.display = 'none';
            }
        });
    });
});