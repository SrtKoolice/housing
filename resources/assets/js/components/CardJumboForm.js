import React, {Component} from 'react';
import { Col,
  Button, Form,
  FormGroup,
  Label, Input,
  FormText, InputGroup,
  InputGroupButtonDropdown,
  DropdownToggle, DropdownMenu,
  DropdownItem,
  InputGroupAddon, InputGroupText } from 'reactstrap';
  import ImagesUploader from 'react-images-uploader';
  import 'react-images-uploader/styles.css';
  import 'react-images-uploader/font.css';

class CardJumboForm extends Component
{
    constructor(props){
        super(props);

        this.state = {
          dropdownOpen: false,
          splitButtonOpen: false
        };

        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.toggleSplit = this.toggleSplit.bind(this);
    }

    toggleDropDown() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  
    toggleSplit() {
      this.setState({
        splitButtonOpen: !this.state.splitButtonOpen
      });
    }

    render() {
        return(
            <Form>
            <FormGroup check inline>
              <Label for="exampleSelect">Holding Costs</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>$</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Dolla dolla billz nigga!"/>
                <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                  <DropdownToggle caret>
                    Month
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Janurary</DropdownItem>
                    <DropdownItem>February</DropdownItem>
                    <DropdownItem>March</DropdownItem>
                    <DropdownItem>April</DropdownItem>
                    <DropdownItem>May</DropdownItem>
                    <DropdownItem>June</DropdownItem>
                    <DropdownItem>July</DropdownItem>
                    <DropdownItem>August</DropdownItem>
                    <DropdownItem>September</DropdownItem>
                    <DropdownItem>October</DropdownItem>
                    <DropdownItem>September</DropdownItem>
                    <DropdownItem>November</DropdownItem>
                    <DropdownItem>December</DropdownItem>
                  </DropdownMenu>
                </InputGroupButtonDropdown>
              </InputGroup>
            </FormGroup>
           
            <FormGroup check inline>
              <Label for="realtorFees">Realtor Fees</Label>
              <InputGroupAddon addonType="prepend">
                  <InputGroupText>$</InputGroupText>
                </InputGroupAddon>
              <Input id="realtorFees"  readOnly/>
            </FormGroup>
            {' '}
            <FormGroup check inline>
              <Label for="renoCost">Reno Cost</Label>
              <InputGroupAddon addonType="prepend">
                  <InputGroupText>$</InputGroupText>
                </InputGroupAddon>
              <Input id="renoCost" readOnly />
            </FormGroup>
            <FormGroup>
              <Label for="file">File</Label>
              <ImagesUploader
                optimisticPreviews
                onLoadEnd={(err) => {
                    if (err) {
                        console.error(err);
                    }
                }}
                label="Upload multiple images"
                />
              <FormText color="muted">
                upload home image
              </FormText>
            </FormGroup>
            <FormGroup >
              <Label for="description">Description</Label>
              <Input type="textarea" name="description" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        );
    }
}

export default CardJumboForm;