
interface user{
id:number,
name:string,
isActive:boolean
}

var joker:user={
    id:1,
    name:"sid",
    isActive:true
}
function printuser(User:user){
      return`${User.id}`
}

console.log(printuser(joker));
