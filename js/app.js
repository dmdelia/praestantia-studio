/*
========================================
PRAESTANTIA STUDIO
EST MMXXV
APP INITIALIZATION
========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /*
    ========================================
    CANVAS
    ========================================
    */

    const canvas = new fabric.Canvas("fieldCanvas", {
        selection: true,
        preserveObjectStacking: true
    });

    window.canvas = canvas;
    document.dispatchEvent(
        new Event("pruCanvasReady")
    );

    /*
    ========================================
    CANVAS SIZE
    ========================================
    */

    window.canvas.setWidth(1400);
    window.canvas.setHeight(850);

    window.canvas.backgroundColor = "#111111";

    window.canvas.renderAll();


    /*
    ========================================
    COLORS
    ========================================
    */

    const COLORS = {

        PRI: "#090909",
        SEK: "#D4AF37",
        TER: "#F5F5F5",
        QUA: "#5B1F29",

        FIELD: "#111111",
        LINES: "#D4AF37"

    };


    /*
    ========================================
    FIELD
    ========================================
    */

    drawFootballField();


    function drawFootballField() {

        // Hintergrund
        const background = new fabric.Rect({
            left: 0,
            top: 0,
            width: window.canvas.width,
            height: window.canvas.height,
            fill: COLORS.FIELD,
            selectable: false,
            evented: false
        });

        window.canvas.add(background);


        /*
        ========================================
        OUTER LINES
        ========================================
        */

        const outer = new fabric.Rect({
            left: 100,
            top: 70,
            width: 1200,
            height: 710,
            fill: "",
            stroke: COLORS.LINES,
            strokeWidth: 3,
            selectable: false,
            evented: false
        });

        window.canvas.add(outer);


        /*
        ========================================
        MIDDLE LINE
        ========================================
        */

        window.canvas.add(new fabric.Line(
            [700, 70, 700, 780],
            {
                stroke: COLORS.LINES,
                strokeWidth: 3,
                selectable: false,
                evented: false
            }
        ));


        /*
        ========================================
        CENTER CIRCLE
        ========================================
        */

        window.canvas.add(new fabric.Circle({
            radius: 90,
            left: 610,
            top: 335,
            stroke: COLORS.LINES,
            strokeWidth: 3,
            fill: "",
            selectable: false,
            evented: false
        }));


        /*
        ========================================
        CENTER POINT
        ========================================
        */

        window.canvas.add(new fabric.Circle({
            radius: 4,
            left: 696,
            top: 421,
            fill: COLORS.LINES,
            selectable: false,
            evented: false
        }));


        /*
        ========================================
        PENALTY BOX LEFT
        ========================================
        */

        window.canvas.add(new fabric.Rect({
            left: 100,
            top: 220,
            width: 180,
            height: 410,
            fill: "",
            stroke: COLORS.LINES,
            strokeWidth: 3,
            selectable: false,
            evented: false
        }));


        /*
        ========================================
        GOAL AREA LEFT
        ========================================
        */

        window.canvas.add(new fabric.Rect({
            left: 100,
            top: 310,
            width: 70,
            height: 230,
            fill: "",
            stroke: COLORS.LINES,
            strokeWidth: 3,
            selectable: false,
            evented: false
        }));


        /*
        ========================================
        PENALTY BOX RIGHT
        ========================================
        */

        window.canvas.add(new fabric.Rect({
            left: 1120,
            top: 220,
            width: 180,
            height: 410,
            fill: "",
            stroke: COLORS.LINES,
            strokeWidth: 3,
            selectable: false,
            evented: false
        }));


        /*
        ========================================
        GOAL AREA RIGHT
        ========================================
        */

        window.canvas.add(new fabric.Rect({
            left: 1230,
            top: 310,
            width: 70,
            height: 230,
            fill: "",
            stroke: COLORS.LINES,
            strokeWidth: 3,
            selectable: false,
            evented: false
        }));


        /*
        ========================================
        PENALTY POINTS
        ========================================
        */

        window.canvas.add(new fabric.Circle({
            radius: 4,
            left: 206,
            top: 421,
            fill: COLORS.LINES,
            selectable: false,
            evented: false
        }));

        window.canvas.add(new fabric.Circle({
            radius: 4,
            left: 1186,
            top: 421,
            fill: COLORS.LINES,
            selectable: false,
            evented: false
        }));


        /*
        ========================================
        GOALS
        ========================================
        */

        window.canvas.add(new fabric.Rect({
            left: 85,
            top: 355,
            width: 15,
            height: 140,
            stroke: COLORS.LINES,
            strokeWidth: 2,
            fill: "",
            selectable: false,
            evented: false
        }));


        window.canvas.add(new fabric.Rect({
            left: 1300,
            top: 355,
            width: 15,
            height: 140,
            stroke: COLORS.LINES,
            strokeWidth: 2,
            fill: "",
            selectable: false,
            evented: false
        }));

    }


    /*
    ========================================
    PLAYER FUNCTION
    ========================================
    */

    window.addPlayer = function (x = 700, y = 425) {

        const player = new fabric.Circle({

            radius: 18,

            fill: COLORS.PRI,

            stroke: COLORS.SEK,

            strokeWidth: 3,

            left: x,

            top: y

        });

        window.canvas.add(player);
        window.canvas.setActiveObject(player);

    };


    /*
    ========================================
    OPPONENT
    ========================================
    */

    window.addOpponent = function (x = 700, y = 425) {

        const opponent = new fabric.Circle({

            radius: 18,

            fill: COLORS.TER,

            stroke: COLORS.SEK,

            strokeWidth: 3,

            left: x,

            top: y

        });

        window.canvas.add(opponent);
        window.canvas.setActiveObject(opponent);

    };


    /*
    ========================================
    GOALKEEPER
    ========================================
    */

    window.addGoalkeeper = function (x = 700, y = 425) {

        const keeper = new fabric.Circle({

            radius: 18,

            fill: COLORS.QUA,

            stroke: COLORS.SEK,

            strokeWidth: 3,

            left: x,

            top: y

        });

        window.canvas.add(keeper);
        window.canvas.setActiveObject(keeper);

    };


    /*
    ========================================
    BALL
    ========================================
    */

    window.addBall = function (x = 700, y = 425) {

        const ball = new fabric.Circle({

            radius: 8,

            fill: COLORS.SEK,

            stroke: COLORS.TER,

            strokeWidth: 2,

            left: x,

            top: y

        });

        window.canvas.add(ball);

    };


    /*
    ========================================
    RENDER
    ========================================
    */

    window.canvas.renderAll();

});