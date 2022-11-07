import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../services/post-service";

const PostDetails = () => {
  const { id } = useParams();
  //doubt above
  const [post, setPost] = useState(null);
  useEffect(() => {
    getPost(id).then((res) => {
      setPost(res);
    });
  }, []);

  return (
    <div>
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : null}
    </div>
  );
};

export default PostDetails;
