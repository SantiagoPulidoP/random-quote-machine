import React, { Component } from 'react';

class Change extends Component {
    constructor(props) {
        super(props);
        this.state = {  }       
    }

    render() { 
       const {name,funHola} = this.props;
       return (  
            <button className='boton' onClick={funHola}>{name}</button>
        );
    }
}
 
export default Change;