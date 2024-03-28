import { useState } from 'react'
import axios from "axios";

import './App.css'

function App() {
  const [file, setFiles] = useState();

  function clicked(){

    const formdata = new FormData();
    formdata.append("title", "notitle");
    formdata.append("file",file);
    console.log(file)
    axios.post("http://localhost:3000/post", formdata, {
      headers:{
        "Content-Type":"multipart/form-data"
      }
    })
    .then((resp)=>{
      console.log(resp)
    })
    .catch((err)=>{
      console.log(err);
    })

  }

  return (
    <>
      <input type="file" name="image" onChange={(e)=>setFiles(e.target.files[0])}/>
      <button onClick={clicked}>submit</button>
    </>
  )
}

export default App
