
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [userInfo, setuserInfo] = useState({file:[],
  });
  const handleInputChange = (event) => {
    setuserInfo({
      ...userInfo,
      file:event.target.files[0],
    })
  }
  const submit = async () =>{
        const formdata = new FormData()
        formdata.append('avatar', userInfo.file);
        axios.post("http://http://localhost:3000/imageupload", formdata,{
          headers: { "Content-Type": "multipart/form-data"}
        })
        .then(res => {console.warn(res);
        })
  }
  return (
    <div className="container">
      <h3 className='text-w'>upload your image</h3>
      <div className='formdesign'>
        <div className='form-row'>
          <label className='text-w'>Select Image:</label>
          <input type="file" className='form-c'
          name = "upload" onChange={handleInputChange}/>
        </div>
        <div className='form-row'>
          <button type= "submit" className='btn btn-blue' onClick={()=>submit()}>save</button>
        </div>
      </div>
     
      
    </div>
  );
}

export default App;
