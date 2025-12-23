// Бургер-меню
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Создаем или удаляем overlay
        let overlay = document.querySelector('.overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.classList.add('overlay');
            document.body.appendChild(overlay);
        }
        
        overlay.classList.toggle('active');
        
        // Закрытие меню по клику на overlay
        overlay.addEventListener('click', closeMenu);
    });
    
    // Закрытие меню при клике на ссылку
    const menuLinks = document.querySelectorAll('.mobile-menu__link');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    function closeMenu() {
        burger.classList.remove('active');
        mobileMenu.classList.remove('active');
        const overlay = document.querySelector('.overlay');
        if (overlay) overlay.classList.remove('active');
    }
});