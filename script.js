let myLibrary=[];

function Book(title,author,pages,isRead){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.toggleRead = function(){
    this.isRead = !this.isRead;
}
function toggleRead(index){
    myLibrary[index].toggleRead();
    renderBook();
}

function renderBook(){
    let  librarySpace = document.querySelector(".library")
    librarySpace.innerHTML = "";
    for(let i = 0;i < myLibrary.length;i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.setAttribute("id","library_card");
        bookEl.innerHTML =
        `
        <div class="lib_card_header">
            <h3 class="lib_title">${book.title}</h3>
            <h4 class="lib_author">by ${book.author}</h4>
        </div>
        <div class="lib_card_body">
            <p class="lib_pages">${book.pages} pages</p>
            <p class="read_status">${book.isRead ? "Read": "Not read yet"}</p>
            <button class="remove_button" onclick="removeBook(${i})">Remove</button>
            <button class="toggle_read_btn" onclick="toggleRead(${i})">Toggle Read</button>
        </div>`
        
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

function removeBook(index){
    myLibrary.splice(index,1);
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
    let newBookCard = document.querySelector(".book_card").style.display = "none";
})