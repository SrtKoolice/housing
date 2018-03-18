import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class HomeDropDown extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            isDown: false,
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
          isDown: !this.state.isDown
        });
      }

    componentDidMount() {
        this.props.homes.map((item, key) => {
            console.log('Key: ', key);
        });
    }

      render() {
        const { homes } = this.props;
        return (
          <Dropdown direction="right" isOpen={this.state.isDown} toggle={this.toggle}>
            <DropdownToggle caret>
              Homes
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Homes</DropdownItem>
                {homes.map((item, key) => {
                    return(<DropdownItem key={key}>{item.address}</DropdownItem>);
                })
                }
            </DropdownMenu>
          </Dropdown>
        );
      }
}

export default HomeDropDown;
