import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";

function App() {
  const [book, setBook] = useState([]);

  const createBook = (title) => {
    console.log("name:", title);
  };
  return (
    <div className="App">
      <BookCreate onSubmit={createBook} />
    </div>
  );
}

export default App;
