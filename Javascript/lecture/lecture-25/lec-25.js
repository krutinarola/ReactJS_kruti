// Javascript Dom New Element

// createElement
// textContent
// appendChild

// let element = document.createElement("marquee")
// element.setAttribute("bgcolor" , "green")
// element.setAttribute("direction" , "down")
// element.textContent = "Hello , Javascript!"
// document.body.appendChild(element)

// let image = document.createElement('img')
// // image.setAttribute('src' , "./image/a1.jpg")
// image.setAttribute('src' , "https://w0.peakpx.com/wallpaper/751/338/HD-wallpaper-cute-krishna-electric-blue-flash-graphy.jpg")

// image.setAttribute("alt" , "imageofanimal")
// image.setAttribute("height" , "200px")
// image.setAttribute("width" , "150px")

// document.body.appendChild(image)
// console.log(image);

// addEventListener
// attributes
// appendchild
// blur()
// focus()
// childElementCount
// ChildNides
// classList
// className
// click()
// firstChild
// hasAttribute
// hasAttributes
// removeChild


// document.getElementById('click').addEventListener("mouseover" , size)

// function size(){
//     document.getElementById('demobox').style.height = "200px"

//     document.getElementById('demobox').style.width = "200px"
    
//     document.getElementById('demobox').style.backgroundColor = "lightblue"
// }

// document.getElementById('headtext').addEventListener("click" , size)

// function size(){
//     document.getElementById('headtext').style.display = "none"
// }

// let image = document.getElementById("img").attributes
// let image1 = document.getElementById("img").attributes.length

// console.log(image);
// console.log(image1);

    
    document.getElementById("focuss").addEventListener("click",function(){
        document.getElementById('text').focus()
    })
    
    
    document.getElementById("blurr").addEventListener("click",function(){
        document.getElementById('text').blurr()
    })
    
    // let element=document.getElementById("demo").childElementCount
    
    // console.log(element);
    
    // let elements=document.getElementById("demo").childNodes
    
    // console.log(elements);
    
    // let data=document.getElementById("demo").classList
    
    // data.add('heading')
    
    // classname
    
    // let value=document.getElementById('demo')
    
    // console.log(value);
    
    // function colors(){
    //    if(value.className =="heading"){
    //     value.className="heading-1"
    //    }else{
    //      value.className="heading"
    //    }
    // }
    
    // click 
    
    // document.getElementById('inputchack').addEventListener('mouseover',click)
    
    // function click(){
    //     document.getElementById('inputchack').click()
    // }
    
    // firstchild
    
    // let ele=document.getElementById('demo').firstChild.innerHTML
    
    // console.log(ele);
    
    // hasattribute
    
    // let value=document.body.hasAttributes()
    
    // console.log(value);
    
    // removechild
    
    // function myfunction(){
    //     const list=document.getElementById('demo')
    //     list.removeChild(list.firstElementChild)
    // }
    
    // async and await
    
    // setTimeout(()=> console.log("hello"),4000)
    
    // console.log("hi");
    
    // async
    // await
    
    // Promise(new Promise((resolve,rejact)=>{
    
    // }))
    
    // .then(()=>{
    
    // })

