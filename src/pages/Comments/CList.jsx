import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { Link } from "react-router";
//import { getComments } from "../../services/post.service";

const CList = () => {

    const [comment,setComment]=useState([]);
    useEffect(()=>{
        //axios.get("https://jsonplaceholder.typicode.com/comments")
        axios.get("comments")
        //getComments()
        .then((res)=>{
            //console.log(res);
            setComment(res.data);
        });
    },[]);

    //to sort comments from 500 to 20
    const sortComments = comment.slice(0, 20);

  return (
    <div>
    List
    {/* {comment.map((item, index) => ( */}
    {sortComments.map((item, index) => (
      <div key={item.id}>
        <h3>
        {/* <Link> */}

        {/* to navigate to details page using item id */}
        <Link to={`/comments/${item.id}`}>
        {`${index + 1}: ${
            item.name
          }`}
          </Link>
        </h3>
      </div>
    ))}
  </div>
  )
}

export default CList;