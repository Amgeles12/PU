const fleetItems = document.querySelectorAll('.flota-item');

fleetItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.02)';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});