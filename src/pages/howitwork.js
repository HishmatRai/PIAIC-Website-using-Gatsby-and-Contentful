import React from "react"
import Classes from "./../style/howitwork.module.scss"
import Grid from "@material-ui/core/Grid"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Header from "../components/home/navbar/navbar.js"
import Footer from "./../components/home/footer/footer"

const How = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHowtowork {
        edges {
          node {
            textNumber1 {
              json
            }
            textNumber2 {
              json
            }
            textNumber3 {
              json
            }
            textNumber4 {
              json
            }
            textNumber5 {
              json
            }
            textNumber6 {
              json
            }
            textNumber7 {
              json
            }
            map {
              file {
                url
              }
            }
            title
            shortdescription
            number1
            roadmap {
              title
              Roadmap {
                start
                number
                color
                cityname
                backgroundcolor
              }
            }
          }
        }
      }
    }
  `)
  let work = data.allContentfulHowtowork.edges[0].node
  return (
    <div>
      <Header />
      <div className={Classes.secMainDiv}>
        <Grid container justify="center">
          <Grid>
            <h2
              style={{
                color: "white",
                borderBottom: "2px solid #00b990",
                marginTop: "10px",

              }}
            >
              {work.title}
            </h2>
          </Grid>
        </Grid>
        <div>
          <Grid container justify="center">
            <Grid item xs={4} lg={1}>
              <div>
              <h2
              style={{
                backgroundColor: "#00cf9e",
                color: "white",
                borderRadius: "100%",
                height: "80px",
                width: "80px",
        
              }}
            >
              <span style={{
                float: 'left', lineHeight: 1, marginTop: "-0.5em", paddingTop: '50%',
                textAlign: 'center', width: '100%'
              }}>

           
                  {work.number1}
              </span>
            </h2>
              
              </div>
            </Grid>
            <Grid item xs={10} lg={8}>
              <h6 style={{ color: "white", paddingTop: "15px" }}>
                {work.shortdescription}
              </h6>
            </Grid>
          </Grid>
        </div>
        <br />
        <br />
        <br />
        <Grid container justify="center">
          <Grid item lg={5}>
            <img
              width="275px"
              height="250px"
              src={work.map.file.url}
              style={{
                verticalAlign: "middle",
              }}

              alt="img"
            />
          </Grid>

          <Grid item lg={5} xl={10}>
            <p style={{ color: "white", textAlign: "left", marginLeft: "12%" }}>
              {work.roadmap.title}
            </p>

            <table >
              {work.roadmap.Roadmap.map((v, i) => (
                <tr style={{borderBottom:"20px solid #33322d"}}>
                  <td className={Classes.Numbers} >{v.number}</td>
                  <td>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "6px",
                        border: "2px solid rgb(0, 207, 158)",
                        backgroundColor: v.backgroundcolor,
                        borderRadius: "100%",
                      }}
                    ></span>
                  </td>
                  <td>
                    <input
                      type="text"
                      style={{
                        backgroundColor: v.backgroundcolor,
                        color: v.color,
                      }}
                      className={Classes.citiesNames}
                      outline={true}
                      value={v.cityname}
                    />
                  </td>
                  <td className={Classes.Started}>{v.start}</td>
                </tr>

              ))}
            </table>


          </Grid>
        </Grid>
        <br />
        <br />
      </div>

      <div className={Classes.secondDiv}>
        <Grid container justify="center">
          <Grid item xs={4} lg={1}>
            <h2
              style={{
                backgroundColor: "#00cf9e",
                color: "white",
                borderRadius: "100%",
                height: "80px",
                width: "80px",
marginTop:"10px"
              }}
            >
              <span style={{
                float: 'left', lineHeight: 1, marginTop: "-0.5em", paddingTop: '50%',
                textAlign: 'center', width: '100%'
              }}>

                2
              </span>
            </h2>
          </Grid>

          <Grid item xs={10} lg={8}>
            <p className={Classes.secondparagh}>
              {documentToReactComponents(work.textNumber1.json)}{" "}
            </p>
            <hr />
            <p className={Classes.secondivpar}>
              {documentToReactComponents(work.textNumber2.json)}

            </p>
          </Grid>
        </Grid>
      </div>

      <div className={Classes.thirddiv}>
        <Grid container justify="center">
          <Grid item xs={4} lg={1}>
          <h2
              style={{
                backgroundColor: "#00cf9e",
                color: "white",
                borderRadius: "100%",
                height: "80px",
                width: "80px",
                marginTop: "30px"
              }}
            >
              <span style={{
                float: 'left', lineHeight: 1, marginTop: "-0.5em", paddingTop: '50%',
                textAlign: 'center', width: '100%'
              }}>

            3
              </span>
            </h2>
          </Grid>

          <Grid item xs={10} lg={8}>
            <p className={Classes.thirddivPara}>
              {documentToReactComponents(work.textNumber3.json)}
            </p>
          </Grid>
        </Grid>
      </div>

      <div className={Classes.forthDiv}>
        <Grid container justify="center">
          <Grid item xs={4} lg={1}>
          <h2
              style={{
                backgroundColor: "#00cf9e",
                color: "white",
                borderRadius: "100%",
                height: "80px",
                width: "80px",
                marginTop: "60px"
              }}
            >
              <span style={{
                float: 'left', lineHeight: 1, marginTop: "-0.5em", paddingTop: '50%',
                textAlign: 'center', width: '100%'
              }}>

             4
              </span>
            </h2>
          </Grid>

          <Grid item xs={10} lg={8}>
            <p className={Classes.forthdivPara}>
              {documentToReactComponents(work.textNumber4.json)}
            </p>
          </Grid>
        </Grid>
      </div>

      <div className={Classes.fifthDiv}>
        <Grid container justify="center">
          <Grid item xs={4} lg={1}>
          <h2
              style={{
                backgroundColor: "#00cf9e",
                color: "white",
                borderRadius: "100%",
                height: "80px",
                width: "80px",
                marginTop: "30px"
              }}
            >
              <span style={{
                float: 'left', lineHeight: 1, marginTop: "-0.5em", paddingTop: '50%',
                textAlign: 'center', width: '100%'
              }}>

         5
              </span>
            </h2>
          </Grid>

          <Grid item xs={10} lg={8}>
            <p className={Classes.fifthdivPara}>
              {documentToReactComponents(work.textNumber5.json)}
            </p>
          </Grid>
        </Grid>
      </div>

      <div className={Classes.sixthDiv}>
        <Grid container justify="center">
          <Grid item xs={4} lg={1}>
          <h2
              style={{
                backgroundColor: "#00cf9e",
                color: "white",
                borderRadius: "100%",
                height: "80px",
                width: "80px",
                marginTop: "30px"
              }}
            >
              <span style={{
                float: 'left', lineHeight: 1, marginTop: "-0.5em", paddingTop: '50%',
                textAlign: 'center', width: '100%'
              }}>

               6
              </span>
            </h2>
          </Grid>

          <Grid item xs={10} lg={8}>
            <p className={Classes.sixthdivPara}>
              {documentToReactComponents(work.textNumber6.json)}
            </p>
          </Grid>
        </Grid>
      </div>

      <div className={Classes.sevenththDiv}>
        <Grid container justify="center">
          <Grid item xs={4} lg={1}>
          <h2
              style={{
                backgroundColor: "#00cf9e",
                color: "white",
                borderRadius: "100%",
                height: "80px",
                width: "80px",
                marginTop: "30px"
              }}
            >
              <span style={{
                float: 'left', lineHeight: 1, marginTop: "-0.5em", paddingTop: '50%',
                textAlign: 'center', width: '100%'
              }}>

          7
              </span>
            </h2>
          </Grid>

          <Grid item xs={10} lg={8}>
            <p className={Classes.seventhdivPara}>
              {documentToReactComponents(work.textNumber7.json)}
            </p>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  )
}
export default How
