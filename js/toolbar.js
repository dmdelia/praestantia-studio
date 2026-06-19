/*
========================================
PRAESTANTIA STUDIO
TOOLBAR SYSTEM
EST MMXXV
========================================
*/


document.addEventListener("DOMContentLoaded", () => {

    const toolButtons = document.querySelectorAll(".tool-btn");

    /*
    ========================================
    BUTTON ROUTING
    ========================================
    */

    toolButtons.forEach(button => {

        button.addEventListener("click", () => {

            const tool = button.textContent.trim();

            switch (tool) {

                case "PLAYER":
                    addPlayer();
                    break;

                case "GOALKEEPER":
                    addGoalkeeper();
                    break;

                case "BALL":
                    addBall();
                    break;

                case "CONE":
                    addCone();
                    break;

                case "GOAL":
                    addGoal();
                    break;

                case "TEXT":
                    addText();
                    break;

                case "PASS":
                    activatePassTool();
                    break;

                case "RUN":
                    activateRunTool();
                    break;

                case "ARROW":
                    activateArrowTool();
                    break;

            }

        });

    });

});


/*
========================================
CONE
========================================
*/

window.addCone = function () {

    const cone = new fabric.Triangle({

        left: 700,
        top: 425,

        width: 24,
        height: 30,

        fill: "#D4AF37",

        stroke: "#F5F5F5",
        strokeWidth: 1

    });

    window.canvas.add(cone);
    window.canvas.setActiveObject(cone);

};


/*
========================================
GOAL
========================================
*/

window.addGoal = function () {

    const goal = new fabric.Rect({

        left: 700,
        top: 425,

        width: 90,
        height: 35,

        fill: "",

        stroke: "#D4AF37",

        strokeWidth: 3

    });

    window.canvas.add(goal);
    window.canvas.setActiveObject(goal);

};


/*
========================================
TEXT
========================================
*/

window.addText = function () {

    const text = new fabric.IText("PRU", {

        left: 700,
        top: 425,

        fontFamily: "Cormorant Garamond",

        fill: "#D4AF37",

        fontSize: 28,

        fontWeight: "bold"

    });

    window.canvas.add(text);

    window.canvas.setActiveObject(text);

};

/*

window.activateArrowTool = function () {

    console.log("Arrow Tool Activated");

};

window.activatePassTool = function () {

    console.log("Pass Tool Activated");

};

window.activateRunTool = function () {

    console.log("Run Tool Activated");

};
*/