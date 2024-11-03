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


    }
    setInnerContainerWidth() {

    }
    setInnerContainer(){

    }
    insertCSS(){

    }
    insertHTML(){

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
