
//  javascript array method

/*
shift
filter
map
indexof
lastindexof
slice
splice
sort
copywithin
entries()
keys()
values()
fill
some
every
reduce
reduceright
find
findindex
findlastindex
include
array.isarray
flat
flatmap
*/

// filter method in array

// let array=["a","b","c","d","e","f","g","h","i"]

// let filter=array.filter((any)=>any=="a")

// console.log(filter);

let arrayobject=[
    {id:1,item:"mobile",name:"iphone13",color:"gary",prich:"89000",discount:"10%"},
    {id:1,item:"mobile",name:"iphone13",color:"gary",prich:"89000",discount:"10%"},
    {id:1,item:"mobile",name:"iphone14",color:"pink",prich:"89000",discount:"10%"},
    {id:1,item:"mobile",name:"iphone14",color:"pink",prich:"89000",discount:"10%"},
    {id:1,item:"mobile",name:"iphone15",color:"gary",prich:"89000",discount:"10%"},
    {id:1,item:"mobile",name:"iphone15",color:"gary",prich:"89000",discount:"10%"},
    {id:1,item:"laptop",name:"dell",color:"gary",prich:"89000",discount:"10%"},
    {id:1,item:"laptop",name:"dell",color:"gary",prich:"89000",discount:"10%"},
    {id:1,item:"laptop",name:"iphone",color:"black",prich:"89000",discount:"10%"},
    {id:1,item:"laptop",name:"iphone",color:"black",prich:"89000",discount:"10%"},
    {id:1,item:"mobile",name:"iphone13",color:"gary",prich:"89000",discount:"10%"},
    {id:1,item:"mobile",name:"iphone13",color:"gary",prich:"89000",discount:"10%"},
    {id:1,item:"mobile",name:"iphone13",color:"gary",prich:"89000",discount:"10%"},
]

let Filter1 = arrayobject.filter((data) => data.item === "mobile")

console.log(Filter1);

let Filter2 = arrayobject.filter((data) => data.color === "pink") 

console.log((Filter2));

// Map method in array

{
    let num = [10 , 56 , 45 , 42 , 89]

    let Map = num.map((data) => data = 100)

    console.log(Map);
}

// indexof And lastIndexof method in Array

{
    let array = ["javascript" , "jquaery" , "html" , "css" , "bootstrap","sass","tailwindcss","css","nodejs"]

    let Index = array.indexOf("css",4)

    let IndexLast = array.lastIndexOf("css" ,6)

    console.log(Index);

    console.log(IndexLast);
}

// slice and splice method in array

{
    // let array = ["javascript" , "jquaery" , "html" , "css" , "bootstrap","sass","tailwindcss","css","nodejs"]
    
    // let Slice =array.slice(2)
    
    // let Sclice1 = array.slice(2,5)

    // console.log(Slice);

    // console.log(Sclice1);

    // let Sclice1 = array.splice(2,2,"expressJs" , "SQL" ,...Slice.n)

    // console.log(Sclice1);

    // console.log(array);

}

// Sorting in array

{
    // let array = ["javascript" , "jquaery" , "html" , "css" , "bootstrap","sass","tailwindcss","css","nodejs"]

    // let num = [12,52,25,46,78,12,36,5,9]

    // let sort = array.sort()

    // let Num = num.sort((a,b) => a-b)

    // console.log(sort);

    // console.log(Num);
}

// entries() , key() ,values() method in array

{
    let array = ["javascript" , "jquaery" , "html" , "css" , "bootstrap","sass","tailwindcss","css","nodejs"]
    
    let Entries = array.entries()

    console.log(Entries.next().value);
    console.log(Entries.next().value);
    console.log(Entries.next().value);

    let Keys = array .keys()

    console.log(Keys.next().value);
    console.log(Keys.next().value);
    console.log(Keys.next().value);

    let Values = array.values()

    console.log(Values.next().value);
    console.log(Values.next().value);
    console.log(Values.next().value);
    console.log(Values.next().value);
    console.log(Values.next().value);
    console.log(Values.next().value);

}

// copywithin method in array

{
    let array = ["javascript" , "jquaery" , "html" , "css" , "bootstrap","sass","tailwindcss","css","nodejs"]

    console.log(array);

    let copy1 = array.copyWithin(3)

    console.log(copy1);

    let copy2 = array.copyWithin(2,5)

    console.log(copy2);

    let copy3 = array.copyWithin(2,4,6)

    console.log(copy3);
}

