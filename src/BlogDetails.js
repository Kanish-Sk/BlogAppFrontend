import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import API_ENDPOINTS from "./config/api";

const BlogDetails = () => {
  const { id } = useParams();
  const endpoints = API_ENDPOINTS();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(endpoints.getBlog(id));
  const history = useHistory();

  const handleClick = () => {
    fetch(endpoints.getBlog(id), {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
