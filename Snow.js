class Snow{
    constructor(x,y,width,height){
        var options = {
            friction:1,
            density:1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("snow1.jpg");
        World.add(world,this.body);
    }
    display(){
        imagemode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}