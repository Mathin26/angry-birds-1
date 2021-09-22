//a blueprint of a object is called a class
//an object has properties and functions
//properties-texture,colour,length,width
//function-what it can do..(write,draw,highlight)
class Ground{
    //constructor function is used to create properties
    constructor(x,y,w,h){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        var options={isStatic:true}
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options)
        World.add(world,this.body)
    }
    //drawing or displaying the body
    display(){
        var pos=this.body.position//x and y positions are stored
        rectMode(CENTER)//DRAWING the object from its center point
        fill("brown")
        rect(pos.x,pos.y,this.w,this.h)
      
    
    } 
}