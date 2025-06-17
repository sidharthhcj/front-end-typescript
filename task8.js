var BookStatus;
(function (BookStatus) {
    BookStatus[BookStatus["Available"] = 0] = "Available";
    BookStatus[BookStatus["CheckedOut"] = 1] = "CheckedOut";
    BookStatus[BookStatus["Reserved"] = 2] = "Reserved";
})(BookStatus || (BookStatus = {}));
var Check = {
    title: "ansh",
    author: "sharma",
    isbn: 1234,
    status: BookStatus.Available
};
function Borrow(book) {
    if (book.status === BookStatus.Available) {
        book.status = BookStatus.CheckedOut;
    }
    if (book.status === BookStatus.CheckedOut) {
        return "book is checkout";
    }
    else {
        "book not found";
    }
}
console.log(Borrow(Check));
