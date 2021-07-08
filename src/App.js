import "./App.css";
import { useState } from "react";
import Picture from "./components/Picture.js";
import Input from "./components/Input.js";
import Comments from "./components/Comments.js";
import OneComment from "./components/OneComment.js";

function App() {
  // saves comments in state
  const [userComments, setUserComments] = useState([
    "OMG so cute!",
    "Your dog is adorable",
    "dogs > cats",
  ]);

  return (
    <div className="App">
      {/* post content */}
      <Picture></Picture>
      {/* handles collection of user input */}
      <Input
        userComments={userComments}
        setUserComments={setUserComments}
      ></Input>

      {/* Use either Comments or OneComment to map each value in userComments to a single <p> */}
      {/* <Comments userComments={userComments}></Comments> */}

      {userComments.map((comment, index) => {
        return <OneComment key={index} comment={comment}></OneComment>;
      })}
    </div>
  );
}

export default App;
