import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {useParams} from 'react-router-dom'

const UpdateService = (id) => {
    const { serviceId } = useParams()
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/services/${serviceId}`)
        .then((res) => res.json())
        .then((data) => setService(data)) 

    }, [])

    const handleNameChange = (e) => {
        const updatedName = e.target.value
        const updatedService = {
            name: updatedName,
            price: service.price,
            img: service.img,
            ingredients: service.ingredients,
            comments: service.comments
        }

        setService(updatedService)
    }

    const handlePriceChange = (e) => {
        const updatedPrice = e.target.value
        const updatedService = {
            name: service.name,
            price: updatedPrice,
            img: service.img,
            ingredients: service.ingredients,
            comments: service.comments

        }

        setService(updatedService)
    }
    const handleIngredientsChange = (e) => {
        const updatedIngredients = e.target.value
        const updatedService = {
            name: service.name,
            price: service.price,
            img: service.img,
            ingredients: updatedIngredients,
            comments: service.comments,
            

        }

        setService(updatedService)
    }
    const handleImgChange = (e) => {
        const updatedImg = e.target.value
        const updatedService = {
            name: service.name,
            price: service.price,
            ingredients: service.ingredients,
            comments: service.comments,
            img: updatedImg,

        }

        setService(updatedService)
    }

    const handleUpdateService = (e) => {
        fetch(`http://localhost:3000/services/${serviceId}`, 
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(service),

        })
        .then(res=> res.json())
        .then(data=> {
            if(data.modifiedCount>0){
                alert('update successful')
                setService({})
            }
        })



        e.preventDefault()
    }

    return(
        <div>
             <Form onSubmit={handleUpdateService}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Service Name</Form.Label>
        <Form.Control value={service.name || ''} type="text" placeholder="Enter Service Name" onChange={handleNameChange} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Service Price</Form.Label>
        <Form.Control value={service.price || ''} type="text" placeholder="Enter Service Price" onChange={handlePriceChange} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingredients</Form.Label>
        <Form.Control value={service.ingredients || ''} type="text" placeholder="Enter Ingredients" onChange={handleIngredientsChange} />
        
          
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Img</Form.Label>
        <Form.Control value={service.img || ''} type="text" placeholder="Enter Ingredients" onChange={handleImgChange} />
        
      </Form.Group>

      
      
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
        </div>
    )


}

export default UpdateService