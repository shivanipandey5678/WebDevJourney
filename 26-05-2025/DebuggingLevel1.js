const library = {
    
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
    
    addBook(book) {
    
    if (!book.title || !book.author || !book.year) {

    console.log("Book information is incomplete.");

    return;
    
    }

    if(typeof book.title!=="string"|| typeof book.author!=="string"||typeof book.year!=="number"){
        console.log("incorrect book type you are giving.");
    }

    if(this.findBookByTitle(title)){
        console.log(` Book titled "${title}" already exists.`);
        return;
    }
    this.books.push(book);
    console.log("Book Added Successfully")
    return;
    
    },
    
    findBookByTitle(title) {
    
    return this.books.find(book => book.title === title);
    
    },
    
    removeBook(title) {
    
    const index = this.books.findIndex(book => book.title === title);
    
    if (index !== -1) {
    
    const removedBook = this.books.splice(index, 1)[0];
    return removedBook;


    
    } else {
    
    console.log("Book not found.");
    
    } } };
    
    library.addBook({title: "1984", author: "George Orwell", year: 1949 });
    
    console.log(library.books);
    
    