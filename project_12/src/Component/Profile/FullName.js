
function FullName(props) {
    return (
      <div className="name" style={{display:"flex"}}>
          <h4>{props.first_name}</h4>
          <h4>{props.last_name}</h4>
      </div>
    );
  }

export default FullName;