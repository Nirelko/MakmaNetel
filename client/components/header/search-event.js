import React, {Component} from 'react'
import {Link} from 'react-router-dom';

export default class SearchEvent extends Component {
    constructor() {
        super();

        this.state = {};
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    render() {
        return (
          <div>
              <input type="text" onChange={this.handleNameChange}/>
              <Link to={{pathname: 'search', search: `?name=${this.state.name}`}}>
                  <button>Search</button>
              </Link>
          </div>
        );
    }

    handleNameChange({target}) {
        this.setState({
            name: target.value
        });
    }
}