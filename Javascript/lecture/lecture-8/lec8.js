// javascript map object method

/*
new map()
set method
get method
delete method
clear method
key method
has method
foreach method
values method
size method
entries method
 */

// let object={id:1,firstname:"joe",lastname:"heel",age:21};

// let dataobject=object.age

// console.log(dataobject);

// /*map object */

// let mapobject=new Map();

// set method

// mapobject.set("id",1)
// mapobject.set("firstname","jeo")
// mapobject.set("lastname","hilson")
// mapobject.set("age",45)

// console.log(mapobject);

// get method

// let dataobject1=mapobject.get("firstname")
// let dataobject2=mapobject.get("lastname")

// console.log(dataobject1);
// console.log(dataobject2);

// delete method

// let deletemap=mapobject.delete("firstname")

// console.log(mapobject);
// console.log(deletemap);

// size method

// let sizemap=mapobject.size;

// console.log(sizemap);

// values method

// let valuemap=mapobject.values();

// console.log(valuemap);
// console.log(valuemap.next().value);
// console.log(valuemap.next().value);
// console.log(valuemap.next().value);

// key method

// let mapobject=new Map([["id",1],["firstname","joe"],["lastname","hilson"],["age",45]])

// let keydata=mapobject.keys();

// console.log(keydata);
// console.log(keydata.next().value);
// console.log(keydata.next().value);
// console.log(keydata.next().value);
// console.log(keydata.next().value);

// has method

// let Mapobject=new Map([["id",1],["firstname","jeo"],["lastname","hilson"],["age",45]])

// let hasmap=Mapobject.has("firstname")

// console.log(hasmap);

//clear() method

// let Mapobject=new Map([["id",1],["firstname","jeo"],["lastname","hilson"],["age",45]])

// let clearmap=Mapobject.clear();

// console.log(Mapobject);

//foreach method

// let Mapobject=new Map([["id",1],["firstname","jeo"],["lastname","hilson"],["age",45]]).Foreach(dataprint)

// set method

// Mapobject.set("id",1)
// Mapobject.set("firstname","hilson")
// Mapobject.set("lastname","jeo")
// Mapobject.set("age",45)

// console.log(Mapobject);

// function dataprint(value1,key){
//     console.log(`${key}=${value1}`);
// }

//entries() method

// let Mapobject=new Map([["id",1],["firstname","jeo"],["lastname","hilson"],["age",45]])

// let Entries=Mapobject.entries()
// console.log(Entries);

// console.log(Entries.next().value);
// console.log(Entries.next().value);
// console.log(Entries.next().value);
// console.log(Entries.next().value);

//javascript set object

//add method

let Setobject = new Set();

let addsets1=Setobject.add("apple")
let addsets2=Setobject.add("graps")
let addsets3=Setobject.add("mango")
let addsets4=Setobject.add("orange")

//entries method

// let Entries= Setobject.entries()
// console.log(Entries);

// console.log(Entries.next().value);
// console.log(Entries.next().value);
// console.log(Entries.next().value);
// console.log(Entries.next().value);

// console.log(addsets1);

// //--has method--

// let getsets=Setobject.has("a")

// console.log(getsets);

// key method

// let keysets=Setobject.keys();

// console.log(keysets);

// console.log(keysets.next().value);
// console.log(keysets.next().value);
// console.log(keysets.next().value);
// console.log(keysets.next().value);

// //--value method--

// let valuesets=Setobject.values();

// console.log(valuesets);

// console.log(valuesets.next().value);
// console.log(valuesets.next().value);
// console.log(valuesets.next().value);
// console.log(valuesets.next().value);

// //--size method--

// let sizesets=Setobject.size

// console.log(sizesets);

// //--delete method--

// let deletesets=Setobject.delete("apple")

// console.log(Setobject);

// //--clear method--

// let clearsets=Setobject.clear()

// console.log(Setobject);

// //--foreach method--

let ForEachSets=Setobject.forEach(printSets)

function printSets(value,key){
    console.log(`${key} = ${value}`);
}