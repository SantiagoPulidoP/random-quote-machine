import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

class Change extends Component {
    constructor(props) {
        super(props);
        this.state = {  }       
    }

    render() { 
       let {name,funHola,cita,autor} = this.props;
       return (  
           <div className="next-twitter">
                <a className="twitter" 
                href={`https://twitter.com/intent/tweet?text= ${cita} --${autor}`} 
                target="_blank">
                    <FontAwesomeIcon icon={faTwitter}  size="lg" color='#00acee'/>
                </a> 
               <button className='boton' onClick={funHola}>{name}</button>
           </div>
        );
    }
}
 
export default Change;