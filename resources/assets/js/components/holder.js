import React, { Component } from 'react';
import ReactDOM from 'react-dom';
 
/* An example React component */
class Main extends Component {
    constructor() {
        super();
        
        this.state = {
            homes: [],
        }
        
        this.renderHomes = this.renderHomes.bind(this);
    }
    
    componentDidMount() {
        /* fetch API in action */
        fetch('/api/homes')
        .then(response => {
            return response.json();
        })
        .then(homes => {
            //Fetched product is stored in the state
            this.setState({ homes });
        });
    }
    
    renderHomes() {
    return this.state.homes.map(home => {
        return (
            /* When using list you need to specify a key
             * attribute that is unique for each list item
            */
            <li key={home._id} >
                { home.address } 
            </li>      
        );
    })
  }
    
    render() {
        return (
            <div>
                <h3>All Homes</h3>
                <ul>
                    {this.renderHomes()}
                </ul>
            </div>
        );
    }
}
 
export default Main;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}