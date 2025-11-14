const PostList = ({ emoji, text }) => {
  return (
    <p className="text-lg text-textSecondary">
      <span className="text-xl mr-2">{emoji}</span>
      {text}
    </p>
  );
};

export default PostList;
