function Comments(props) {
  console.log("userComments", props.userComments);
  return (
    <div id="comment-container">
      <h3>Comments:</h3>
      {props.userComments.map((comment, index)=>{
          return <p key={index}>{comment}</p>
      })}
    </div>
  );
}
export default Comments;
