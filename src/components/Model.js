import React from "react";

function Modal({closeModal}) {
  return (
    <div>
      {/* setOpen(true); */}

      <div className="modalBackground">
        <div className="modalContainer">
          <button onClick={() => closeModal(false)}>X</button>
          <div className="modalTitle">
            <h1>Title for Cards here!</h1>
          </div>
          <div className="modalBody">
            <p>
              the complete for body and descriptions about the program here...
            </p>
          </div>
          <div className="modalFooter">
            <button>Favorite</button>
            <button>Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;