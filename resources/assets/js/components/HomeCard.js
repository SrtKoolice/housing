import React, { Component } from 'react';
import { Row, Col, CardDeck, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import Modal from 'react-modal'
import HomeJumbo from './HomeJumbo';
import phil from '../../images/no-home.jpg';

const JumboStyle = {
    content : {
      padding               : '0px 20px 20px 20px',
      height                : '95%',
      width                 : '95%',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-10%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class HomeCard extends Component 
{
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            backdrop: true,
            address: ""
          };

        this.toggle = this.toggle.bind(this);
        this.changeBackdrop = this.changeBackdrop.bind(this);

        // Modal functions
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

    changeBackdrop(e) {
        let value = e.target.value;
        if (value !== 'static') {
            value = JSON.parse(value);
        }
        this.setState({ backdrop: value });
    }

    openModal(e) {
        this.setState({address: e.target.value })
        this.setState({modalIsOpen: true});
      }
    
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        //this.subtitle.style.color = '#f00';
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }

    render() {
        const { homes } = this.props;
        let groupSize = 3;
        let rows = [];
        return (
            <div>
                <CardDeck>
                    {
                        homes.length > 0 ?
                        homes.map((home, key) => {
                            return (
                                <React.Fragment key={key}>
                                    <Col sm="4">
                                        <Card>
                                            <CardImg top width="100%" src={home.imgs == "" ? phil : home.imgs} alt="Card image cap" />
                                            <CardBody>
                                            <CardTitle>{home.address}</CardTitle>
                                            <br/>
                                            <CardSubtitle>Bedrooms: {home.bedrooms} Bathroom: {home.bathrooms}</CardSubtitle>
                                            <CardText>This can have whatever data you freaking want Philip.</CardText>
                                            <Button value={home.address} onClick={this.openModal}>Show more</Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </React.Fragment>
                            );
                        }) : null
                        // }).reduce((r, element, index) => {

                        //     if (index % groupSize === 0) rows.push([]);
                        //     if (rows.length != 0)
                        //         rows[rows.length - 1].push(element);
                        //     return rows;
                        // }).map((columns, key) => {
                        //     return (
                        //     <React.Fragment key={key}>
                        //         <Row style={{marginTop: '20px'}}>{columns}</Row>
                        //         {'   '}
                        //     </React.Fragment>
                        // );
                        // }) : null
                    }
                </CardDeck>
                {/* <Modal cssModule={JumboStyle} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
                    <HomeJumbo />
                </Modal> */}
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={JumboStyle}
                    contentLabel="Create Home modal">
                        <HomeJumbo address={this.state.address} />
                </Modal>
            </div>
          );
    }
}

export default HomeCard;