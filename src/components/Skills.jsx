import React, { useRef, useEffect } from 'react';

// InfiniteSlider Class
class InfiniteSlider {
    constructor(config = {}) {
        this.container = config.container || null; // The container where the slider will be rendered
        this.outerContainer = {
            selector: config.outerContainer?.selector || '.inf-slider__outer-container',
            height: config.outerContainer?.height || 500,
            background: config.outerContainer?.background || 'inherit',
            element: null,
            "z-index": 9999,  // Set z-index for outer container
        };

        this.innerContainer = {
            selector: '.inf-slider__inner-container',
            array: [],
            width: null,
        };

        this.title = config.title || {};
        this.title.text = config.title.text || 'Infinite Slider';
        this.title.fontSize = config.title.fontSize || 74;
        this.title.fontFamily = config.title.fontFamily || 'Arial';
        this.title.textAlign = config.title.textAlign || 'center';
        this.title["z-index"] = 99999; // Set z-index for title

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
        }
    }

    setInnerContainerWidth() {
        this.innerContainer.width = this.elements.items.length * (this.elements.width + (this.elements.margin * 2));
    }

    setAllInnerContainers() {
        const containerAmount = Math.ceil(this.outerContainer.element.offsetWidth / this.innerContainer.width) + 100;

        for (let i = 0; i < containerAmount; i++) {
            let elementsHTML = '';
            let containerSelector = `inf-slider__inner-container--${i}`;

            for (let item of this.elements.items) {
                elementsHTML += `
                    ${!item.src
                        ? `<div class="inf-slider__slide">${item.content}</div>`
                        : `<div class="inf-slider__slide"><img src="${item.src}" alt="${item.content}"></div>`
                    }
                `;
            }

            const containerHTML = `
                <div class="${this.innerContainer.selector.replace('.', '')} ${containerSelector}" 
                     style="transform: translate(${this.innerContainer.width * i}px, -50%); z-index: 9998">
                    ${elementsHTML}
                </div>
            `;

            this.innerContainer.array.push({
                containerHTML: containerHTML,
                containerSelector: containerSelector
            });
        }
    }

    insertCSS() {
        const styleTag = document.createElement('style');
        const sliderCSS = `
            ${this.outerContainer.selector} {
                background: ${this.outerContainer.background};
                position: relative;
                width: 100%;
                height: ${this.outerContainer.height}px;
                max-width: 1200px;
                margin: 50px auto 0; /* Move container down with margin-top */
                overflow: hidden;
                display: grid;
                z-index: ${this.outerContainer["z-index"]}; /* Ensures outer container is on top */
                border-radius: 10px;
                padding: 20px;
                border: 2px solid #555
             
            }
            .inf-slider__slide {
                width: ${this.elements.width}px;
                margin: ${this.elements.margin}px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
    
            .inf-slider__slide img {
                width: 100%; /* Adjust based on parent container width */
                height: auto; /* Maintain aspect ratio */
                max-width: ${this.elements.width}px; /* Constrain max width */
                max-height: ${this.elements.width}px; /* Constrain max height */
                object-fit: cover; /* Ensures the logo fits within the container */
            }
            /* Add overlay background */
        ${this.outerContainer.selector}::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3); /* Semi-transparent black overlay */
            z-index: -1; /* Ensure overlay is below content */
        }

        ${this.outerContainer.selector} img {
            position: relative;
            z-index: 1; /* Keep images above overlay */
        }
    
            .inf-slider__title {
                font-size: ${this.title.fontSize}px;
                text-align: ${this.title.textAlign};
                font-family: ${this.title.fontFamily};
                z-index: ${this.title["z-index"]}; /* Title above other content */
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 100%;
            }
    
            ${this.innerContainer.selector} {
                position: absolute;
                top: 20%; /* Adjust this value to move logos further down inside the container */
                display: grid;
                width: ${this.innerContainer.width}px;
                grid-template-columns: repeat(${this.elements.items.length}, 1fr);
                z-index: 9998; /* Set z-index for inner containers */
            }
    
            .inf-slider__slide {
                width: ${this.elements.width}px;
                height: ${this.elements.width}px;
                margin: ${this.elements.margin}px;
                z-index: 9998; /* Set z-index for individual slides */
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
        const outerLeft = this.outerContainer.element.offsetLeft;
        const allContainers = document.querySelectorAll(this.innerContainer.selector);
        const steps = Array.from({ length: allContainers.length }, (_, i) => i * this.innerContainer.width);

        this.sliderControls.interval = setInterval(() => {
            for (let i = 0; i < allContainers.length; i++) {
                const rightEdge = allContainers[i].getBoundingClientRect().right;

                if (rightEdge < outerLeft) {
                    steps[i] = Math.max(...steps) + this.innerContainer.width;
                    allContainers[i].style.transform = `translate(${steps[i]}px, -50%)`;
                } else {
                    steps[i] -= this.sliderControls.steps;
                }

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

// React Component for InfiniteSlider
const InfiniteSliderComponent = ({ config }) => {
    const sliderContainerRef = useRef(null);  // Create a ref for the container

    useEffect(() => {
        // Ensure the slider initializes after the component is mounted
        if (sliderContainerRef.current) {
            const slider = new InfiniteSlider({
                container: sliderContainerRef.current,  // Pass the container ref to the class
                ...config,  // Pass other necessary props for the slider
            });

            // Start the slider animation if autoStart is true
            if (config.sliderControls?.autoStart) {
                slider.startAnimation();
            }

            // Clean up interval when the component is unmounted
            return () => {
                if (slider.sliderControls?.interval) {
                    clearInterval(slider.sliderControls.interval);
                }
            };
        }
    }, [config]);  // Re-run if the config changes

    return <div ref={sliderContainerRef} className="inf-slider__outer-container" />;
};

export default InfiniteSliderComponent;
