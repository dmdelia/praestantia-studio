/*
========================================
PRAESTANTIA STUDIO
ARROWS.JS
EST MMXXV
========================================
*/

let currentTool = null;

window.activateArrowTool = function () {

    currentTool = "arrow";

    console.log("ARROW MODE");

};


window.activatePassTool = function () {

    currentTool = "pass";

    console.log("PASS MODE");

};


window.activateRunTool = function () {

    currentTool = "run";

    console.log("RUN MODE");

};


/*
========================================
CLICK TO DRAW
========================================
*/

let startPoint = null;

document.addEventListener("pruCanvasReady", () => {

    window.canvas.on("mouse:down", function (o) {

        if (
            currentTool !== "arrow" &&
            currentTool !== "pass" &&
            currentTool !== "run"
        ) return;

        const pointer = window.canvas.getPointer(o.e);

        if (!startPoint) {

            startPoint = {
                x: pointer.x,
                y: pointer.y
            };

            return;
        }

        const endPoint = {

            x: pointer.x,
            y: pointer.y

        };

        switch (currentTool) {

            case "arrow":
                createArrow(startPoint, endPoint);
                break;

            case "pass":
                createPassArrow(startPoint, endPoint);
                break;

            case "run":
                createRunArrow(startPoint, endPoint);
                break;

        }

        startPoint = null;
        currentTool = null;

    });

});


/*
========================================
NORMAL ARROW
========================================
*/

function createArrow(start, end) {

    const line = new fabric.Line(
        [start.x, start.y, end.x, end.y],
        {
            stroke: "#D4AF37",
            strokeWidth: 4
        }
    );

    const head = createArrowHead(start, end, "#D4AF37");

    const group = new fabric.Group(
        [
            line,
            head
        ]
    );

    window.canvas.add(group);

}


/*
========================================
PASS ARROW
========================================
*/

function createPassArrow(start, end) {

    const line = new fabric.Line(
        [start.x, start.y, end.x, end.y],
        {
            stroke: "#F5F5F5",
            strokeWidth: 3,
            strokeDashArray: [12, 8]
        }
    );

    const head = createArrowHead(start, end, "#F5F5F5");

    const group = new fabric.Group(
        [
            line,
            head
        ]
    );

    window.canvas.add(group);

}


/*
========================================
RUN ARROW
========================================
*/

function createRunArrow(start, end) {

    const line = new fabric.Line(
        [start.x, start.y, end.x, end.y],
        {
            stroke: "#5B1F29",
            strokeWidth: 4,
            strokeDashArray: [20, 10]
        }
    );

    const head = createArrowHead(start, end, "#5B1F29");

    const group = new fabric.Group(
        [
            line,
            head
        ]
    );

    window.canvas.add(group);

}


/*
========================================
ARROWHEAD
========================================
*/

function createArrowHead(start, end, color) {

    const angle =
        Math.atan2(
            end.y - start.y,
            end.x - start.x
        ) * 180 / Math.PI;

    return new fabric.Triangle({

        left: end.x,

        top: end.y,

        originX: "center",

        originY: "center",

        width: 18,

        height: 24,

        fill: color,

        angle: angle + 90

    });

}
