import React from 'react';
import PropTypes from "prop-types";

function handleName(name) {
    alert("Welcome" + name);
}

function Profile(props) {
    const styleObject = {backgroundColor:"#ff8000"};
    return(
        <div onLoad={handleName(props.fullName)} style={styleObject}> 
            <h4>Name: {props.fullName}</h4> 
            <h4>Bio: {props.bio}</h4> 
            <h4>Profession:{props.profession}</h4> 
            <h4>Image: {props.children}</h4> 
        </div>
    )
}

Profile.defaultProps = {
    fullName: "John Smith",
    bio: "Live. Work. Die",
    profession: "Data Entry Clerk"
}

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
   };
   

export default Profile;
