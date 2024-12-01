import React, { useEffect, useRef } from 'react';

// InfiniteSlider Class
class InfiniteSlider {
    constructor(config = {}) {
        this.container = config.container || null;

        this.outerContainer = {
            selector: config.outerContainer?.selector || '.accordion-main',
            height: config.outerContainer?.height || 200,
            background: config.outerContainer?.background || 'inherit',
            element: null,
            "z-index": 9999,
        };

        this.innerContainer = {
            selector: '.inf-slider__inner-container',
            array: [],
            width: null,
        };

        this.elements = config.elements || {};
        this.elements.width = config.elements.width || 70;
        this.elements.margin = config.elements.margin || 20;
        this.elements.items = config.elements.items || [];
        this.elements.background = config.elements.background || 'inherit';

        this.sliderControls = config.sliderControls || {};
        this.sliderControls.autoStart = config.sliderControls.autoStart || false;
        this.sliderControls.steps = config.sliderControls.steps || 1;
        this.sliderControls.intervalTime = config.sliderControls.intervalTime || 50;
        this.sliderControls.interval = null;

        this.init();
    }

    setOuterContainer() {
        if (this.container) {
            this.outerContainer.element = this.container;
            this.outerContainer.element.classList.add('project-event');
        }
    }

    setInnerContainerWidth() {
        this.innerContainer.width =
            this.elements.items.length * (this.elements.width + this.elements.margin * 2);
    }

    setAllInnerContainers() {
        const containerAmount = Math.ceil(
            this.outerContainer.element.offsetWidth / this.innerContainer.width
        ) + 100;

        for (let i = 0; i < containerAmount; i++) {
            let elementsHTML = '';
            let containerSelector = `inf-slider__inner-container--${i}`;

            for (let item of this.elements.items) {
                elementsHTML += `
                    <div class="inf-slider__slide image-style">
                        <img src="${item.src}" alt="${item.content}" class="image-style" />
                    </div>
                `;
            }

            const containerHTML = `
                <div class="${this.innerContainer.selector.replace('.', '')} ${containerSelector}"
                     style="transform: translate(${this.innerContainer.width * i}px, -50%);">
                    ${elementsHTML}
                </div>
            `;

            this.innerContainer.array.push({
                containerHTML: containerHTML,
                containerSelector: containerSelector,
            });
        }
    }

    insertCSS() {
        const styleTag = document.createElement('style');
        const sliderCSS = `
            ${this.outerContainer.selector} {
                position: relative;
                width: 100%;
                height: ${this.outerContainer.height}px;
                max-width: 1200px;
                margin: 50px auto;
                overflow: hidden;
                display: grid;
                z-index: ${this.outerContainer['z-index']};
                padding: 20px;
            }

            .inf-slider__slide {
                width: ${this.elements.width}px;
                height: ${this.elements.width}px;
                margin: ${this.elements.margin}px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .inf-slider__slide img {
                width: 100%;
                height: auto;
                max-width: ${this.elements.width}px;
                max-height: ${this.elements.width}px;
                object-fit: cover;
            }

            .inf-slider__title {
                font-size: ${this.elements.fontSize || 74}px;
                text-align: center;
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                z-index: 9999;
            }

            ${this.innerContainer.selector} {
                position: absolute;
                top: 50%;
                display: grid;
                width: ${this.innerContainer.width}px;
                grid-template-columns: repeat(${this.elements.items.length}, 1fr);
            }
        `;
        styleTag.innerHTML = sliderCSS;
        document.head.appendChild(styleTag);
    }

    insertHTML() {
        if (this.outerContainer.element) {
            this.outerContainer.element.innerHTML = '';

            let innerHTML = '';
            for (const container of this.innerContainer.array) {
                innerHTML += container.containerHTML;
            }

            this.outerContainer.element.innerHTML += `
                <div class="${this.innerContainer.selector.replace('.', '')}-wrapper">
                    ${innerHTML}
                </div>
            `;
        }
    }

    startAnimation() {
        const allContainers = document.querySelectorAll(this.innerContainer.selector);
        const steps = Array.from(
            { length: allContainers.length },
            (_, i) => i * this.innerContainer.width
        );

        this.sliderControls.interval = setInterval(() => {
            for (let i = 0; i < allContainers.length; i++) {
                steps[i] -= this.sliderControls.steps;
                allContainers[i].style.transform = `translate(${steps[i]}px, -50%)`;
            }
        }, this.sliderControls.intervalTime);
    }

    init() {
        this.setOuterContainer();
        this.setInnerContainerWidth();
        this.setAllInnerContainers();
        this.insertCSS();
        this.insertHTML();

        if (this.sliderControls.autoStart) {
            this.startAnimation();
        }
    }
}

// InfiniteSlider React Component
const InfiniteSliderComponent = ({ config }) => {
    const sliderRef = useRef();

    useEffect(() => {
        const slider = new InfiniteSlider({
            ...config,
            container: sliderRef.current,
        });

        return () => {
            // Cleanup interval on unmount
            if (slider.sliderControls.interval) {
                clearInterval(slider.sliderControls.interval);
            }
        };
    }, [config]);

    return <div ref={sliderRef} className="accordion-main"></div>;
};

export default InfiniteSliderComponent;
