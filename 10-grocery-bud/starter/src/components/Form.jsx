import React from "react";
import { useState } from "react";

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");
  const handleSumbit = (e) => {
    e.preventDefault();
    if (!newItemName) return;
    addItem(newItemName);
    setNewItemName("");
  };

  return (
    <>
      <form onSubmit={handleSumbit}>
        <h4>grocery bud</h4>
        <div className="form-control">
          <input
            type="text"
            className="form-input"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
          />
          <button type="submit" className="btn">
            Add item
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
