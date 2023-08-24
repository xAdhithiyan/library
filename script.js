//traditional pop-ups are created by changing from display:none to display:block

//main array of all the books
const myLibrary = [];

//to select the box one by one
let count = 2;

//constructor for making books object 
function Books(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
} 

//function to enter books in the main array myLibrary
function addBook (){
    let title = prompt("Enter the title");
    let author = prompt("Enter the author");
    let pages = prompt("Enter the pages");
    let read = prompt("read?");

    obj = new Books(title, author, pages, read);
    myLibrary.push(obj)
}

//function to display books from the main array myLibrary
function displayBook(){
    let box = document.querySelector(`box-${count}`)
    for(let i = 0; i <  myLibrary.length; i++){
        box.appendChild(document.createElement("div").textContent = `${myLibrary[i].title}`)

    }
}

let obj1 = new Books("a" , "b" , "c")
let obj2 = new Books ("d" , "e" , "f")
myLibrary.push(obj1)
myLibrary.push(obj2)
console.log(displayBook()) 


