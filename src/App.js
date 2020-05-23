import React, { Component } from 'react'
import './App.css'
import Cita from './components/Cita'
import Autor from './components/Autor'
import Change from './components/Boton'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           citas: [],
           quote : '' ,
           autor: ''
         }
                    
    }

    showCitas(){
        console.log(this.state.citas)
    }

    componentDidMount(){
        fetch('https://type.fit/api/quotes')
        .then(response=> response.json())
        .then(data=> {
            
            this.setState({
                citas:data,
                quote:data[0].text,
                autor:data[0].author
                
            })
           
        });
        
    }

    hola = () => {
        let a = Math.floor(Math.random()*(1643));
        this.setState({
            quote:this.state.citas[a].text,
            autor:this.state.citas[a].author
        });
        document.querySelector('body').style.backgroundColor = 'red';
       
    }
        
    render() {     
        return ( 
            <div className='App'>              
               <Cita quote = {this.state.quote}/>
               <Autor author = {this.state.autor}/>
               <Change name = 'Next Quote' funHola = {this.hola} />
            </div>
        );
    }
}
 
export default App;
