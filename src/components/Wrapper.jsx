import React, { useState } from "react";
import "../styles/Wrapper.scss";
import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import programData from "./programs.json";




function Wrapper(props) {
    return (
        <Modal
        center
      
      open={props.open}
      onClose={props.close}
      closeOnOverlayClick
     
        >
        <div className="mod">
        <h1>{props.program.name}</h1>
      <h4>{props.program.overview}</h4>
      {props.program.index !== 4 && (
      
      
      <p><span>Class Timings : &nbsp;</span>{props.program.classTimings}</p>
      )}
      <p><span>Age Group : &nbsp;</span>{props.program.ageGroup}</p>
     
      <p><span>Instructor : &nbsp;</span>{props.program.instructor}</p>
      {props.program.index === 4 && (
        <div>
        
          <p><span>Consultation Fee: &nbsp;</span>{props.program.consultationFee}</p>
         
          <p><span>Consultation Method: &nbsp;</span>{props.program.consultationMethod}</p>
        </div>
      )}
      </div>
        </Modal>
      );
            
}

export default Wrapper;
 // <Modal
    //   classNames={{
    //     overlay: "customOverlay",
    //     modal: "customModal",
    //   }}
    //   open={props.open}
    //   onClose={props.close}
    //   closeOnOverlayClick
    // >
    
    // </Modal>