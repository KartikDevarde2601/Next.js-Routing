import React from "react";
import Link from "next/link";

import books from "../../data/utils";

const styles = {
  bookContainer: {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
  },
  bookTitle: {
    fontSize: "24px",
    marginBottom: "5px",
  },
  bookAuthor: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "10px",
  },
  link: {
    textDecoration: "none",
    color: "blue",
  },
};

function Books() {
  return (
    <div>
      {books.map((book, id) => (
        <div key={id} style={styles.bookContainer}>
          <h1 style={styles.bookTitle}>{book.name}</h1>
          <h2 style={styles.bookAuthor}>{book.author}</h2>
          <Link href={`/books/${book.id}`}>More Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Books;
