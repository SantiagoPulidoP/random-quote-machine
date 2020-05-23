import React, { Component } from 'react';

class Autor extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {author} = this.props;
        return ( 
            <i className='autor'><small>{author}</small></i>
         );
    }
}
 
export default Autor;