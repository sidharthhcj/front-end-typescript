function printvalue(value:string|number){
    if(typeof value==="string"){
        console.log(value.toUpperCase());
        
    }else{
console.log(value*2);

    }
}
printvalue("number")