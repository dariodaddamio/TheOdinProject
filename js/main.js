window.onload = function() {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.classList.add('fade-in');
        setTimeout(function() {
            logo.addEventListener('click', function() {
                logo.classList.add('fade-out');
                setTimeout(function() {
                    window.location.href = 'homepage.html';
                }, 1000);
            });
        }, 0);
    }
        
    const navLogo = document.querySelector('.nav-logo');
    if (navLogo) {
        setTimeout(function() {
            navLogo.addEventListener('click', function() {
                window.location.href = 'homepage.html';
            });
        }, 100);
    }
}