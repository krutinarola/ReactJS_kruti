// javascript nested loop

// for(Initi; condition ; afterthought ){
    // for(initi; condition; afterthought){

    // }
// }


// for(let i = 0 ; i < 10 ; i++){
//     console.log( "${i} hello main loop");
//     for(let j = 0; j < 5; j++){
//         console.log("${j} child loop");
//     }
// }

// javascript break statement

// for(let i = 0; i < 10;i ++){
//     console.log(`${i} hello loop`);
//     if(i==2){
//         break;
//     }
//     for(let j = 0;j < 5; j++){
//         console.log(`${j} clild loop`);
//     }
// }

//  loop:for(let i = 0; i < 10;i ++){
//     console.log(`${i} hello loop`);
//     for(let j = 0;j < 5; j++){
//         if(i==2){
//             break loop;
//         }
//         console.log(`${j} clild loop`);
//     }
// }
// javascript continue statements

// loops:for(let i = 0 ; i < 10 ; i++){
//     console.log(`${i}  main loop`);
//     for(let j = 1; j < 10 ; j++){
//         if (j == 3) {
//           continue loops;            
//         }
//         console.log(`${j} child loop`);
//     }
// }


// javascript for....in loop

let object = {FirstName:"jeo" ,LastName:"Biden" ,
                Age:79 , Gender:"Male" };

// let data1 = object.FirstName
// let data2 = object.LastName
// let data3 = object.Age
// let data4 = object.Gender

// console.log(data1);
// console.log(data2);
// console.log(data3);
// console.log(data4);

// console.log(object);

// for(let key in object){
//     console.log(`${key} = ${object[key]}`);
// }


//-- javascript for..of loop

// let newarray=["x","y",79,"z"];

// let data5=newarray[0]
// let data6=newarray[1]
// let data7=newarray[2]
// let data8=newarray[3]

// console.log(data5);
// console.log(data6);
// console.log(data7);
// console.log(data8);

// for(let value of newarray){
//     console.log(`${value}`);
// }

// let string="javascript";

// for(let char of string){
//     console.log(`${char}`);
// }