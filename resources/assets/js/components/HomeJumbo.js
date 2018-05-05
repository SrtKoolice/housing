import React, { Component } from 'react';
import { Media, Button, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import CardJumboForm from './CardJumboForm';
import phil from '../../images/no-home.jpg';

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
                <div id="jumbo-header">
                    <ModalHeader toggle={this.toggle}>{this.state.home.address}</ModalHeader>
                    <div >
                        <img style={{maxWidth:'128px', float: "left"}} src={this.state.home.imgs == "" ? phil : this.state.home.imgs}/>
                    </div>
                    <div className="flex-container">
                        <div className="flex-item">
                            <label htmlFor="purchasePrice">Purchase Price</label>
                            <div id="purchasePrice flex-price">${this.state.home.price}</div>
                        </div>
                        <div className="flex-item">
                            <label htmlFor="purchaseDate">Purchase Date</label>
                            <div id="purchaseDate flex-purchase">{this.state.home.purchaseDate}</div>
                        </div>
                        <div className="flex-item">
                            <label htmlFor="sellPrice">Sale Price</label>
                            <div id="sellPrice flex-sale">{this.state.home.sellPrice === 0 ? "Not yet sold" : this.state.home.sellPrice}</div>
                        </div>
                    </div>
                </div>
                <CardJumboForm />
                <ModalBody>
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