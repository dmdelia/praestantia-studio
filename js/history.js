/*
========================================
PRAESTANTIA STUDIO
HISTORY SYSTEM
EST MMXXV
========================================
*/

const historyManager = {

    undoStack: [],
    redoStack: [],

    maxStates: 100,

    saveState() {

        if (!window.canvas) return;

        const state = JSON.stringify(
            window.canvas.toJSON()
        );

        this.undoStack.push(state);

        if (this.undoStack.length > this.maxStates) {

            this.undoStack.shift();

        }

        this.redoStack = [];

    },


    undo() {

        if (this.undoStack.length <= 1) return;

        const current = this.undoStack.pop();

        this.redoStack.push(current);

        const previous =
            this.undoStack[this.undoStack.length - 1];

        window.canvas.loadFromJSON(previous, () => {

            window.canvas.renderAll();

        });

    },


    redo() {

        if (this.redoStack.length === 0) return;

        const next = this.redoStack.pop();

        this.undoStack.push(next);

        window.canvas.loadFromJSON(next, () => {

            window.canvas.renderAll();

        });

    }

};


/*
========================================
AUTO SAVE STATES
========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {

        historyManager.saveState();

    }, 500);


    window.canvas.on("object:added", () => {

        historyManager.saveState();

    });


    window.canvas.on("object:modified", () => {

        historyManager.saveState();

    });


    window.canvas.on("object:removed", () => {

        historyManager.saveState();

    });

});


/*
========================================
KEYBOARD SHORTCUTS
========================================
*/

document.addEventListener("keydown", e => {

    /*
    CTRL + Z
    */

    if (e.ctrlKey && e.key === "z") {

        e.preventDefault();

        historyManager.undo();

    }


    /*
    CTRL + Y
    */

    if (e.ctrlKey && e.key === "y") {

        e.preventDefault();

        historyManager.redo();

    }

});