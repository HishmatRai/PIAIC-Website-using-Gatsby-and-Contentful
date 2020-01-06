import React from "react"
import Header from "../components/home/navbar/navbar"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Styles from "../style/courses.module.scss"
import Cards from "../components/home/quarter_card/quarter_card"
import DetailCards from "../components/home/quarter_card/detail_card"
import { graphql } from "gatsby"
import Footer from "./../components/home/footer/footer"
import './courses.scss'
const Courses = ({ data }) => {
  let allcontant3 = data.allContentfulCourses.edges[0].node
  console.log(allcontant3.color, "all daa")
  return (
    <div>
      <Header />
      <div
        className="Rectangle-67 d-flex justify-content-center align-items-center"
        style={{ backgroundColor: allcontant3.color, height: "100vh" }}
      >
        <div className="SliderData" >
          <h3 className="Artificial-Intelligence" style={{ color: "white", textAlign: "center",fontSize:"68px" }}>
            {allcontant3.title}
            </h3>
          <p
            className="paraDes"
            style={{
              color: "white",
              width: "100%",
              textAlign: "center",
              fontWeight: "20px",
              marging: "0 auto",
                      fontSize:"13px",
              fontWeight:"600",
              width:'70%',
              margin:"0 auto",
              worldSpacing:"1px"

            }}
          >
            {allcontant3.programInfo}
          </p>
        </div>
      </div>
      <div className="line2">
        <h1 className="program">{allcontant3.programStructure}</h1>
        {allcontant3.programStructuresub}
      </div>
      <Grid container justifyContent={"center"}>
        {allcontant3.quarters.map((v, i) => (
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            {console.log(v.color + v.backgroungcolor)}
            <Cards
              color={v.backgroungcolor}
              title={v.title}
              des={v.descraption}
              fontcolor={v.color}
            />
          </Grid>
        ))}
      </Grid>
      <div className="detailDiv">
        <div class="line"></div>
        <h2 className="detailed" style={{ textAlign: "center" }}>
          {allcontant3.detailedProgramStructure}
        </h2>
      </div>
      <Grid container justifyContent={"center"}>
        {allcontant3.subquarters.map((v, i) => {
          if (i % 2 === 0 && i < allcontant3.subquarters.length - 1) {
            return (
              <>
                <Grid
                  item
                  xl={6}
                  lg={6}
                  md={6}
                  sm={6}
                  xs={12}
                  style={{
                    borderRight: "2px solid",
                    borderColor: allcontant3.color,
                  }}
                  className={Styles.vertical_line}
                >
                  <span
                    className={Styles.counter}
                    style={{ color: allcontant3.color, borderColor: allcontant3.color }}
                  >
                    1A
                  </span>
                  <Grid
                    xl={12}
                    lg={12}
                    sm={12}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingBottom: "80px",
                    }}
                  >
                    <Paper className={Styles.paper}>
                      <DetailCards
                        cardsTitle={v.cardtitle}
                        cradsImg={v.url}
                        cardsDes={v.carddescraption}
                      />
                    </Paper>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xl={6}
                  lg={6}
                  md={6}
                  sm={6}
                  xs={12}
                  style={{
                    borderLeft: "2px solid",
                    borderColor: allcontant3.color,
                  }}
                  className={Styles.vertical_line}
                ></Grid>
              </>
            )
          }
          if (i % 2 !== 0 && i < allcontant3.subquarters.length - 1) {
            return (
              <>
                <Grid
                  item
                  xl={6}
                  lg={6}
                  md={6}
                  sm={6}
                  xs={12}
                  style={{
                    borderRight: "2px solid",
                    borderColor: allcontant3.color,
                  }}
                  className={Styles.vertical_line}
                >
                  <span
                    className={Styles.counter}
                    style={{ color: allcontant3.color, borderColor: allcontant3.color }}
                  >
                    1B
                  </span>
                </Grid>
                <Grid
                  item
                  xl={6}
                  lg={6}
                  md={6}
                  sm={6}
                  xs={12}
                  className={Styles.right_Side_box}
                >
                  <Grid
                    xl={12}
                    lg={12}
                    sm={12}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingBottom: "80px",
                    }}
                  >
                    <Paper className={Styles.paper}>
                      <DetailCards
                        cardsTitle={v.cardtitle}
                        cradsImg={v.url}
                        cardsDes={v.carddescraption}
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </>
            )
          } else {
            return (
              <>
                <Grid
                  item
                  xl={6}
                  lg={6}
                  md={6}
                  sm={6}
                  xs={12}
                  style={
                    {
                                }
                  }
                  className={Styles.vertical_line}
                >
                  <span
                    className={Styles.counter}
                    style={{ color: allcontant3.color, borderColor: allcontant3.color }}
                  >
                    1A
                  </span>
                  <Grid
                    xl={12}
                    lg={12}
                    sm={12}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingBottom: "80px",
                    }}
                  >
                    <Paper className={Styles.paper}>
                      <DetailCards
                        cardsTitle={v.cardtitle}
                        cradsImg={v.url}
                        cardsDes={v.carddescraption}
                      />
                    </Paper>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xl={6}
                  lg={6}
                  md={6}
                  sm={6}
                  xs={12}
                        ></Grid>
              </>
            )
          }
        })}
      </Grid>
      <Footer />
    </div>
  )
}
export default Courses
export const pageQuery = graphql`
  query($slug: String!) {
    allContentfulCourses(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          
          programInfo
          title
          detail
          color
          subquartertitle
          subquarters {
            carddescraption
            cardtitle
            url
          }
          quarters {
            backgroungcolor
            color
            descraption
            title
          }
        }
      }
    }
  }
`
