import "./App.css";
import { useState } from "react";
import Picture from "./components/Picture.js";
import Input from "./components/Input.js";
import Comments from "./components/Comments.js";
import OneComment from "./components/OneComment.js"

function App() {
  const [userComments, setUserComments] = useState([
    "OMG so cute!",
    "Your dog is adorable",
    "dogs > cats"
  ]);

  return (
    <div className="App">
      <Picture></Picture>
      <Input userComments = {userComments} setUserComments={setUserComments}></Input>
      {/* <Comments userComments={userComments}></Comments> */}
      {userComments.map((comment,index)=>{
        return <OneComment key={index} comment={comment}></OneComment>
      })}
    </div>
  );
}

export default App;
