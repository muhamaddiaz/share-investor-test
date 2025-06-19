// map-hotspot.js
// Handles interactive map hotspots and info cards
window.addEventListener('DOMContentLoaded', () => {
    const hotspots = document.querySelectorAll('.map-hotspot');
    const infoCards = document.querySelectorAll('.map-info-card');
    const closeButtons = document.querySelectorAll('.close-info-card');

    // Hide all info cards
    const closeAllInfoCards = () => {
        infoCards.forEach(card => card.classList.remove('active'));
    };

    // Close info cards when clicking outside
    document.addEventListener('click', e => {
        if (!e.target.closest('.map-hotspot') && !e.target.closest('.map-info-card')) {
            closeAllInfoCards();
        }
    });

    // Close button event
    closeButtons.forEach(button => {
        button.addEventListener('click', closeAllInfoCards);
    });

    // Hotspot click event
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', e => {
            e.stopPropagation();
            const location = hotspot.dataset.location;
            closeAllInfoCards();
            const infoCard = document.getElementById(`${location}-card`);
            if (infoCard) {
                infoCard.classList.add('active');
                // Position info card near hotspot
                const hotspotRect = hotspot.getBoundingClientRect();
                const mapRect = document.querySelector('.map-image').getBoundingClientRect();
                const top = hotspotRect.top - mapRect.top;
                const left = hotspotRect.left - mapRect.left;
                infoCard.style.top = `${top - 20}px`;
                infoCard.style.left = `${left + 70}px`;
            }
        });
    });
}); 