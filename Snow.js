class createSnow{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1,
            isStatic:false           
        }
        //Choose correct code to create bodies
        //1.
        //this.snow = Bodies(x,y,5,options)
        //2.
        //this.snow = Bodies.circle(x,y,5,options)
        this.radius = 5;
        var rand=Math.round(random(1,2))
        var img;
        if(rand===1){
            img="snow4.webp";
        }
        else{
            img="snow5.webp";
        }

        //Choose correct statement for loadImage
        //1.
        //this.image=loadImage(img);
        //2.
        //this.image=ImageLoad(img);
        World.add(world, this.snow);
    }

    updateY(){     
        if(this.snow.position.y > height){

            Matter.Body.setPosition(this.snow, {x:random(0,800), y:random(0,800)})
        }
    }

    showDrop(){
        fill("blue")
        imageMode(CENTER);
        image(this.image,this.snow.position.x,this.snow.position.y,10,10);
    }
}