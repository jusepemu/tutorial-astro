const $hamburgerButton = document.querySelector('.hamburger')

$hamburgerButton?.addEventListener('click', () => {
    document.querySelector('.nav-links')?.classList.toggle('expanded');
})