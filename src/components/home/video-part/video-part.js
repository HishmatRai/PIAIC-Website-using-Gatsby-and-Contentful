import React from "react"
import {  MDBRow, MDBCol } from "mdbreact"
import "./video-part.scss"


export default function SpacingGrid(props) {
  const [videos, setvideos] = React.useState(
    "https://www.youtube.com/embed/_rUQ301EJAo"
  )

  return (
    <div>
      {/* ==========================> Main Gird Video  <=============================== */}
      <MDBRow>
        <MDBCol xl="8">
          <iframe
            className="maindiv"
            src={videos}
            width="100%"
            height="500"
            frameborder="0"
            allowfullscreen
            title="video"
          />
        </MDBCol>
        {/* ==========================> Main Gird Video list  <=============================== */}
        <MDBCol xl="4">
          <div
            className="scrolViewDiv"
            style={{
              width: "100%",
              height: "500px",
              overflow: "auto",
              backgroundColor: "#484848",
              padding: "20px 0px 0px 10px",
            }}
          >
            {/* ==========================>   <=============================== */}
            {props.video.map((v, i) => (
              <MDBRow
                className="videosList"
                onClick={() => setvideos(v.videourl)}
              >
                <MDBCol size="6">
                  <img
                    src={v.imageurl}
                    width="100%"
                    height="100"
                    alt="Hqdefault"
                    className="videosImages"
                  />
                </MDBCol>

                <MDBCol size="6">
                  <div className="videosListHeading">
                    {v.title}
                    <span className="videosListPa">{v.description}</span>
                  </div>
                </MDBCol>
              </MDBRow>
            ))}
          </div>
        </MDBCol>
      </MDBRow>
      {/* </Grid> */}
      {/* </MDBCol> */}
    </div>
  )
}
