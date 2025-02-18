const matterContainer = document.querySelector('#matter-container')
const thickness  = 60;

var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

var engine = Engine.create();

var render = Render.create({
    element: matterContainer,
    engine: engine,
    options: {
        width: matterContainer.clientWidth,
        height: matterContainer.clientHeight,
        background: "transparent",
        wireframes: false,
        showAngleIndicator: false
    }
});

var leftWall = Bodies.rectangle(
    0 - thickness / 2,
    matterContainer.clientHeight / 2,
    thickness,
    matterContainer.clientHeight * 5,
    {isStatic: true}
);

var rightWall = Bodies.rectangle(
    matterContainer.clientWidth + thickness / 2,
    matterContainer.clientHeight / 2,
    thickness,
    matterContainer.clientHeight * 5,
    { isStatic: true }
);

var ground = Bodies.rectangle(
    matterContainer.clientWidth / 2,
    matterContainer.clientHeight + (thickness  / 2),
    27184,
    thickness ,
    { isStatic: true }
);

objs.push(Bodies.rectangle(65, matterContainer.clientHeight - 50, 8, 100, {isStatic: true}));
objs.push(Bodies.rectangle(155, matterContainer.clientHeight - 50, 8, 100, {isStatic: true}));
objs.push(Bodies.rectangle(245, matterContainer.clientHeight - 50, 8, 100, {isStatic: true}));
objs.push(Bodies.rectangle(335, matterContainer.clientHeight - 50, 8, 100, {isStatic: true}));

objs.push(leftWall, rightWall, ground)

const number1 = Bodies.rectangle(30, matterContainer.clientHeight - 1, 60, 5, {isStatic: true})
const number2 = Bodies.rectangle(110, matterContainer.clientHeight - 1, 80, 5, {isStatic: true})
const number3 = Bodies.rectangle(200, matterContainer.clientHeight - 1, 80, 5, {isStatic: true})
const number4 = Bodies.rectangle(290, matterContainer.clientHeight - 1, 80, 5, {isStatic: true})
const number5 = Bodies.rectangle(380, matterContainer.clientHeight - 1, 80, 5, {isStatic: true})