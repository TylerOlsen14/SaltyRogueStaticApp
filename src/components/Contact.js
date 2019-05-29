import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Contact = () => {
  return (
    <div className="main card">
      <h1>
        Salty Rogue Real Estate
      </h1>
      <h3>Questions</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsa dignissimos voluptas quibusdam esse delectus suscipit? Architecto optio similique expedita repellat nihil. Veritatis facilis non deleniti mollitia quam quo voluptatem.</p>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Contact Us</Label>
          <p className="exampleEmail">
            Let us know what questions you might have. We will be happy to help you with whatever you need. Give your name and phonenumber and tell us which property you might be interested in. We will get back to you as soon as possible.
          </p>
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="name"
            name="name"
            id="name"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="Email"
            name="Email"
            id="exampleEmail"
            placeholder="Email placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Phone Number</Label>
          <Input
            type="number"
            name="number"
            id="exampleNumber"
            placeholder="Phone Number placeholder"
          />
        </FormGroup>
        <FormGroup check className="checkboxGroup">
          <Label check className="checkbox">
            <Input className="checkbox" type="checkbox" id="EmmaStreet" label="Emma Street" />
            <Input className="checkbox" type="checkbox" id="LithiaPark" /> Lithia Park
            <Input className="checkbox" type="checkbox" id="LehiSouth" /> Lehi South
            <Input className="checkbox" type="checkbox" id="CottonwoodHeights" /> Cottonwood Heights
            <Input className="checkbox" type="checkbox" id="AmericanFork" /> American Fork
          </Label>
        </FormGroup>
        <FormGroup className="question">
          <Label for="exampleText">Mark your question here</Label>
          <Input type="textarea" className="question" name="text" id="exampleText" placeholder="It can be as ridiculous as you want" />
        </FormGroup>
      </Form>
    </div>
  );
}

export default Contact