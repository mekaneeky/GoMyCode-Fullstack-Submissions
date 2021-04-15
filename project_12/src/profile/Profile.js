import React from 'react';
import PropTypes from "prop-types";

function handleName(name) {
    alert("Welcome" + name);
}

class Profile extends React.Component {

    constructor(props) {
        super(props);
        
      }


    componentDidMount() {
        this.props.timer()          
    }

    render() {
    const styleObject = {backgroundColor:"#ff8000"};
    return(
        <div style={styleObject}> 
            { this.props.shows &&
            <React.Fragment>
            <h4>Name: {this.props.fullName}</h4> 
            <h4>Bio: {this.props.bio}</h4> 
            <h4>Profession:{this.props.profession}</h4> 
            <h4>Image: {this.props.children}</h4> 
            <h4>seconds since last load: {this.props.time_elapsed}</h4>
            </React.Fragment>
            }   
            <button onClick={this.props.onClick}> Show/Hide </button>
        </div>
    )
    }
}

Profile.defaultProps = {
    fullName: "John Smith",
    bio: "Live. Work. Die",
    profession: "Data Entry Clerk"
}

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    onClick: PropTypes.func
   };
   

export default Profile;
