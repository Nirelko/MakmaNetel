import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {TextField, RaisedButton} from 'material-ui';

export default class SearchEvent extends Component {
    constructor() {
        super();

        this.state = {};
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    render() {
        return (
          <div>
              <TextField id="searchInput" floatingLabelText="search" onChange={this.handleNameChange}/>
              <Link to={{pathname: 'search', search: `?name=${this.state.name}`}}>
                  <RaisedButton label="Search" primary={true} />
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