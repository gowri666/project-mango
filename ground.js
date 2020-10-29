class ground{
    constructor(x,y,w,h){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.bodies= this.bodies.rectangle(x,y,w,h,options)
        world.add(world,this.body)
    }
    display(){
        var groundPos= this.body.position
        push()
        translate(groundPos.x,groundPos.y)
        rectMode(CENTER)
        fill(128,128,128)
        rect(0,0,this.w,this.h)
        pop()
    }
}