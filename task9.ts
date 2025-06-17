enum Seattype{
    Regular, 
    Premium, 
    VIP
}

type Ticket={
    movieName:string,
seatNumber:number,
seatType:Seattype,
price:number
}

let check:Ticket={
    movieName:"ansh",
    seatNumber:566,
    seatType:Seattype.VIP,
    price:67
}

function calculateDiscount(ticket:Ticket){
  if(ticket.seatType===Seattype.Premium){
    ticket.price*=0.8
  }
  else if(ticket.seatType===Seattype.VIP){
    ticket.price*=0.9
  }

    return`the price of ${ticket.price.toFixed(2)} and seatype is ${ticket.seatNumber}`
 
}
console.log(calculateDiscount(check));
