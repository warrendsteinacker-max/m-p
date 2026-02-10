class Name{
    constructor(name){
        this.name = name;
    }

    set name(name){
        if(typeof(name) === 'string'){
         this._name = name;}
        }

    getName(){
        return this._name;
    }

}


const me = new Name('John');

console.log(me.getName());

