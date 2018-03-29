import React, { Component } from 'react';
import CreateHome from './CreateHome';
import Modal from 'react-modal';
import HomeDropDown from './HomeDropDown';
import HomeCard from './HomeCard';

const modalStyle = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
 
/* Main React component */
class Main extends Component {
    constructor() {
        super();
        this.state = {
            address: "",
            home: [],
            homes: [],
            modalIsOpen: false,
        };

        this.findHome = this.findHome.bind(this);
        this.updateHome = this.updateHome.bind(this);

        // Modal functions
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.renderHomes = this.renderHomes.bind(this);
        this.getHOme = this.getHome.bind(this);
    }
    
    openModal() {
        this.setState({modalIsOpen: true});
      }
    
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        //this.subtitle.style.color = '#f00';
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }

    findHome() {
        /* fetch API in action */
        fetch(`/api/homes/${this.state.address}/`, {
            redirect: 'follow',
            mode: 'cors',
            credentials: 'same-origin',
        })
        .then(response => {
            return response.json();
        })
        .then(home => {
            //Fetched product is stored in the state
            this.setState({ home });
        });
    }

    componentDidMount() {
        fetch('/api/homes/').
        then(response => {
            console.log("Database calls", response);
            return response.json();
        }).
        then(homes => {
            console.log("Completed: ", homes);
            this.setState( {homes} );
        }).catch((error) => console.log("Error from fetch: ", error));
    }
    
    updateHome(e) {
        this.setState({ address: e.target.value });
    }
    
    renderHomes() {
        return this.state.homes.map(home => {
            return (
                <li onClick={
                    () =>this.handleClick(home)} key={home._id} >
                    { home.address } 
                </li>      
            );
        })
      }

      getHome(){
          let homeObj = {};
          homeObj = this.state.home;
          return(
              <div>
              <div>{homeObj.address}</div><br/>
              <div>{homeObj.bathrooms}</div><br/>
              </div>
          );
      }

    render() {
        return (
            <div>
                <div id="leftSide" style={{float:'left'}}>
               <input type="text" id="address" onChange={this.updateHome} />
                <input type="button" value="Find" id="addressSearch" onClick={this.findHome}/>
                <input type='button' value='Add' id='createHome' onClick={this.openModal} />
                </div>
                <HomeCard homes={this.state.homes} />
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={modalStyle}
                    contentLabel="Create Home modal">
                        <CreateHome />
                </Modal>
                <HomeDropDown homes={this.state.homes} />
            </div>
        );
    }
}
 
export default Main;
    