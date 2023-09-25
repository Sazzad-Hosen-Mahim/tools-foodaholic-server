import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap';

const AddService = () => {
    const nameRef=useRef()
    const priceRef=useRef()
    const ingredientsRef=useRef()
    const nutritionsRef=useRef()
    const commentsRef=useRef()
    const imgRef=useRef()

    const handleAddService=(e)=> {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const ingredients = ingredientsRef.current.value;
        const comments = commentsRef.current.value;
        const img = imgRef.current.value;

        const newService={name, price, ingredients, comments, img}

        fetch('http://localhost:5000/services',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body:JSON.stringify(newService),

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Data is successfully added in database.')
            }
        })



        e.preventDefault()

    }
    return(
        <div className="container my-5">
            <Form onSubmit={handleAddService}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Food Name:</Form.Label>
        <Form.Control ref={nameRef} type="text" placeholder="Enter Food Name" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price: </Form.Label>
        <Form.Control ref={priceRef} type="text" placeholder="Enter Price" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingredients: </Form.Label>
        <Form.Control ref={ingredientsRef} type="text" placeholder="Enter Ingredients" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nutritions: </Form.Label>
        <Form.Control ref={nutritionsRef} type="text" placeholder="Enter Nutritions" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Comments: </Form.Label>
        <Form.Control ref={commentsRef} type="text" placeholder="Enter Comments" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image: </Form.Label>
        <Form.Control ref={imgRef} type="text" placeholder="Enter Image Link" />
       
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    );
};

export default AddService;