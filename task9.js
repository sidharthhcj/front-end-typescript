var Seattype;
(function (Seattype) {
    Seattype[Seattype["Regular"] = 0] = "Regular";
    Seattype[Seattype["Premium"] = 1] = "Premium";
    Seattype[Seattype["VIP"] = 2] = "VIP";
})(Seattype || (Seattype = {}));
var check = {
    movieName: "ansh",
    seatNumber: 566,
    seatType: Seattype.VIP,
    price: 67
};
function calculateDiscount(ticket) {
    if (ticket.seatType === Seattype.Premium) {
        ticket.price *= 0.8;
    }
    else if (ticket.seatType === Seattype.VIP) {
        ticket.price *= 0.9;
    }
    return "the price of ".concat(ticket.price.toFixed(2), " and seatype is ").concat(ticket.seatNumber);
}
console.log(calculateDiscount(check));
