var hypnoticball,database,position;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    hypnoticball = createSprite(250,250,10,10);
    hypnoticball.shapeColor = "red";

    var hypnoticballposition = database.ref('ball/position');
    hypnoticballposition.on("value",readposition,showerror)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
function readposition(data){
    position=data.val();
    hypnoticball.x=position.x;
    hypnoticball.y=position.y;
}
function writePosition(x,y){
  database.ref('ball/position').set({
      'x':position.x+x,
      'y':position.y+y
  })
}
function showerror(){
    console.log("error in reading the database")
}