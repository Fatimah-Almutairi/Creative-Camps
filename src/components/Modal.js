import React from "react";
import "./Modal.css"
import {Array} from './ProgramValue';

function Modal({closeModal}, props) {
  return (

      <div className="modalBackground">
        <div className="modalContainer">
        <div className="modalTitle">
        <button ><i class="fa-regular fa-heart"></i></button>
          <button onClick={() => closeModal(false)} className='butto'><i class="fa-solid fa-xmark"></i></button>

          </div>
          <div className="modalBody">
            {
              Array.map( e => {
                return (
                  <>
                  <h1>{e.Title}</h1>
                  <p>{e.Description}</p>
                  <p>{e.Age}</p>
                  </>
                )
              })
            }
          {/* <h1>{props.Title}</h1>
            <p>{props.description}</p> */}
          </div>
          <div className="modalFooter">
            {/* <button>Favorite</button> */}
            <button>Register</button>
          </div>
        </div>
      </div>
  
  );
}

export default Modal;
