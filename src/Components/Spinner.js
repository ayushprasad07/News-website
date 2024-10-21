import React from 'react'
// import loader from './loader.gif'

const Spinner =()=> {
 
    return (
      // <div className="text-center">
      //   <img src={loader} alt='Loading.....'></img>
      // </div>
      <div className="d-flex justify-content-center" style={{margin:"20px"}}>
        <div className="spinner-grow d-flex justify-content-center" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  
}

export default Spinner