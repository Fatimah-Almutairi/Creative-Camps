import React from "react";
import { SimpleGrid, Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import Model from "./Model";

function HomePage() {
  const [openModel, setOpen] = useState(false);

  return (
    <div>
      <SimpleGrid columns={2} pr={0} mr={0}>
        <Box className="cont" height="80px">
          <h1>
            Encourage Kids To Dream <br />
            {/* <span>Creative Camps</span>{" "} */}
          </h1>
          <p>
            "Sometimes, a dream can make children stronger to change that
            reality. So for this reason, it is necessary to encourage kids to
            dream."
          </p>
        </Box>
        <Box pr={0} mr={0}>
          <Image src="main.png" pr={0} mr={0} />
        </Box>
      </SimpleGrid>

      <div className="main">
        <div className="container">
          <div className="card">
            <button
              className="openModel"
              onClick={() => {
                setOpen(true);
              }}
            >
              <img src="img1.png" className="img" />
            </button>
            <div className="card-title">
              <h1>Spot Think</h1>
            </div>
          </div>
          <div className="card">
            <button>
              <img src="img2.png" className="img" />
            </button>
            <div className="card-title">
              <h1>Summer Club</h1>
            </div>
          </div>
          <div className="card">
            <button>
              {" "}
              <img src="img3.png" className="img" />
            </button>
            <div className="card-title">
              <h1>Kids In Nature</h1>
            </div>
          </div>
          {openModel && <Model closeModel={setOpen} />}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
