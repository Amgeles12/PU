document.addEventListener('DOMContentLoaded', () => {
    const promoItems = document.querySelectorAll('.promo-item');

    promoItems.forEach(item => {
        item.addEventListener('click', () => {
            alert(`¡Has seleccionado la promoción: ${item.innerText.trim()}!`);
        });
    });
});