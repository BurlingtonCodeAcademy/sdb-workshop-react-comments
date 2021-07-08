import { useState } from "react";

// user input that accepts a single string of text as a new comment
function Input(props) {
  // stores user input in state
  const [userInput, setUserInput] = useState("");

  // handles change anytime the user input is updated and saves in state
  function handleChange(evt) {
    setUserInput(evt.target.value);
  }

  return (
    <form
      // handles on form submit
      onSubmit={(evt) => {
        // prevents default refresh of page
        evt.preventDefault();
        // updates userComments (in App.js) by adding userInput from state
        props.setUserComments([...props.userComments, userInput]);
        // resets userInput to clear text input
        setUserInput("");
      }}
    >
      <input type="text" value={userInput} onChange={handleChange} />
      <input type="submit" value="Add a Comment" />
    </form>
  );
}

export default Input;
