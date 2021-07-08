import { useState } from "react";

function Input(props) {
  // stores user input in state
  const [userInput, setUserInput] = useState("");

  // handles change anytime the user input is updated and saves in state
  function handleChange(evt) {
    setUserInput(evt.target.value);
  }

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        console.log(userInput);
        props.setUserComments([...props.userComments, userInput]);
        setUserInput("");
      }}
    >
      <input type="text" value={userInput} onChange={handleChange} />
      <input type="submit" value="Add a Comment" />
    </form>
  );
}

export default Input;
