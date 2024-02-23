import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "jquery/dist/jquery.min.js"
import 'bootstrap/dist/js/bootstrap.min.js'
import Card from './components/Card'
import Home from './Home'
import contents from '../contents'


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
      {contents.map(createCard)}
      
    </div>
  )
}

export default App