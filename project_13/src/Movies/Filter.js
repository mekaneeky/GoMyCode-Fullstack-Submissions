import React, {useRef} from 'react';
import Form from 'react-bootstrap/Form'

const submitButton = () => {
    //setName(nameRef.current.value);
    //<Button type="button" onClick={submitButton}>Search</Button>

  };
 
function Filter(props) {
    
    let filterRef = useRef()


    return (
        <Form>
        <Form.Control ref={filterRef} id="filter-bar" type="text" placeholder="Filter Movies" 
        onChange={ (e) => props.handleChange(e.target.value)} />
        </Form>
        )
        ;
    
}

export default Filter;
