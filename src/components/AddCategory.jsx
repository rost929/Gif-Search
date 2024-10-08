import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  function handleOnChangeInput({ target }) {
    setInputValue(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue);
    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit} action="submit">
      <input
        platype="text"
        placeholder="Look for gifs"
        value={inputValue}
        onChange={handleOnChangeInput}
      />
    </form>
  );
};
