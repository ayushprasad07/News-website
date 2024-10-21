import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

const  App = ()=>{

  const pageSize=15;
  const apikey=process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0);


  const updateProgress=(progress)=>{   
     // Always make the function as arrow function if not this will show an error in the browser 
     setProgress(progress)
  }
    return (
      <div>
        <Router>
        <LoadingBar
        height={3}
        color='#03045e'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
          <Navbar/>
          <Routes>
          <Route exact path="/general" element={<News setProgress={updateProgress} apikey={apikey}   key ="general" pageSize={pageSize} country='us' category='general'/>}></Route>
          <Route exact path="/business" element={<News setProgress={updateProgress} apikey={apikey}   key="business" pageSize={pageSize} country='us' category='business'/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={updateProgress} apikey={apikey}   key="entertainment" pageSize={pageSize} country='us' category='entertainment'/>}></Route>
          <Route exact path="/generalhealth" element={<News setProgress={updateProgress} apikey={apikey}   key="generalhealth" pageSize={pageSize} country='us' category='generalhealth'/>}></Route>
          <Route exact path="/science" element={<News setProgress={updateProgress} apikey={apikey}   key="science" pageSize={pageSize} country='us' category='science'/>}></Route>
          <Route exact path="/technology" element={<News setProgress={updateProgress} apikey={apikey}   key="technology" pageSize={pageSize} country='us' category='technology'/>}></Route>
          <Route exact path="/sports" element={<News setProgress={updateProgress} apikey={apikey}   key="sports" pageSize={pageSize} country='us' category='sports'/>}></Route>
        </Routes>  
        </Router>
      </div>
    )
  
}

export default App;


