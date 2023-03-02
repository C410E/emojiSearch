import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import "./SerchInput.css";

export default class SearchInput extends PureComponent{
    static propTypes = { 
        textChange: PropTypes.func
    }
    handleChange = event => {
        this.prop.textChange(event)
    }
    render(){
        return(
            <div className="component-search-input">
             <div>
              <input onChange={this.handleChange} />
             </div>
            </div>
        )
    }
}