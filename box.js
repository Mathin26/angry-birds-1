//a blueprint of a object is called a class
//an object has properties and functions
//properties-texture,colour,length,width
//function-what it can do..(write,draw,highlight)
class Box{
    //constructor function is used to create properties
    constructor(x,y,w,h){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        var options={restitution:0.8,
        friction:1.0,
    density:1.0}
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options)
        World.add(world,this.body)
    }
    //drawing or displaying the body
    display(){
        var pos=this.body.position//x and y positions are stored
        var angle=this.body.angle//storing the angle of the body as it rotates
        push()//adding new settings
        translate(pos.x,pos.y)//displacement 
        rotate(angle)//rotating with the angle given
        rectMode(CENTER)//DRAWING the object from its center point
        rect(0,0,this.w,this.h)
        pop()//removing the settings

    }
}