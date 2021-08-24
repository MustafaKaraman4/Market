import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import alertify from "alertifyjs"


export default class Form2 extends Component {
    state = { email: "", password: "", city: "", description: "" }
    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        alertify.success(this.state.email + "added to db");
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email"
                            id="email" placeholder="Enter email" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password"
                            id="password" placeholder="Enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description"
                            id="description" placeholder="Enter description" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="select" name="city"
                            id="city" placeholder="Select city" onChange={this.handleChange}>
                            <option>İstanbul</option>
                            <option>Anakra</option>
                            <option>İzmir</option>
                            <option>Bursa</option>
                        </Input>
                    </FormGroup>
                    <Button type="save">Save</Button>
                </form>
            </div>
        )
    }
}