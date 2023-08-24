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
    for(let i = 0; i <  myLibrary.length; i++){

        //to add a new box on cards grid
        if(count > 3){
            let cards = document.querySelector(".cards");
            let nextBox = document.createElement("div")
            nextBox.classList.add(`box-${count}`)
            cards.appendChild(nextBox)
        }

        let box = document.querySelector(`.box-${count}`);
        box.classList.add("box");
        //  myLibrary[i] is an object
        for(let j in myLibrary[i]){
            if(myLibrary[i][j] != undefined){
                let div = document.createElement("div");
                div.textContent = `${myLibrary[i][j]}`;
                box.appendChild(div);
            }
        }
        // //adding the buttons
        for(let i = 0; i < 3; i++){
            let btn = document.createElement("button");
            switch(i){
                case 0:
                    btn.textContent = "Read";
                    box.append(btn);
                    break;
                case 1:
                    btn.textContent = "Edit";
                    box.append(btn);
                    break;
                case 2:
                    btn.textContent = "Remove";
                    let div = document.createElement("div");
                    div.appendChild(btn);
                    div.classList.add("removeBtn");
                    box.append(div);
                    break;
            }
        }
        count++
    }
}

let obj1 = new Books("a" , "b" , "c")
let obj2 = new Books ("d" , "e" , "f")
myLibrary.push(obj1)
displayBook() 


