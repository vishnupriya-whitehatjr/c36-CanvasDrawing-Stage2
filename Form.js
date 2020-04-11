class Form{
    constructor(){
        this.button= createButton('Save');
        this.button.style('width','100px');
        this.button.style('height','50px');
        this.button.style('background-color','lightblue');
        
    }
    display(){
        this.button.position(displayWidth/2 +200 ,displayHeight/2 + 100);
        
    }
    
}