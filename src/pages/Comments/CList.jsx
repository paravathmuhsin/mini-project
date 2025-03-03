import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getComments } from "../../services/post.service";

const CList = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    //axios.get("https://jsonplaceholder.typicode.com/comments")
    // axios.get("comments")
    getComments().then((res) => {
      //console.log(res);
      setComments(res.slice(0, 20));
    });
  }, []);

  return (
    <div>
      List
      {/* {comment.map((item, index) => ( */}
      {comments.map((item, index) => (
        <div key={item.id}>
          <h3>
            {/* <Link> */}

            {/* to navigate to details page using item id */}
            <Link to={`/comments/${item.id}`}>
              {`${index + 1}: ${item.name}`}
            </Link>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default CList;
