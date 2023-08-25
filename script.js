//traditional pop-ups are created by changing from display:none to display:block

//main array of all the books
const myLibrary = [];

//to select the box one by one
let count = 1;

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
    const obj = new Books(bookDetails[0].value , "- " + bookDetails[1].value , bookDetails[2].value + " Pages" , document.querySelector(".readBtn").textContent);
    myLibrary.push(obj);
    displayBook();
    updateMainMenu();
    bookDetails[0].value = bookDetails[1].value = bookDetails[2].value = "";
}


//function to display books from the main array myLibrary
function displayBook(){
    //to add a new box on cards grid
    if(count > 0){
        let cards = document.querySelector(".cards");
        let nextBox = document.createElement("div");
        nextBox.classList.add(`box-${count}`);
        cards.appendChild(nextBox);
    }
    let box = document.querySelector(`.box-${count}`);
    box.classList.add("box");
    //  myLibrary[i] is an object
    for(let j in myLibrary[myLibrary.length - 1]){
        if(myLibrary[myLibrary.length - 1][j] != undefined && j != "read"){
            let div = document.createElement("div");
            div.textContent = `${myLibrary[myLibrary.length - 1][j]}`;
            box.appendChild(div);
        }
    }
    // //adding the buttons
    for(let i = 0; i < 2; i++){
        let btn = document.createElement("button");
        switch(i){
            case 0:
                btn.textContent = myLibrary[myLibrary.length - 1]["read"];
                btn.textContent == "Read" ? btn.classList.add("validColor") : btn.classList.add("invalidColor")
                let div = document.createElement("div");
                div.appendChild(btn);
                div.classList.add("readBtnOutside");
                btn.addEventListener("click", (e) => {
                    readButton(e, btn, div)
                })
                box.append(div);
                break;
            case 1:
                btn.textContent = "Remove";
                btn.classList.add(`${count}`)
                btn.addEventListener("click", (e) => {
                    removeButton(e, btn, count)
                })
                let div1 = document.createElement("div");
                div1.appendChild(btn);
                div1.classList.add("removeBtn");
                box.append(div1);
                break;
        }
    }
    count++;
}

//removes the card when button is clicked
function removeButton(e, btn){
    let boxNumber = "box-" + btn.classList.value;
    let boxName = document.getElementsByClassName(`${boxNumber}`);
    myLibrary.splice(btn.classList.value - 1, 1 );
    while (boxName[0].firstChild) {
        boxName[0].removeChild(boxName[0].lastChild);
    }
    count --;
    boxName[0].remove();
    let val =  btn.classList.value;
    // decerement the next boxes values by 1 after deleting a box
    for(let i = val; i < count; i++){
        let boxNumberc = "box-" + (+i + 1);
        let newBoxNumberc =  "box-" + i;
        let boxNamec = document.getElementsByClassName(`${boxNumberc}`);
        boxNamec[0].classList.add(`${newBoxNumberc}`)
        boxNamec[0].classList.remove(`${boxNumberc}`)
        
        let newI = +i + 1;
        let newBtn = document.getElementsByClassName(`${newI}`);
        newBtn[0].classList.add(`${i}`);
        newBtn[0].classList.remove(`${newI}`);

    }
    updateMainMenu();  
}
function readButton(e,btn,div){
    //updating main array 
    let arrayPosition = div.nextElementSibling.firstChild.classList.value - 1;

    //updating color
    if(btn.textContent == "Read"){
        btn.textContent = "Not Read";
        btn.classList.add("invalidColor");
        btn.classList.remove("validColor");
        myLibrary[arrayPosition]["read"] = "Not Read";

    }else{
        btn.textContent = "Read";
        btn.classList.add("validColor");
        btn.classList.remove("invalidColor");
        myLibrary[arrayPosition]["read"] = "Read";
    }
    updateMainMenu();
}

function updateMainMenu(){
    let readNumber = document.querySelector(".readNumber");
    let notReadNumber = document.querySelector(".notReadNumber");
    let totalBooks = document.querySelector(".totalBooks");
    readNumber.textContent = notReadNumber.textContent = 0;

    totalBooks.textContent = myLibrary.length;
    for(let i = 0; i < myLibrary.length; i++){
        if (myLibrary[i].read == "Read"){
            readNumber.textContent = +readNumber.textContent + 1;
        }else{
            notReadNumber.textContent = +notReadNumber.textContent + 1;
        }
    }
}


function popUp(){
    //add eventlinsteners for dialog element(pop up screen)
    const addBookBtn = document.querySelector(".addBookBtn");
    const closeBookBtn = document.querySelector(".closeBookBtn");
    const modal = document.querySelector(".modal");
    addBookBtn.addEventListener("click" , () => modal.showModal());
    closeBookBtn.addEventListener("click", () => modal.close());


    //to prevent the form from submiting and to take values from the text input box to display it
    const submitBookBtn = document.querySelector(".submitBookBtn");
    submitBookBtn.addEventListener("click" , (e)=>{

        //returns true if form validation is passed
        if(document.querySelector("form").reportValidity()){
            e.preventDefault();
            addBook();
            modal.close();
        };
    })

    //to set read status and color of the buttons
    let readBtn = document.querySelector(".readBtn");
    readBtn.addEventListener("click", () =>{
        if(readBtn.textContent == "Read"){
            readBtn.textContent = "Not Read"
            readBtn.classList.add("invalidColor")
            readBtn.classList.remove("validColor")

        }else{
            readBtn.textContent = "Read"
            readBtn.classList.add("validColor")
            readBtn.classList.remove("invalidColor")
        }
    })
}
popUp();

//first card defualt values
myLibrary.push(new Books("American Prometheus", "- Kai Bird", "784 Pages", "Read"))
displayBook();

