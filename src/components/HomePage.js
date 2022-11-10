import React from "react";
import { useNavigate } from "react-router-dom";
import { SimpleGrid, Box, Image } from "@chakra-ui/react";
import Contact from "./Contact";

// import Array from 'ProgramValue';
import {
  Input,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

function HomePage() {
    
    const navigate = useNavigate();
    const navi = () => {
      navigate("/SignIn");
    };

  return (
    <div>

      <SimpleGrid columns={2} pr={0} mr={0}>
        <Box className="cont" height="80px">
          <h1>
            {" "}
            Encourage Kids To Dream <br />
            <span>Creative Camps</span>
          </h1>
          <p>
            {" "}
            "Sometimes, a dream can make children stronger to change that
            reality. So for this reason, it is necessary to encourage kids to
            dream."{" "}
          </p>
        </Box>
        <Box pr={0} mr={0}>
          <Image src="main11.png" pr={0} mr={0} />
        </Box>
      </SimpleGrid>
      <div className="main">
        <h1 className="h1"> Most Import Programs</h1>
        <div className="containerP">
          <div className="cardP">
            <div className="imgBx">
              <img src="img1.png"></img>
            </div>
            <div className="contentP">
              <h3>Spot Think</h3>
              <p>
              The Think Spot Center announces the start of the summer program for children from 4 to 10 years old for three weeks
              </p>
              <button className="btn1" onClick={navi}>Register Now</button>
            </div>
          </div>
          <div className="cardP">
            <div className="imgBx">
              <img src="img22.png"></img>
            </div>
            <div className="contentP">
              <h3>Cloud Fun Center</h3>
              <p>
              Registration started at the Cloud Fun Center for the Summer Club Program for the Development of Children's Skills during the Summer Vacation
              </p>              
              <button className="btn1" onClick={navi}>Register Now</button>
            </div>
          </div>
          <div className="cardP">
            <div className="imgBx">
              <img src="img33.png"></img>
            </div>
            <div className="contentP">
              <h3>Kids In Nature</h3>
              <p>
              What is better than trying your kids to spend a week in nature? Register now for the children's journey in nature from 7/3 to 7/7 for the ages of 7 to 12
              </p>
              <button className="btn1" onClick={navi}>Register Now</button>
            </div>
          </div>
        </div>
        <h1 className="h1"> New Events</h1>
        <div className="container1">
          <div className="card1">
            <div className="imgBx">
              <img src="https://i.pinimg.com/564x/8f/9f/75/8f9f7586b48e1dd8f22de0f91c7c308e.jpg"></img>
            </div>
            <div className="content1">
              <h3>Arts and Crafts Party</h3>
              <p>
                It gives kids a sense of achievement and allow them to take
                pride in their work which builds confidence. Making art is a
                great, safe way to discover that it's okay to make mistakes and
                that getting things 'wrong' can lead you to a whole new idea
              </p>
            </div>
          </div>

          <div className="card1">
            <div className="imgBx">
              <img src="https://i.pinimg.com/564x/80/61/c7/8061c76bcecb2094439a1979f26b3949.jpg"></img>
            </div>
            <div className="content1">
              <h3> Gift Wrapping</h3>
              <p>hide the identity of a gift until just the right moment</p>
            </div>
          </div>

          <div className="card1">
            <div className="imgBx">
              <img src="https://i.pinimg.com/564x/69/2e/b5/692eb572b521c17576445d280734890b.jpg"></img>
            </div>
            <div className="content1">
              <h3> Flowers Arrangements</h3>
              <p>
                flower Arranging and other practical life activities are used to
                help children begin to develop independence and logical thought.
              </p>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="con1">
            <h1>Contact US</h1>
            <FormLabel>Email address</FormLabel>
            <Input type="email" width={500} />
            <FormLabel>Subject</FormLabel>
            <Input type="input" width={500} />
          </div>
          <div className="con2">
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Enter Your Message Here..." width={500} />
            <button className="btn" onClick={Contact}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;