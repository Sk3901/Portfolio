export default class infiniteSlider{
    constructor(config = {}) {

        this.outerContainer = config.outerContainer || {};
        this.outerContainer.selector = config.outerContainer.selector || 'inf_slider_outer_container';
        this.outerContainer.height = config.outerContainer.height || 200;
        this.outerContainer.margin = config.outerContainer.margin || '0 auto';
        this.outerContainer.padding = config.outerContainer.padding || 0;
        this.outerContainer.maxWidth = config.outerContainer.maxWidth || 1200;
        this.outerContainer.background = config.outerContainer.background || 'inherit';
        this.outerContainer.sideGradientRGB = config.outerContainer.sideGradientRGB || '';
        this.outerContainer.element = null;

        this.setInnerContainer = {};
        this.setInnerContainer.selector = 'inf_slider_inner_container';
        this.setInnerContainer.array = [];
        this.setInnerContainer.width = null

        this.title= config.title || {};
        this.title.text = config.title.text || null;
        this.title.fontSize = config.title.fontSize || 74;
        this.title.fontFamily = config.title.fontFamily || "'Open Sans', sans-serif";
        this.title.textAlign = config.title.textAlign || 'center';  
        this.title.padding = config.title.padding || 20;


        this.elements = config.elements || {};
        this.elements.width = config.elements.width || 70;
        this.elements.margin = config.elements.margin || 20;
        this.elements.padding = config.elements.padding || 20;
        this.elements.items = config.elements.items || []; 
        this.elements.background = config.elements.background || 'inherit';

        this.sliderControls = config.sliderControls || {};
        this.sliderControls.autostart = config.sliderControls.autoStart || null;
        this.sliderControls.steps = config.sliderControls.steps || 1;
        this.sliderControls.intervalTime = config.sliderControls.intervalTime || 50;
        this.sliderControls.developmentMode = config.sliderControls.developmentMode || false;
        this.sliderControls.interval = null;

        this.init();


    }

    setOuterContainer() {
        this.outerContainer.element = document.querySelector(this.outerContainer.selector);


    }
    setInnerContainerWidth() {
        this.setInnerContainer.width = this.elements.items.length * (this.elements.width + (this.elements.margin * 2));


    }
    setInnerContainer(){
        var containerAmount = Math.ceil(this.outerContainer.maxWidth / this.innerContainer.width) + 1;
        for (var i=0; i < containerAmount; i++) {
            let containerHTML = '';
            let elemntsHTML = '';
            let containerSelector = `${this.innerContainer.selector.replaceAll('.','')}--${i}`;


            for (var item of thisq.elements.items) {
                elementsHTML += `
                ${!item.src
                ? 'div class="inf-slider__slide">' + item.content + '</div>'
                : '<div class="inf-slider__slide"><img src ="' + item.src + '></div>'
            }`
            }
            containerHTML = `
            <div class="${this.innerContainer.selector.replaceAll('.', '')} ${containerSelector}>
                ${elemntsHTML}

            </div>
            `

            this.innerContainer.array.push({
                containerHTML: containerHTML,
                contaierSelector: containerSelector
            })
        }

    }
    insertCSS(){
        var styletag = document.createElement('style');
        styletag.id = 'inf-slider-css';
        styletag.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

        ${this.outerContainer.selector}{
            border: ${this.sliderControls.developmentMode ? '1px solid limegreen' : '' };
            background: ${this.outerContainer.background};
            position: relative;
            width: 90%;
            height: ${this.outerContainer.height}px;
            max-width: ${this.outerContainer.maxWidth}px;
            margin: 0 auto;
            padding: ${this.outerContainer.padding}px;
            overflow: hidden;
            display: grid;
        }

        ${this.onnerContainer.selector}::before,
        ${this.outerContainer.selector}::after{
            content: '';
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            background: ${this.outerContainer.sideGradientRGB.length > 0
            ? 'linear-gradient(to right, rgba(' + this.outerContainer.sideGradientRGB + ', 1) 0%, rgba(' + this.outerContainer.sideGradientRGB + ', 0) 10%)'
            : '' }
        z-index: 5;
    }
    ${this.outerContainer.selector}::after {
        right: 0px;
        background: ${this.outerContainer.sideGradientRGB.length > 0 
            ? 'linear-gradient(to left, rgba(' + this.outerContainer.sideGradientRGB + ',1) 0%, rgba(' + this.outerContainer.sideGradientRGB + ',0) 10%)'  
            : ''};
    }
    .inf-slider__show-title-wrapper {
        display: block;
        text-align: ${this.title.textAlign};
    }
    .inf-slider__hide-title-wrapper {
        display: none;
        overflow: hidden;
    }

    .inf-slider__title{
        color: ${this.title.colorCode};
        font-size: ${this.title.fontSize};
        font-family: ${this.title.fontFamily || "'Open Sans', sans-serif"};
        padding: ${this.title.padding}px;
    }

    ${this.innerContainer.selector}-wrapper {
        position:relative;
        height: 100%;
        
    }

    ${this.innerContainer.selector} {
        position: absolute;
        top: 0;
        display; grid;
        grid-template-columns: repeat(${this.elements.items.length}, 1fr);
        width: ${this.sliderControls.developmentMode ? 'red 1px solid' : ''};
    }

    .inf-slider__slide {
        display: inline-block;
        background: ${this.elements.background};
        margin: ${this.elements.margin}px;
        padding: ${this.elements.padding}px;
        width: ${this.elements.width}px;
        height: ${this.elements.width * 2};
        font-family: ${this.title.fontFamily || "'Open Sans', sans-serif"};
        position: relative;
    }
    .inf-slider__slide img {
        width: 100%;
        
    }
    `
    document.head.appendChild(styletag);
    };
    

    insertHTML(){
        var innerSliderHTML = '';

        this.outerContainer.element.innerHTML += `
        <div class="${this.title.text ? 'inf-slider__show-title-wrapper' : 'inf-slider__hide-title-wrapper'}">
        <h1 class="inf-slider__title">${this.title.text}</h1>

        </div>

        this.outerContainer.element.innerHTML += `
        <div class="${this.innercontainer.selector.replaceAll('.','')}-wrapper">
            ${innerSliderHTML}
        </div>
        `;
    }
    startAnimation(){

    }

    init() {
        this.setOuterContainer();
        this.setInnerContainerWidth();
        this.setInnerContainer();
        this.insertCSS();
        this.insertHTML()
        this.startAnimation();
    }


}

var sliderConfig = {
    setOuterContainer: {
        selector: 'inf_slider_outer_container',
        height: 300,
        margin: '0 auto',
        padding: 20,
        maxWidth: 1500,
        background: '#fff',
        sideGradientRGB: '255,255,255',

    },
    title: {
        text: "Skills and tools",
        fontSize: 74,
        fontFamily: "'Open Sans', sans-serif",
        colorCode: '#333',
        textAlign: 'center',
        padding: 25,

    },
    elements: {
        width: 250,
        margin: 20,
        padding: 0,
        background: 'inherit',
        color: '#333',
        items:
        [
            {src: '../assets/images/css.jpg', title: 'CSS'},
            {src: '../assets/images/flask.jpg', title: 'Flask'},
            {src: '../assets/images/fly.jpg', title: 'Fly.io'},
            {src: '../assets/images/git.jpg', title: 'Git'},
            {src: '../assets/images/github.jpg', title: 'Github'},
            {src: '../assets/images/html.jpg', title: 'Html'},
            {src: '../assets/images/js.jpg', title: 'Js'},
            {src: '../assets/images/md.jpg', title: 'Md'},
            {src: '../assets/images/mongo.jpg', title: 'Mongo'},
            {src: '../assets/images/mysql.jpg', title: 'Mysql'},
            {src: '../assets/images/postman.jpg', title: 'Postman'},
            {src: '../assets/images/pycharm.jpg', title: 'Pycharm'},
            {src: '../assets/images/python.jpg', title: 'Python'},
            {src: '../assets/images/react.jpg', title: 'React'},
            {src: '../assets/images/trello.jpg', title: 'Trello'},
            {src: '../assets/images/vscode.jpg', title: 'Vscode'},


        ]

    },
    sliderControls: {
        autostart: true,
        step: 1,
        intervalTime: 50,
        developmentMode: false,

    }
}

