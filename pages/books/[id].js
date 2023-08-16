import { useRouter } from "next/router";
import { fetchBookFormId } from "../../data/utils";

function BookDetails(){
const {query} = useRouter();
const bookId = parseInt(query.id);
const book = fetchBookFormId(bookId);
console.log(book)


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
    description:{
       fontSize: "18px",
      color: "black",
      marginBottom: "10px",
    }
  };
  

if(!book){
    return <p>Loding....</p>
}
    return (
        <div  style={styles.bookContainer}>
          <h1 style={styles.bookTitle}>{book.name}</h1>
          <h2 style={styles.bookAuthor}>{book.author}</h2>
          <p style={styles.description}>{book.description}</p>
        </div>
      )}
 
export default BookDetails;