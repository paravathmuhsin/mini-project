import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComment } from "../../models/comment.model";
import Title from "../../components/Title/Title";
import { useAppContext } from "../../components/AppContext/AppContext";
import { Skeleton } from "@mui/material";

const Details = () => {
  const { id } = useParams();
  const [comment, setComment] = useState(null);
  const { setAppTitle } = useAppContext();

  useEffect(() => {
    setAppTitle("Comment Details");
  }, [setAppTitle]);

  useEffect(() => {
    getComment(id).then((res) => {
      setComment(res);
    });
  }, [id]);
  return (
    <>
      <Title>Comment Details</Title>
      {comment ? (
        <>
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </>
      ) : (
        <>
          <Skeleton variant="text" height={40} sx={{ fontSize: "1rem" }} />
          <br />
          <Skeleton variant="rectangular" height={60} />
        </>
      )}
    </>
  );
};

export default Details;

/* import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComment } from "../../models/comment.model";


const Details = () => {
  const { id } = useParams();
  useEffect(() =>  {
    getComment(id).then(()=>{
      console.log(res);
    });
  },[id]);

  return <div>Details</div>
};

export default Details; */
