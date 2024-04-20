// javascript object and It's Method

{
    // const obj = {id:1 , firstName:"john" , lastName:"doue" , gender:"male" , age:25}
    // const Obj = new Object()

    // console.log(obj);
    // console.log(Obj);

    // let Data = obj.firstName

    // let Data1 = obj["id"]

    // console.log(Data);
    // console.log(Data1);

    // obj.address = "united states"

    // console.log(obj);

    // obj.id = 2

    // console.log(obj);
}   

// object Method :- Object.assign() Method

{
    // const obj = {id:1 , firstName:"john" , lastName:"doue" , gender:"male" , age:25}
    
    // const num = {key1:56 , key2:23 , key3:36 , key4:100}

    // let Assing = Object.assign(obj , num)

    // console.log(Assing);

    // console.log(obj);

    // let Assing1 = Object.assign({} , num , obj)

    // console.log(Assing1);
}

// object Method :- object.freeze() Method
{
        // const obj={id:1,firstname:"John",lastname:"Doe",gender:"Male",age:30};
    
        // obj.id=10;
    
        // console.log(obj);
    
        // obj.id=30
    
        // console.log(obj);
    
        // obj.key1=100
    
        // console.log(Obj);  
    }
    
    /* object method: object.create()method */
    {
    const obj={
        id :1 ,
        firstName : "John" ,
        lastName : "Doe" ,
        gender : "male" ,
        age:25,
        newobj:function(){
            console.log(`my frist name is  ${this.firstName} and i am ${this.occupation}`);
        }
    }
    
    let newobject=Object.create(obj);
    
    newobject.occupation="devloprer"
    
    console.log(newobject.occupation);
    
    console.log(newobject.newobj());
    
    console.log(obj);
    }