// comment section
function Comments(props) {
  return (
    <div id="comment-container">
      <h3>Comments:</h3>
      {/* maps over userComments array and returns a <p> for each comment in the array */}
      {props.userComments.map((comment, index) => {
        return <p key={index}>{comment}</p>;
      })}
    </div>
  );
}
export default Comments;
