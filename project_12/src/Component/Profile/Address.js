function Address(props) {
    return (
      <div className="Address">
        <ul>
            <li> <p>Unit: {props.unit_number}</p> </li>
            <li> <p>Street: {props.street}</p> </li>
            <li> <p>City: {props.city}</p> </li>
            <li> <p>Country: {props.country}</p> </li>
        </ul>
      </div>
    );
  }

export default Address;