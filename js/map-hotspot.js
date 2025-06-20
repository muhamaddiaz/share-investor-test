window.addEventListener('DOMContentLoaded', () => {
    const hotspots = document.querySelectorAll('.map-hotspot');
    const legendHotspots = document.querySelectorAll('.map-legend-hotspot');
    const infoCards = document.querySelectorAll('.map-info-card');
    const closeButtons = document.querySelectorAll('.close-info-card');

    const closeAllInfoCards = () => {
        infoCards.forEach(card => {
            card.classList.remove('active');

            const existingLine = card.querySelector('.dynamic-line');

            if (existingLine) {
                existingLine.remove();
            }
        });
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
                
                createDynamicLine(infoCard, mapHotspot, mapRect);
            }
        }
    };

    const createDynamicLine = (infoCard, hotspot) => {
        const existingLine = infoCard.querySelector('.dynamic-line');
        if (existingLine) {
            existingLine.remove();
        }

        const line = document.createElement('div');
        line.className = 'dynamic-line';
        line.style.cssText = `
            position: absolute;
            background-color: red;
            height: 2px;
            z-index: -1;
            pointer-events: none;
        `;

        let offset = 60;

        if (window.innerWidth >= 1400) {
            offset = 50;
        } else if (window.innerWidth >= 1200) {
            offset = 55;
        } 

        const mapContainer = document.querySelector('.map-image');
        const mapContainerRect = mapContainer.getBoundingClientRect();
        
        const hotspotRect = hotspot.getBoundingClientRect();
        const hotspotCenterX = (hotspotRect.left + hotspotRect.right) / 2 - mapContainerRect.left;
        
        const cardLeftRelative = hotspotRect.left - mapContainerRect.left + offset;
        
        const lineWidth = Math.abs(cardLeftRelative - hotspotCenterX);
        
        line.style.left = `-${lineWidth}px`;
        line.style.top = `34px`;
        line.style.width = `${lineWidth}px`;
        
        infoCard.appendChild(line);
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