import React from 'react'
import './App.css'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import "jquery/dist/jquery.min.js"
import 'bootstrap/dist/js/bootstrap.min.js'
import Home from './Home'
import contents from '../contents'
import './components/Card.css'

function createCard(content){
  return (<Card 
    key={content.id}
    name={content.fruitname}          
    image={content.img}/>
  );  
}
function App() {
  return (
    <div>
      <Home/>
      <div className='container'>
      
      {contents.map(createCard)}
      </div>  
    </div>
  )
}

export default App