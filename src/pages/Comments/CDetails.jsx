import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "../../utils/axios";
import GeoLocationMap from '../../utils/GeoLocationMap';
//import { getUser } from "../../services/post.service";
//import { getPhoto } from "../../services/post.service";
//import { getComment } from "../../services/post.service";


const CDetails = () => {

    const [comment,setComment]=useState();
    //const [photo,setPhoto]=useState();
    const [user,setUser]=useState();
    //const param=useParams();
    //console.log(param);
    //const {id}=useParams();
    let {id}=useParams();

    //Comments
    useEffect(()=>{
        axios.get(`comments/${id}`)
        //getComment(id)
        .then((res)=>{
            setComment(res.data)
        });
    },[id]);

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
    if(id>10){
      if(id%10==0){
        id=id.toString()[0];
      }
      else{
        id=id.toString()[1];
      }
    }
    //console.log(id);

    //Users
    useEffect(()=>{
            //axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            axios.get(`users/${id}`)
            //getUser(id)
            .then((res3)=>{
                //console.log(res3.data);
                setUser(res3.data);
            });
        },[id]);

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
            {user.name}<br />
            {user.address.suite}<br />
            {user.address.street}<br />
            {user.address.city} - {user.address.zipcode}<br />
          </p> 
          <p></p>
          <h4>Author Contact</h4>
          <p>
            {user.email}<br />
            {user.phone}<br />
          </p>
          <GeoLocationMap lat={user.address.geo.lat} lng={user.address.geo.lng} />
        </>
      )}
    </div>
  )
}

export default CDetails;
