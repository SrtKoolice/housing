import React, { Component } from 'react';
import { Media, Button, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import CardJumboForm from './CardJumboForm';

class HomeJumbo extends Component
{
    constructor(props) {
        super(props);

        this.state ={
            home: {},
        }

    }

    componentDidMount(){
        console.log("address", this.props.address);
        /* fetch API in action */
        fetch(`/api/homes/${this.props.address}/`)
        .then(response => {
            return response.json();
        })
        .then(home => {
            //Fetched product is stored in the state
            this.setState({ home: home[0] });
        });
    }

    render() {
        console.log(this.state.home)
        return(
            <React.Fragment>
                <ModalHeader toggle={this.toggle}>{this.state.home.address}</ModalHeader>
                <Media right style={{float: 'left', marginRight: '15px'}}>
                    <Media object style={{width:'128px', height:'auto', margin: '0 auto'}} src={this.state.home.img} />
                </Media>
                <CardJumboForm />
                <ModalBody>
                    This could be potentially how it would look.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Poop on the cat</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Leave??</Button>
                </ModalFooter>
            </React.Fragment>
        );
    }
}

export default HomeJumbo;