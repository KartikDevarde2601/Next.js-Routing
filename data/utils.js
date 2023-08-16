const books = [
    {
      id: 1,
      name: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A novel by F. Scott Fitzgerald depicting the Jazz Age in America.",
    },
    {
      id: 2,
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A classic novel by Harper Lee dealing with racial injustice and moral growth.",
    },
    {
      id: 3,
      name: "1984",
      author: "George Orwell",
      description: "George Orwell's dystopian novel portraying a totalitarian future society.",
    },
    {
      id: 4,
      name: "Pride and Prejudice",
      author: "Jane Austen",
      description: "Jane Austen's romantic novel exploring social class and love.",
    },
    {
      id: 5,
      name: "The Catcher in the Rye",
      author: "J.D. Salinger",
      description: "J.D. Salinger's coming-of-age novel centered around a teenage boy's experiences in New York City.",
    },
    {
      id: 6,
      name: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      description: "J.K. Rowling's fantasy novel introducing the magical world of Harry Potter.",
    },
    {
      id: 7,
      name: "The Hobbit",
      author: "J.R.R. Tolkien",
      description: "J.R.R. Tolkien's fantasy novel following Bilbo Baggins' epic adventure.",
    },
    {
      id: 8,
      name: "The Hunger Games",
      author: "Suzanne Collins",
      description: "Suzanne Collins' dystopian novel featuring a young girl's struggle for survival in a televised death match.",
    },
    {
      id: 9,
      name: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      description: "J.R.R. Tolkien's epic fantasy trilogy set in the fictional land of Middle-earth.",
    },
    {
      id: 10,
      name: "Frankenstein",
      author: "Mary Shelley",
      description: "Mary Shelley's Gothic novel about a scientist's creation of a sentient creature.",
    },
  ];
  
export default books;
  


export const fetchBookFormId = (id)=>{
    const fetchbook = books.find((book)=>book.id === id)
    return fetchbook;
}