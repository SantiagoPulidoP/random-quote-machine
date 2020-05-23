import React, { Component } from 'react'

class Cita extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {quote} = this.props;
        return ( 
            <q className='cita'>{quote}</q>


         );
    }
}
 
export default Cita ;