import PropTypes from "prop-types";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead}) => {
  
  const {
    id,
    title,
    cover,
    author_image,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="mb-20 space-y-2">
      <img src={cover} alt={`cover picture of the title ${title}`} />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img
            className="w-14 mt-2 border rounded-full"
            src={author_image}
            alt=""
          />
          <div className="ml-6 mb-2">
            <h3 className="text-3xl">{author}</h3>
            <span>{posted_date}</span>
          </div>
        </div>

        <div className="mt-2">
          <span>{reading_time} minutes read</span>
          <button onClick={()=>handleAddToBookmark(blog)}
          className="ml-2  bg-red-500 text-white p-1 border rounded-lg">
          click
          </button>
        </div>
      </div>

      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button onClick={()=>handleMarkAsRead(id, reading_time)} className="text-purple-600 font-bold underline">Mark as read</button>
    </div>
  );
};

export default Blog;
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark:PropTypes.func
};
