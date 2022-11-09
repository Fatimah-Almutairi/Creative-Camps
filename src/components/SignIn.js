import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function SignIn() {
  return (
    <MDBContainer fluid>
      <MDBCard className="text-start m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="5"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              {/* <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p> */}
              <h2 classNAme="text-center fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Login
              </h2>

              <div className="d-flex flex-row align-items-center mb-4">
                {/* <MDBIcon fas icon="envelope me-3" size="lg" /> */}
                <MDBInput label="Your Email" id="form2 " type="email" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                {/* <MDBIcon fas icon="lock me-3" size="lg" /> */}
                <MDBInput label="Password" id="form3" type="password" />
              </div>

              <MDBBtn className="mb-4" size="lg">
                Login
              </MDBBtn>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://i.pinimg.com/564x/40/b8/b4/40b8b4b42964d8884f7a0d3788469461.jpg"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignIn;