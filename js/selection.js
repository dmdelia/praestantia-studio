/*
========================================
PRAESTANTIA STUDIO
SELECTION.JS
EST MMXXV
========================================
*/


let clipboardObject = null;


/*
========================================
DELETE
========================================
*/

document.addEventListener("keydown", e => {

    if (
        e.key !== "Delete" &&
        e.key !== "Backspace"
    ) return;

    const active = window.canvas.getActiveObjects();

    if (!active.length) return;

    active.forEach(obj => {

        window.canvas.remove(obj);

    });

    window.canvas.discardActiveObject();

    window.canvas.renderAll();

});


/*
========================================
CTRL+A
========================================
*/

document.addEventListener("keydown", e => {

    if (
        e.ctrlKey &&
        e.key.toLowerCase() === "a"
    ) {

        e.preventDefault();

        const selection = new fabric.ActiveSelection(

            window.canvas.getObjects(),

            {

                canvas: canvas

            }

        );

        window.canvas.setActiveObject(selection);

        window.canvas.renderAll();

    }

});


/*
========================================
CTRL+C
========================================
*/

document.addEventListener("keydown", e => {

    if (
        e.ctrlKey &&
        e.key.toLowerCase() === "c"
    ) {

        e.preventDefault();

        const active = window.canvas.getActiveObject();

        if (!active) return;

        active.clone(cloned => {

            clipboardObject = cloned;

        });

    }

});


/*
========================================
CTRL+V
========================================
*/

document.addEventListener("keydown", e => {

    if (
        e.ctrlKey &&
        e.key.toLowerCase() === "v"
    ) {

        e.preventDefault();

        if (!clipboardObject) return;

        clipboardObject.clone(clonedObj => {

            window.canvas.discardActiveObject();

            clonedObj.set({

                left: clonedObj.left + 25,

                top: clonedObj.top + 25,

                evented: true

            });

            if (
                clonedObj.type === "activeSelection"
            ) {

                clonedObj.canvas = canvas;

                clonedObj.forEachObject(obj => {

                    window.canvas.add(obj);

                });

                clonedObj.setCoords();

            }

            else {

                window.canvas.add(clonedObj);

            }

            window.canvas.setActiveObject(clonedObj);

            window.canvas.renderAll();

        });

    }

});


/*
========================================
CTRL+D
DUPLICATE
========================================
*/

document.addEventListener("keydown", e => {

    if (
        e.ctrlKey &&
        e.key.toLowerCase() === "d"
    ) {

        e.preventDefault();

        const active = window.canvas.getActiveObject();

        if (!active) return;

        active.clone(cloned => {

            cloned.set({

                left: cloned.left + 30,

                top: cloned.top + 30

            });

            window.canvas.add(cloned);

            window.canvas.setActiveObject(cloned);

            window.canvas.renderAll();

        });

    }

});


/*
========================================
CTRL+G
GROUP
========================================
*/

document.addEventListener("keydown", e => {

    if (
        e.ctrlKey &&
        e.key.toLowerCase() === "g"
    ) {

        e.preventDefault();

        const active = window.canvas.getActiveObject();

        if (
            !active ||
            active.type !== "activeSelection"
        ) return;

        active.toGroup();

        window.canvas.renderAll();

    }

});


/*
========================================
CTRL+SHIFT+G
UNGROUP
========================================
*/

document.addEventListener("keydown", e => {

    if (
        e.ctrlKey &&
        e.shiftKey &&
        e.key.toLowerCase() === "g"
    ) {

        e.preventDefault();

        const active = window.canvas.getActiveObject();

        if (
            !active ||
            active.type !== "group"
        ) return;

        active.toActiveSelection();

        window.canvas.renderAll();

    }

});


/*
========================================
ESC
DESELECT
========================================
*/

document.addEventListener("keydown", e => {

    if (e.key !== "Escape") return;

    window.canvas.discardActiveObject();

    window.canvas.renderAll();

});


/*
========================================
HELPER FUNCTIONS
========================================
*/

window.deleteSelected = function () {

    const objects = window.canvas.getActiveObjects();

    objects.forEach(obj => {

        window.canvas.remove(obj);

    });

    window.canvas.discardActiveObject();

    window.canvas.renderAll();

};


window.selectAll = function () {

    const selection = new fabric.ActiveSelection(

        window.canvas.getObjects(),

        {

            canvas: canvas

        }

    );

    window.canvas.setActiveObject(selection);

    window.canvas.renderAll();

};


window.duplicateSelected = function () {

    document.dispatchEvent(

        new KeyboardEvent(

            "keydown",

            {

                ctrlKey: true,

                key: "d"

            }

        )

    );

};
