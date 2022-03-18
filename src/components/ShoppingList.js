import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import { v4 as uuid } from "uuid";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleCategory = (e) => {
    setCategory(e.target.value);
  }
  const onSub = (e) => {
    e.preventDefault()
    const newItem = {
      id: uuid(),
      name,
      category,
    }
    onItemFormSubmit(newItem);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  let filteredList = itemsToDisplay.filter((item) => {
    return (item.name.toLowerCase().includes(search.toLowerCase())) ? item.name : false
  })

  return (
    <div className="ShoppingList">
      <ItemForm 
        onItemFormSubmit={onSub} 
        name={name} 
        handleName={handleName} 
        category={category}
        handleCategory={handleCategory} 
      />

      <Filter 
        onCategoryChange={handleCategoryChange} 
        onSearchChange={handleSearch}
        search={search}
      />

      <ul className="Items">
        {filteredList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
