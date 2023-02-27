import React, { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book.id, title);
  };
  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <input
        className="input"
        type="text"
        value={title}
        onChange={handleChange}
      />
      <button className="button is-primary">save</button>
    </form>
  );
}

export default BookEdit;
