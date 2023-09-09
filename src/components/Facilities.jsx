// import React, { useState } from "react";

// import "../styles/fac.scss";
// import y from "../assets/y.png";
// import c from "../assets/c.png";
// import pt from "../assets/pt.png";
// import z from "../assets/z.jfif";
// import d from "../assets/d.jfif";
// import Exercises from "./Exercises";
// import { Modal } from 'react-responsive-modal';
// import programData from "./programs.json"; // Import your program data

// // Modal.setAppElement("#root");

// function Facilities() {
  
//   const [selectedProgram, setSelectedProgram] = useState(null);
//     const [open, setOpen] = useState(false);
//   const imageFilenames = [pt, z, c, d, y];

//   const openModal = (program) => {
//     setSelectedProgram(program);
//     setOpen(true);
//   };

//   const closeModal = () => {
//     // setSelectedProgram(program);
//     setOpen(false);
//   };
//   return (
//     <div className="fac">
//       <div>
//         <h1>Programs</h1>
//         <div>
//           {programData.map((program, index) => (
//             <div
//               key={index}
//               style={{ animationDelay: `${0.2 * (index + 1)}s` }}
//             >
//               <img
//                 src={imageFilenames[index]}
//                 alt={program.name}
//                 onClick={() => openModal(program)}
//               />

//               <p>{program.name}</p>
//               {/* <button onClick={() => openModal(program)}>
//                   {program.name}
//                 </button> */}
//               <Modal
//          onClose={()=>{}}
//                 open={selectedProgram===program?open:''}
//                 style={{

//                   overlay: {
//                     backgroundColor: "black",
//                   },
//                   content: {
//                     width: "70%",
//                     height: "auto",
//                     margin: "5rem auto 2rem auto",
//                     display: "flex",
//                     fontFamily: "Roboto",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     flexDirection: "column",
//                     borderRadius: "30px",
//                     textAlign: "center",
                 
//                     padding:"2rem 1rem",
//                        overflowY:"auto"
//                   },
//                 }}
//               >
//                 {/* <h1 style={{ fontSize: "2rem",margin:"5rem 0 2rem 0" }}>{program.name}</h1> */}
//                 {program.index !== 4 ? 
//                   <div
                   
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     flexDirection: "column",
//                     justifyContent: "space-around",
//                     width: "70%",
//                     height: "auto",
//                     fontSize: "1rem",
//                     padding:"10rem 0 0 0",
                 
                    
                   
                
//                   }}
//                 >
//                                 <h1 style={{ fontSize: "1.5rem",margin:"5rem 0 2rem 0" }}>{program.name}</h1>

//                   {/* <p style={{ margin:"1rem 0 2rem 0" }}>{program.overview}</p> */}
//                   <h3 style={{ fontWeight: "400",padding:"1rem 0" }}>
//                     <span style={{ fontWeight: "600",padding:".10rem 0" }}>CLASS TIMINGS : </span>
//                     &nbsp;
//                     {program.classTimings}
//                   </h3>
//                   <h3 style={{ fontWeight: "400" ,padding:"1rem 0"   }}>
//                     <span style={{ fontWeight: "600",padding:".10rem 0" }}>AGE GROUP : </span>
//                     &nbsp;
//                     {program.ageGroup}
//                   </h3>
//                   <h3 style={{ fontWeight: "400",padding:"1rem 0" }}>
//                     <span style={{ fontWeight: "600" ,padding:".10rem 0"}}>INSTRUCTOR : </span>
//                     &nbsp;
//                     {program.instructor}
//                   </h3>

//                   {/* <h3 style={{ fontWeight: "500" ,padding:"1rem 0" }}>
//                     <span style={{ fontWeight: "800" }}>REQUIRED ITEMS : </span>
//                     &nbsp;
//                     {program.requiredItems}
//                   </h3> */}
            

//                 </div> : <div 
                 
//                 style={{
//                     display: "flex",
//                     alignItems: "center",
//                     flexDirection: "column",
//                     justifyContent: "space-around",
//                     width: "70%",
//                     height: "auto",
//                     fontSize: "1rem",
//                     padding:"1rem 0",
                    
                    
                     
                   
                     

//                   }}>
//                 {/* <p style={{ margin:"1rem 0 2rem 0" }}>{program.overview}</p> */}
//                 <h1 style={{ fontSize: "1.5rem",margin:"5rem 0 2rem 0" }}>{program.name}</h1>

//                   <h3 style={{ fontWeight: "400" ,padding:"1rem 0" }}>
//                     <span style={{ fontWeight: "600",padding:".10rem 0"  }}>TIMINGS : </span>
//                     &nbsp;
//                     {program.timings}
//                   </h3>
//                   <h3 style={{ fontWeight: "400" ,padding:"1rem 0" }}>
//                     <span style={{ fontWeight: "600",padding:".10rem 0" }}>AGE GROUP : </span>
//                     &nbsp;
//                     {program.ageGroup}
//                   </h3>
//                   <h3 style={{ fontWeight: "400",padding:"1rem 0"  }}>
//                     <span style={{ fontWeight: "600",padding:".10rem 0" }}>Nutritionist : </span>
//                     &nbsp;
//                     {program.instructor}
//                   </h3>

//                   {/* <h3 style={{ fontWeight: "500",padding:"1rem 0"  }}>
//                     <span style={{ fontWeight: "800" }}>Consultation Fee : </span>
//                     &nbsp;
//                     {program.consultationFee}
//                   </h3>
//                   <h3 style={{ fontWeight: "500",padding:"1rem 0"  }}>
//                     <span style={{ fontWeight: "800" }}>Consultation Method : </span>
//                     &nbsp;
//                     {program.consultationMethod}
//                   </h3> */}
                 
//                 </div>
//                 }
            
                
//               </Modal>
//             </div>
//           ))}
        
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Facilities;



import React, {useState} from 'react'
import "../styles/fac.scss";
import y from "../assets/y.png";
import c from "../assets/c.png";
import pt from "../assets/pt.png";
import z from "../assets/z.jfif";
import d from "../assets/d.jfif";
import Exercises from "./Exercises";
import { Modal } from 'react-responsive-modal';
import programData from "./programs.json"; 
import Wrapper from './Wrapper';

function Facilities() {
  const [open, setOpen]=useState(false);
  const [openModalIndex, setOpenModalIndex] = useState(null);  
  const imageFilenames = [pt, z, c, d, y];
 


const closeModal = () => {
  setOpenModalIndex(null);
  setOpen(false);
};

const openModal = (index) => {
  setOpenModalIndex(index);
 
};
  


  return (
    <div className='fac'>
      <div>
        <h1>Programs</h1>
        <div>
         
              {programData.map((program, index) =>(
                <div
                key={index}
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
                >
             <img
               src={imageFilenames[index]}
               alt={''}
               onClick={() => openModal(index)}
              />
               <p>{program.name}</p>
               {/* <Wrapper  open={open} close={closeModal}   /> */}
               {openModalIndex === index && (
                <Wrapper
                  open={true}
                  close={closeModal}
                  program={program} // Pass the program object to the Wrapper component
                />
              )}
                </div>
                
              ))}
     
       
    </div>
    </div>
  </div>
  )
}

export default Facilities

