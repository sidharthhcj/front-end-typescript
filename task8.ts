enum BookStatus{
     Available, 
     CheckedOut, 
     Reserved
}

type Book={
   title:string,
   author:string,
   isbn:number,
   status:BookStatus
}

let Check:Book={
    title:"ansh",
     author:"sharma",
     isbn:1234,
     status:BookStatus.Available
}

function Borrow(book:Book){

    if(book.status===BookStatus.Available){
        book.status=BookStatus.CheckedOut
    }
    if(book.status===BookStatus.CheckedOut){
        return`book is checkout`
    }
    else{
        `book not found`
    }

}
console.log(Borrow(Check));
