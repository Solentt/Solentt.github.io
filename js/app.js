// app.js - Interactividad básica de la página

document.addEventListener('DOMContentLoaded', () => {
    // 1. Efecto de aparición de los elementos principales
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.style.opacity = '0';
        setTimeout(() => {
            mainContent.style.transition = 'opacity 0.8s ease-in-out';
            mainContent.style.opacity = '1';
        }, 100);
    }

    // 2. Resaltar enlace activo en la barra lateral
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        // Remover clase activa de todos
        link.classList.remove('active');
        
        // Si el enlace coincide con la página actual, añadir la clase activa
        // Si estamos en la raíz o ruta termina en / marcamos index.html
        if (link.getAttribute('href') === currentPath.split('/').pop() || 
            (currentPath.endsWith('/') && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });

    // 3. Toggle Sidebar
    const toggleBtn = document.getElementById('sidebar-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('sidebar-collapsed');
        });
    }
});
