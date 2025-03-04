import { useEffect, useState } from "react";
import { useParams } from "react-router";
import GeoLocationMap from "../../utils/GeoLocationMap";
import { getComment, getUser } from "../../services/post.service";
import { useAppContext } from "../../componets/AppContext/AppContext";

const CDetails = () => {
  const [comment, setComment] = useState();
  const [user, setUser] = useState();
  let { id } = useParams();
  const { setPageTitle, setAppBreadcrumbs } = useAppContext();

  //Comments
  useEffect(() => {
    getComment(id).then((res) => {
      setComment(res);
    });
  }, [id]);

  // if (!comment)
  //   return (
  //     <Typography sx={{ textAlign: "center", mt: 4 }}>Loading...</Typography>
  //   );

  //Photos
  // useEffect(()=>{
  //         //axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
  //         axios.get(`photos/${id}`)
  //         //getPhoto(id)
  //         .then((res2)=>{
  //             console.log(res2.data.thumbnailUrl);
  //             setPhoto(res2.data);
  //         });
  //     },[id]);

  //condition check for User ID filtering (bcoz only 10 users)
  // id = useMemo(() => {
  //   if (id > 10) {
  //     if (id % 10 == 0) {
  //       id = id.toString()[0];
  //     } else {
  //       id = id.toString()[1];
  //     }
  //   }
  //   return id;
  // });

  //console.log(id);

  //breadcrumbs
  useEffect(() => {
    setPageTitle("Comment Details");
    setAppBreadcrumbs([
      {
        label: "Comment",
        link: "/comments",
      },
      {
        label: "Comment details",
      },
    ]);
  }, []);

  //Users
  useEffect(() => {
    //axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    // axios
    //   .get(`users/${id}`)
    let tempId = id;
    if (tempId > 10) {
      if (tempId % 10 == 0) {
        tempId = tempId.toString()[0];
      } else {
        tempId = tempId.toString()[1];
      }
    }
    getUser(tempId).then((res) => {
      //console.log(res3.data);
      setUser(res);
    });
  }, [id]);

  return (
    <div>
      Comment
      {comment && (
        <>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
          <p>{comment.email}</p>
        </>
      )}
      {/* {photo && (
        <>
          <p><img src={photo.thumbnailUrl} /></p>  
        </>
      )} */}
      {user && (
        <>
          <h4>Author Address</h4>
          <p>
            {user.name}
            <br />
            {user.address.suite}
            <br />
            {user.address.street}
            <br />
            {user.address.city} - {user.address.zipcode}
            <br />
          </p>
          <p></p>
          <h4>Author Contact</h4>
          <p>
            {user.email}
            <br />
            {user.phone}
            <br />
          </p>
          <GeoLocationMap
            lat={user.address.geo.lat}
            lng={user.address.geo.lng}
          />
        </>
      )}
    </div>
  );
};

export default CDetails;
