import React, { useState } from 'react'
import axios from "axios";
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';

function AddUser() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });


    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post("http://localhost:5000/create_user", user);
            alert("User created successfully");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Label htmlFor="firstName">Enter First Name</Form.Label>
                <Form.Control
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleInput}
                />

                <Form.Label htmlFor="lastName">Enter Last Name</Form.Label>
                <Form.Control
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleInput}
                />
                <Form.Label htmlFor="email">Enter Email</Form.Label>
                <Form.Control
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                />
                <Button variant='success' onClick={handleSubmit}>Submit</Button>
            </Form>
        </div>
    )
}

export default AddUser