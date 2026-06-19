/*
========================================
PRAESTANTIA STUDIO
PLAYERS.JS
EST MMXXV
========================================
*/


const playerDatabase = {

    players: [],

    add(player) {

        this.players.push(player);

        this.save();

    },

    remove(id) {

        this.players = this.players.filter(
            p => p.id !== id
        );

        this.save();

    },

    save() {

        localStorage.setItem(
            "pru_player_database",
            JSON.stringify(this.players)
        );

    },

    load() {

        const data = localStorage.getItem(
            "pru_player_database"
        );

        if (data) {

            this.players = JSON.parse(data);

        }

    }

};


playerDatabase.load();


/*
========================================
CREATE PLAYER
========================================
*/

window.createDatabasePlayer = function (

    name,
    number,
    position,
    color = "PRU"

) {

    const player = {

        id: crypto.randomUUID(),

        name: name,

        number: number,

        position: position,

        color: color,

        created: Date.now()

    };

    playerDatabase.add(player);

};


/*
========================================
PLACE PLAYER ON FIELD
========================================
*/

window.spawnDatabasePlayer = function (

    id,
    x = 700,
    y = 425

) {

    const player = playerDatabase.players.find(

        p => p.id === id

    );

    if (!player) return;


    let fillColor = "#090909";

    if (player.color === "OPPONENT")
        fillColor = "#F5F5F5";

    if (player.color === "KEEPER")
        fillColor = "#5B1F29";


    const circle = new fabric.Circle({

        radius: 20,

        fill: fillColor,

        stroke: "#D4AF37",

        strokeWidth: 3

    });


    const number = new fabric.Text(

        player.number.toString(),

        {

            fontSize: 18,

            fill: "#D4AF37",

            originX: "center",

            originY: "center"

        }

    );


    const group = new fabric.Group(

        [

            circle,

            number

        ],

        {

            left: x,

            top: y

        }

    );

    group.playerId = player.id;

    window.canvas.add(group);

};


/*
========================================
FORMATIONS
========================================
*/

window.create433 = function () {

    const ids = playerDatabase.players.map(
        p => p.id
    );

    if (ids.length < 11) {

        alert("11 Spieler benötigt.");

        return;

    }

    spawnDatabasePlayer(ids[0],100,390);

    spawnDatabasePlayer(ids[1],260,120);
    spawnDatabasePlayer(ids[2],260,300);
    spawnDatabasePlayer(ids[3],260,500);
    spawnDatabasePlayer(ids[4],260,680);

    spawnDatabasePlayer(ids[5],500,180);
    spawnDatabasePlayer(ids[6],500,390);
    spawnDatabasePlayer(ids[7],500,600);

    spawnDatabasePlayer(ids[8],820,180);
    spawnDatabasePlayer(ids[9],820,390);
    spawnDatabasePlayer(ids[10],820,600);

};


/*
========================================
INITIAL TEST PLAYERS
========================================
*/

if (playerDatabase.players.length === 0) {

    createDatabasePlayer("AURELIUS",1,"GK","KEEPER");

    createDatabasePlayer("VALENTIN",2,"RB");

    createDatabasePlayer("LUCIUS",3,"CB");

    createDatabasePlayer("SEVERIN",4,"CB");

    createDatabasePlayer("NOX",5,"LB");

    createDatabasePlayer("KAIROS",6,"CM");

    createDatabasePlayer("VICTOR",8,"CM");

    createDatabasePlayer("MARCUS",10,"CAM");

    createDatabasePlayer("CAELUS",7,"RW");

    createDatabasePlayer("LEON",9,"ST");

    createDatabasePlayer("ALEXIS",11,"LW");

}