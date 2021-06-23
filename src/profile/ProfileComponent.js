import React from "react";
import { Card ,Button } from "react-bootstrap";

const ProfileComponent = ({children,FullName,Bio,Profession,handleAlert}) => {
  return (
    <div className='container'>
      <div className='pho'>{children}</div> 
      <div className='info'>
      <h1>FullName : {FullName}</h1>
      <h1>Bio : {Bio}</h1>
      <h1>Profession : {Profession}</h1>
      </div>
    </div>
  );
};

export default ProfileComponent;
