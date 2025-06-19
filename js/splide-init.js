window.addEventListener('DOMContentLoaded', () => {
    const splideOptions = {
        perPage: 4,
        gap: 0,
        pagination: true,
        arrows: false,
        classes: {
            pagination: 'splide__pagination',
            page: 'splide__pagination__page',
        },
        breakpoints: {
            992: { perPage: 2, gap: 0 },
            576: { perPage: 1, gap: 0 }
        }
    };

    const sliderIds = [
        'busSlider',
        'trucksSlider',
        'passengerSlider',
        'transporterSlider',
        'forkliftSlider'
    ];
    const sliders = {};

    sliderIds.forEach(id => {
        const sliderEl = document.getElementById(id);
        if (!sliderEl) return;
        const slider = new Splide(`#${id}`, splideOptions);

        // Custom pagination
        slider.on('pagination:mounted', data => {
            data.list.classList.add('splide__pagination--custom');
            data.items.forEach(item => {
                item.button.setAttribute('aria-label', `Go to slide ${item.page + 1}`);
                item.button.addEventListener('click', () => {
                    item.button.classList.add('clicked');
                    setTimeout(() => item.button.classList.remove('clicked'), 300);
                });
            });
        });

        slider.mount();
        sliders[id] = slider;
    });
}); 