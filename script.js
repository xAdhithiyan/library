//traditional pop-ups are created by changing from display:none to display:block

//main array of all the books
const myLibrary = [];

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
    for(obj of myLibrary){
        console.log(obj.title)
    }
}


