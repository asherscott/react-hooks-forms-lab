import React from "react";

function ItemForm({ onItemFormSubmit, name, handleName, category, handleCategory }) {
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleName} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
