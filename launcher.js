class launcher{
    constructor(body,anchor){
        var options={
            pointB:anchor,
            stiffness:0.004,
            lenght:1
        }
        this.bodyA=body
        this.pointB=anchor
        this.launcher= constraint.create(options)
        World.add(world,this.launcher)
    }
    attach(body){
        this.launcher.bodyA
    }
    fly()
    {
        this.launcher.bodyA= null
    }
    display(){
        if(this.launcher.bodyA){
            var pointA= this.bodyA.position
            var pointB=this.pointB
            strokeWeight(2)
            line(pointA.x,pointA.y,pointB,pointB.y)
        }
    }
}