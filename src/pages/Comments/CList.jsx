import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getComments } from "../../services/post.service";
import { useAppContext } from "../../componets/AppContext/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentAction } from "../../store/actions/comment.action";

const CList = () => {
  //const [comments, setComments] = useState([]);
  
  const { setPageTitle, setAppBreadcrumbs } = useAppContext();
  const { list: comments } = useSelector((state) => state.comment); //"comment" in store.js
  const dispatch = useDispatch();

  //useEffect(() => {
      //axios.get("https://jsonplaceholder.typicode.com/comments")
      // axios.get("comments")
    //getComments().then((res) => {
        //console.log(res);
    //  setComments(res.slice(0, 20));
    //});
  //}, []);

  //const sortComments = comment.slice(0, 20);

  //using redux thunk for api call
  useEffect(() => {
    if (!comments.length) {
      dispatch(fetchCommentAction());
    }
  //}, [comments,dispatch]);
  }, [comments]);

  //breadcrumbs
  useEffect(() => {
    setPageTitle("Comments");
    setAppBreadcrumbs([
      {
        label: "Comments",
      },
    ]);
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
