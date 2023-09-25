import React, {useEffect, useState} from 'react';
import Service from '../Service/Service'
import "./Services.css"

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[services])

    const handleDeleteService = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if(proceed){
            const url = `http://localhost:3000/services/${id}`
            fetch(url, {
                method: 'DELETE',
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.deleteCount > 0){
                    alert('delete successfully')
                    const remainingServices = services.filter(
                        (service) => service._id !== id,
                    )
                    setServices(remainingServices)
                }
            })
        }
    } 

    console.log(services);

    return(
        <div className="services container">
            {
                services.map(service=><Service realService={service} handleDeleteService={handleDeleteService} ></Service>)
               
            }
        </div>
    );
}

export default Services