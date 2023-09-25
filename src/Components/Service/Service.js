import React from 'react'
import {Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import UpdateService from '../UpdateService/UpdateService';
import handleUpdateService from '../UpdateService/UpdateService'

const Service = (props) => {
  const {handleDeleteService} = props
    const {_id, name, ingredients, price, nutritions, comment, img}=props.realService;
    
    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} height="250"/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            Price: {price} BDT

        </Card.Text>
        <Card.Text style={{color: "gray"}}>
        Ingredients: {ingredients} <br></br>
        Nutritions: {nutritions}
        </Card.Text>
        <Card.Text>
            Comment: {comment}
            </Card.Text>
        
       
        <Link to={`/updateService/${_id}`}>
        <Button variant="primary" onClick={() => UpdateService(_id)}>Update</Button>
        </Link>

        <Button variant="primary" className='ms-4' onClick={() => handleDeleteService(_id)}>Delete</Button>
        
      </Card.Body>
    </Card>
    );
}

export default Service