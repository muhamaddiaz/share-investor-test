window.addEventListener('DOMContentLoaded', () => {
    const hotspots = document.querySelectorAll('.map-hotspot');
    const legendHotspots = document.querySelectorAll('.map-legend-hotspot');
    const infoCards = document.querySelectorAll('.map-info-card');
    const closeButtons = document.querySelectorAll('.close-info-card');

    const closeAllInfoCards = () => {
        infoCards.forEach(card => card.classList.remove('active'));
    };

    const showInfoCard = (location) => {
        closeAllInfoCards();

        const infoCard = document.getElementById(`${location}-card`);
    
        if (infoCard) {
            infoCard.classList.add('active');
            
            const mapHotspot = document.querySelector(`[data-location="${location}"]`);
            if (mapHotspot) {
                const hotspotRect = mapHotspot.getBoundingClientRect();
                const mapRect = document.querySelector('.map-image').getBoundingClientRect();

                const top = hotspotRect.top - mapRect.top;
                const left = hotspotRect.left - mapRect.left;

                infoCard.style.top = `${top - 20}px`;
                infoCard.style.left = `${left + 70}px`;
            }
        }
    };

    document.addEventListener('click', e => {
        if (!e.target.closest('.map-hotspot') && 
            !e.target.closest('.map-info-card') && 
            !e.target.closest('.map-legend-hotspot')) {
            closeAllInfoCards();
        }
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', closeAllInfoCards);
    });

    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', e => {
            e.stopPropagation();
            const location = hotspot.dataset.location;
            showInfoCard(location);
        });
    });

    legendHotspots.forEach(legendHotspot => {
        legendHotspot.addEventListener('click', e => {
            e.stopPropagation();
            const location = legendHotspot.dataset.location;
            showInfoCard(location);
        });
    });
}); 