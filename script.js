let myLibrary=[];

function Book(title,author,pages,isRead){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
}

function renderBook(){
    let  librarySpace = document.querySelector(".library")
    librarySpace.innerHTML = "";
    for(let i = 0;i < myLibrary.length;i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML = `<p>${book.title}</p>`
        librarySpace.appendChild(bookEl);
    }
}

function addBook(){
    let title = document.querySelector(".title").value;
    let author = document.querySelector(".author").value;
    let pages = document.querySelector(".pages").value;
    let isRead = document.querySelector(".read_box").value;

    let newBook = new Book(title,author,pages,isRead);
    myLibrary.push(newBook);
    renderBook();
}
let newBookBtn = document.querySelector(".add_button");
newBookBtn.addEventListener("click",function() {
    let newBookCard = document.querySelector(".book_card");
    newBookCard.style.display = "block";
})

let submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click",function(event){
    event.preventDefault();
    addBook();
})