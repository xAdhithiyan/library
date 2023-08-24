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
    const bookDetails = document.querySelectorAll("input");
    const obj = new Books(bookDetails[0].value , bookDetails[1].value , bookDetails[2].value);
    myLibrary.push(obj)
    displayBook()
}
//function to display books from the main array myLibrary
function displayBook(){
    for(let i = 0; i <  myLibrary.length; i++){

        //to add a new box on cards grid
        if(count > 3){
            let cards = document.querySelector(".cards");
            let nextBox = document.createElement("div");
            nextBox.classList.add(`box-${count}`);
            cards.appendChild(nextBox);
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
        for(let i = 0; i < 2; i++){
            let btn = document.createElement("button");
            switch(i){
                case 0:
                    btn.textContent = "Read";
                    let div = document.createElement("div");
                    div.appendChild(btn);
                    div.classList.add("readBtnOutside");
                    box.append(div);
                    break;
                case 1:
                    btn.textContent = "Remove";
                    let div1 = document.createElement("div");
                    div1.appendChild(btn);
                    div1.classList.add("removeBtn");
                    box.append(div1);
                    break;
            }
        }
        count++;
    }
}

let obj1 = new Books("a" , "b" , "c");
myLibrary.push(obj1);
displayBook();
 

//add eventlinsteners for dialog element(pop up screen)
const addBookBtn = document.querySelector(".addBookBtn");
const closeBookBtn = document.querySelector(".closeBookBtn");
const modal = document.querySelector(".modal");
addBookBtn.addEventListener("click" , () => modal.showModal());
closeBookBtn.addEventListener("click", () => modal.close());


//to prevent the form from submiting and to take values from the text input box to display it
const submitBookBtn = document.querySelector(".submitBookBtn");
submitBookBtn.addEventListener("click" , (e)=>{
    addBook();
    e.preventDefault();
})