import { useState } from "react";

const articlesData = [
  {
    id: 1,
    title: "Article 1 Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "John Doe",
    profession: "Writer",
    authorImage: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    title: "Article 2 Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "Jane Smith",
    profession: "Journalist",
    authorImage: "https://via.placeholder.com/50",
  },
  // Add more articles here
];

const articleStyle = {
  border: "1px solid #ddd",
  padding: "20px",
  margin: "10px",
  backgroundColor: "#f9f9f9",
};

const authorImageStyle = {
  maxWidth: "50px",
  borderRadius: "50%",
};

const buttonStyle = {
  backgroundColor: "#3498db",
  color: "white",
  border: "none",
  padding: "5px 10px",
  cursor: "pointer",
  marginRight: "10px",
};

const authorRowStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const commentStyle = {
  border: "1px solid #eee",
  padding: "10px",
  margin: "10px",
  backgroundColor: "white",
  borderRadius: "5px",
};

const Article = ({ title, content, author, profession, authorImage }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentSubmit = () => {
    if (newComment) {
      setComments([
        ...comments,
        { text: newComment, likes: 0, replyInputVisible: false, replies: [] },
      ]);
      setNewComment("");
    }
  };

  const handleCommentLike = (commentIndex) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].likes += 1;
    setComments(updatedComments);
  };

  const toggleReplyInput = (commentIndex) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].replyInputVisible =
      !updatedComments[commentIndex].replyInputVisible;
    updatedComments[commentIndex].replyText = "";
    setComments(updatedComments);
  };

  const handleReplySubmit = (commentIndex, replyText) => {
    if (replyText) {
      const updatedComments = [...comments];
      updatedComments[commentIndex].replies.push({
        text: replyText,
        likes: 0,
        replyInputVisible: false,
        replyText: "",
        replies: [],
      });
      setComments(updatedComments);
    }
  };

  const handleReplyLike = (commentIndex, replyIndex) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].replies[replyIndex].likes += 1;
    setComments(updatedComments);
  };

  const toggleReplyInputForReply = (commentIndex, replyIndex) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].replies[replyIndex].replyInputVisible =
      !updatedComments[commentIndex].replies[replyIndex].replyInputVisible;
    updatedComments[commentIndex].replies[replyIndex].replyText = "";
    setComments(updatedComments);
  };

  const toggleReplyInputForReplyToReply = (commentIndex, replyIndex, replyToReplyIndex) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].replies[replyIndex].replies[replyToReplyIndex].replyInputVisible =
      !updatedComments[commentIndex].replies[replyIndex].replies[replyToReplyIndex].replyInputVisible;
    updatedComments[commentIndex].replies[replyIndex].replies[replyToReplyIndex].replyText = "";
    setComments(updatedComments);
  };

  const handleReplyToReplyLike = (commentIndex, replyIndex, replyToReplyIndex) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].replies[replyIndex].replies[
      replyToReplyIndex
    ].likes += 1;
    setComments(updatedComments);
  };

  return (
    <div style={articleStyle}>
      <h1>{title}</h1>
      <p>{content}</p>
      <div style={authorRowStyle}>
        <img
          src={authorImage}
          alt={`${author}'s Image`}
          style={authorImageStyle}
        />
        <p>{author}</p>
        <button style={buttonStyle} onClick={handleLike}>
          Like ({likes})
        </button>
      </div>
      <div>
        <h3>Comments:</h3>
        {comments.map((comment, commentIndex) => (
          <div key={commentIndex} style={commentStyle}>
            <p>{comment.text}</p>
            <button
              style={buttonStyle}
              onClick={() => handleCommentLike(commentIndex)}
            >
              Like ({comment.likes})
            </button>
            <button
              style={buttonStyle}
              onClick={() => toggleReplyInput(commentIndex)}
            >
              Reply
            </button>
            {comment.replyInputVisible && (
              <div>
                <input
                  type="text"
                  placeholder="Your reply..."
                  value={comment.replyText || ""}
                  onChange={(e) => {
                    const updatedComments = [...comments];
                    updatedComments[commentIndex].replyText = e.target.value;
                    setComments(updatedComments);
                  }}
                />
                <button
                  style={buttonStyle}
                  onClick={() =>
                    handleReplySubmit(commentIndex, comment.replyText)
                  }
                >
                  Post Reply
                </button>
              </div>
            )}
            {comment.replies.map((reply, replyIndex) => (
              <div key={replyIndex} style={commentStyle}>
                <p>{reply.text}</p>
                <button
                  style={buttonStyle}
                  onClick={() => handleReplyLike(commentIndex, replyIndex)}
                >
                  Like ({reply.likes})
                </button>
                <button
                  style={buttonStyle}
                  onClick={() =>
                    toggleReplyInputForReply(commentIndex, replyIndex)
                  }
                >
                  Reply to Reply
                </button>
                {reply.replyInputVisible && (
                  <div>
                    <input
                      type="text"
                      placeholder="Your reply..."
                      value={reply.replyText || ""}
                      onChange={(e) => {
                        const updatedComments = [...comments];
                        updatedComments[commentIndex].replies[
                          replyIndex
                        ].replyText = e.target.value;
                        setComments(updatedComments);
                      }}
                    />
                    <button
                      style={buttonStyle}
                      onClick={() =>
                        handleReplySubmit(
                          commentIndex,
                          reply.replyText
                        )
                      }
                    >
                      Post Reply
                    </button>
                  </div>
                )}
                {reply.replies.map((replyToReply, replyToReplyIndex) => (
                  <div key={replyToReplyIndex} style={commentStyle}>
                    <p>{replyToReply.text}</p>
                    <button
                      style={buttonStyle}
                      onClick={() =>
                        handleReplyToReplyLike(
                          commentIndex,
                          replyIndex,
                          replyToReplyIndex
                        )
                      }
                    >
                      Like ({replyToReply.likes})
                    </button>
                    <button
                      style={buttonStyle}
                      onClick={() =>
                        toggleReplyInputForReplyToReply(
                          commentIndex,
                          replyIndex,
                          replyToReplyIndex
                        )
                      }
                    >
                      Reply to Reply
                    </button>
                    {replyToReply.replyInputVisible && (
                      <div>
                        <input
                          type="text"
                          placeholder="Your reply..."
                          value={replyToReply.replyText || ""}
                          onChange={(e) => {
                            const updatedComments = [...comments];
                            updatedComments[commentIndex].replies[
                              replyIndex
                            ].replies[replyToReplyIndex].replyText = e.target.value;
                            setComments(updatedComments);
                          }}
                        />
                        <button
                          style={buttonStyle}
                          onClick={() =>
                            handleReplySubmit(
                              commentIndex,
                              comment.replies[replyIndex].replies[replyToReplyIndex].replyText
                            )
                          }
                        >
                          Post Reply
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
        <input
          type="text"
          placeholder="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button style={buttonStyle} onClick={handleCommentSubmit}>
          Post Comment
        </button>
      </div>
    </div>
  );
};

const blogStyle = {
  maxWidth: "100%",
  margin: "0 auto",
};

const Blog = () => {
  return (
    <div style={blogStyle}>
      {articlesData.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          content={article.content}
          author={article.author}
          profession={article.profession}
          authorImage={article.authorImage}
        />
      ))}
    </div>
  );
};

export default Blog;
