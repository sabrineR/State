import React, { Component } from 'react'
import {Badge,Card,Button} from "react-bootstrap";
import './person.css'

class Person extends Component {
    constructor(){
        super();
        this.state={
            
            fullName:'Sabrine ben sassi',
            bio:'FullStack JS',
             imgSrc:'https://th.bing.com/th?q=Poze+Smechere+De+Profil&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.75&pid=InlineBlock&mkt=en-WW&adlt=moderate&t=1&mw=247',
              profession:'IT-Engineering',
              timer :0,
              intervalle:null
        }
    }
componentDidMount(){
    this.setState({
        intervalle:setInterval(()=>this.setState({timer:this.state.timer+1}),
            1000)
    })

}
componentDidUpdate(){

}
componentWillUnmount(){
    clearInterval(this.state.intervalle);
}

    render() {
        return (
            <div className='countainer'>
              <div >
              <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.state.imgSrc}/>
  
  <Card.Body>
    <Card.Title>{this.state.fullName}</Card.Title>
    <Card.Text>
      {this.state.bio}
    </Card.Text>
    <Card.Text>
      {this.state.profession}
    </Card.Text>
    <Button variant="primary">OK</Button>
  </Card.Body>
</Card>
              </div>
              


              <div className='timer'>
            <Badge variant="secondary">Timer</Badge>
            <p>{`${Math.floor(this.state.timer / 3600)} : ${Math.floor(
          (this.state.timer % 3600) / 60)} : 
          ${Math.floor((this.state.timer % 3600) % 60)}`}</p>

            </div>

            </div>
        )
    }
}
export default Person;
