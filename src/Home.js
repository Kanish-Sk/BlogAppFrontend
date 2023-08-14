import BlogList from "./BlogList";
import API_ENDPOINTS from "./config/api";
import useFetch from "./useFetch";

const Home = () => {
  const endpoints = API_ENDPOINTS();
  const {
    data: blogs,
    ispending,
    error,
  } = useFetch(endpoints.home);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {ispending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
