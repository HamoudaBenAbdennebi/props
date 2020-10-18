import React from "react";
import PropTypes from "prop-types";


const Profile = props  => {
  return (
    <>
        <h1>name  : {props.fullName}</h1>
        <p>bio  : {props.bio}</p>
        <p>profession  : {props.profession}</p>
        <img src={props.children} style={{width: "400px"}} />
        <button onClick={()=> props.handleName(props.fullName)} style={{width:"150px", height : "50px"}}>name</button>
        
    </>
  );
};
Profile.propTypes = {
  stringProp: PropTypes.string,
}
Profile.defaultProps = {
  fullName:"Hamouda",
  bio:"hello world",
  profession:"software engeer full stack javaScript python java c# php unity"
}
export default Profile;
