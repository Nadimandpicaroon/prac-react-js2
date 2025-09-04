import "./Post.css";
export default function Post({ post }) {
  const { id, title, userId, body } = post;
  return (
    <div className="post">
      <h3>Title: {title}</h3>
      <p>userId: {userId}</p>
      <p>Id: {id}</p>
      <p>{body}</p>
    </div>
  );
}
