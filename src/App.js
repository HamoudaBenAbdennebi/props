import React from "react";
import "./profile/profile";
import Profile from "./profile/profile";
import Prf from "./img.png";
import "./profile/img";

const handleName = (name) =>{
  return (alert(name));
}

const myStyle = {padding : "0",margin : "0",color : "white", textAlign : "center", backgroundColor : "#232323" , maxWidth:"500px", display : "flex" , justifyContent : "center",alignItems :"center",flexDirection : "column"}

const App = () => {
  return (
    <div style={{width : "100%" , display : "flex" , justifyContent : "center", backgroundColor :"#564476"}}>
      <div style={myStyle}>
    
      <Profile
        fullName="Hamouda"
        bio="hello world"
        profession="software engeer full stack javaScript python java c# php unity"
        handleName={handleName}
      >{Prf}</Profile>
      
      </div>
    </div>
  );
};
export default App;
