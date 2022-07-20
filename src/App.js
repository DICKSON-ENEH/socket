import React from "react"
// import {io} from "socket.io-client"
import "./App.css"
import {FcLike} from 'react-icons/fc'
import styled from "styled-components"
// io("http://localhost:4000")
import { v4 as uuidV4} from 'uuid'

function App() {
  return (
   <div className="App">
    <div className="wrapper">
  <div className="card">
    <div className="cardwrap">
      <div className="Name">
        Dickson Eneh
      </div>
      <div className="Count">
          <FcLike />
        </div>
        <span>2</span>
    </div>
  </div>
    </div>
   </div>
  );
} 

export default App; 

