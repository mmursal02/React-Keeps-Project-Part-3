import React, { useState } from "react";

function CreateArea(props) {
  const [enteredNote, setEnteredNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setEnteredNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  

  return (
    <div>
      <form>
        <input value={enteredNote.title} onChange={handleChange} name="title" placeholder="Title" />
        <textarea
          value={enteredNote.content}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            props.whenClicked(enteredNote);
            setEnteredNote({
              title: "",
              content: ""
            });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
