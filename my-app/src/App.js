import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


class App extends Component {
 constructor(props) {
   super(props);
   this.state={
     Person:{
       "FullName":"Islem Habibi",
       "Bio": "Learn react",
       "ImgSrc":"https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=350&q=100",
       "Profession":  "Developer"
     },
     shows : true,
     /* ajouter date pour enregister l'horodatage du moment ou le composant a ete cree */
     date: new Date(),
     datepased: 0
   }
 }
/*prevState:état précédent du composant. */ 
 Buttonchnge =()=>{
   this.setState((prevState)=>({
     shows : !prevState.shows
   }))
 };
 componentDidMount() {
   this.myTimer= setInterval(()=>{
        const datepased = Math.floor((new Date() - this.state.date) / 1000 );
        this.setState({ datepased });
   },1000);
   console.log(this.myTimer);
 }

 /* lifecycle method */
 clerarInterval(){
   clearInterval(this.myTimer);
 }
 render(){

   const {Person,shows,datepased }= this.state
   return <div className= "App">
      <h1>welcome</h1>
      <Button variant="outline-dark" size="lg"  onClick={this.Buttonchnge}>
      {shows ? 'Hide Profile' : 'Show Profile'}
      </Button>
      
      {
       shows && (
         <Container className='App'>
            <Col xs={12} md={12} style={{padding:"2%"}}>
             <Image src={Person.ImgSrc}  roundedCircle />
             <h3>{Person.FullName}</h3>
             <h5>{Person.Profession}</h5>
             <p><em>{Person.Bio}</em></p>
           </Col>
         </Container>
       ) 
     }
     <h1> Time interval since:{datepased} seconds</h1>
     

   </div>
 }
 
}

export default App;
