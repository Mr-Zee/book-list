import React, { useState } from "react";

function BookCreate(onSumbit) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor=""> title</label>
        <input type="text" value={title} onChange={handleChange} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default BookCreate;
