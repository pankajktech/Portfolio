

function onToggleMenu(icon) {
    icon.name = icon.name === 'menu-outline' ? 'close-outline' : 'menu-outline';
    const nav = document.querySelector('ul');
    nav.classList.toggle('top-[6%]');
}

