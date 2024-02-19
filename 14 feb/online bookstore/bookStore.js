function Author(name,birthYear,nationality){
  this.name =name;
  this.birthYear=birthYear;
  this.nationality=nationality
}

function Book(title, author,genre,price){
  this.title=title;
  this.author=author;
  this.genre=genre;
  this.price=price
}

Book.prototype.getBookInfo = function (){
  return `${this.title} by ${this.author.name}. Genre: ${this.genre}. Price : ${this.price}`;
}


const author1 = new Author("J.K Rowling" , 1965 , "British");
const author2 = new Author('George R.R Martin' , 1948 , 'American')

const book1 = new Book("Harry potter and the Philospher's stone" , author1 ,'wizard world', 15.99 );
const book2 =  new Book("Game of thrones", author2 ,'sci-fi', 12.99)

console.log(book1.getBookInfo());
console.log(book2.getBookInfo());
