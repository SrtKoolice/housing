import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CreateHome extends Component
{
    constructor(){
        super();
        this.state = {
            main: false,
            second: false,
            basement: false,
        };

        this.toggle = this.toggle.bind(this);
        this.numberOnly = this.numberOnly.bind(this);
    }

    numberOnly(e) {
        e.target.value = e.target.value.replace(/\D/g,'');
        e.target.value = e.target.value.length > 4 ? e.target.value.slice(0, -1) : e.target.value;
    }

    toggle(e) {
        switch(e.target.name){
            case "main":
                this.setState({main: !this.state.main});
                if (e.target.checked === false){
                    this.setState({second: false,
                        basement: false});
                    document.getElementById("secondCb").checked = false;
                    document.getElementById("basementCb").checked = false;
                }
                break;
            case "second":
                this.setState({second: !this.state.second});
                break;
            case "basement":
                this.setState({basement: !this.state.basement});
                break;
            default:
                break;
        }
    }

    priceChange(e) {
        e.target.value.toFixed(2);
        let regex = /^\d+(?:\.\d{0,2})$/;
        regex.test(e.target.value);
        if (e.target.value.length === 0){
            e.target.value += "$";
        }
    }

    render() {
        return (
            <div>
                <h2>Create Home</h2>
                <Form >
                    <FormGroup>
                    <Input placeholder="Address" bsSize="sm"/> Address
                    </FormGroup>
                    <FormGroup>
                    <Input placeholder="Price" bsSize="sm" onChange={this.priceChange.bind(this)}/> Price
                    </FormGroup>
                    <FormGroup check inline>
                    <Label size="md" className="createHomeLabel">Bedrooms</Label>
                    <Input className="inputHolder" type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>                 
                        <Label size="md" className="createHomeLabel">Bathrooms</Label>
                        <Input className="inputHolder" type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    {' '}
                    <FormGroup>
                    </FormGroup>
                    {' '}
                    <FormGroup check inline>
                        <Label check>
                            <Input name="main" onChange={this.toggle} type="checkbox" /> Main
                        </Label>
                    </FormGroup>
                    <FormGroup check inline diabled>
                        <Label check>
                            <Input id="secondCb" name="second" onChange={this.toggle} type="checkbox" disabled={!this.state.main}/> Second
                        </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Label check>
                            <Input id="basementCb" name="basement" onChange={this.toggle} type="checkbox" disabled={!this.state.main}/> Basement
                        </Label>
                    </FormGroup>
                    <FormGroup>
                    {this.state.main ? <FormGroup check inline>
                        <Label check>
                            <Input onChange={this.numberOnly} id="mainSqft" placeholder="Sqft"/>
                        </Label>
                    </FormGroup> : null }
                    {this.state.main ? <FormGroup check inline>
                        <Label check>
                            <Input onChange={this.numberOnly} id="SecondSqft" placeholder="Sqft" disabled={!this.state.second}/>
                        </Label>
                    </FormGroup> : null }
                    {this.state.main ? <FormGroup check inline>
                        <Label check>
                            <Input onChange={this.numberOnly} id="basementSqft" placeholder="Sqft" disabled={!this.state.basement}/>
                        </Label>
                    </FormGroup> : null}
                    </FormGroup>
                    <FormGroup check inline>
                    <Button>Submit</Button>
                    <Col sm={{ size: 10 }}>
                        <Button>Cancel</Button>
                    </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
export default CreateHome;