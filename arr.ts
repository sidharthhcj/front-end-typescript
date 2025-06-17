type product={
    id:number,
    name:string,
    price:number
}

var Product:product[]=[{id:1,name:"ansh",price:1000000000},{id:2,name:"vikas",price:10}];

function log(Product:product[]){
Product.forEach((v)=>{
    console.log(`id${v.name}`);
    
})
}
log(Product)



// type product={
// id:number,
// name:string,
// price:number
// }

// var samples:product[]=[
// {id: 1, name: "Laptop", price: 50000},{ id: 2, name: "Mouse", price: 800},{id: 3, name: "Keyboard", price: 1500}
// ]


// function log(Products:product[]):void{

//     Products.forEach((p)=>{
//         console.log(`name${p.name}, price${p.price}` );
        
//     })
// }
// log(samples)