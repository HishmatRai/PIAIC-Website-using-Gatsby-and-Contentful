// ===============Quarter card================/

import React from "react"
import "./quarter_card.scss"

const Cards = props => (
  <div>
    <div
      className="Rectangle-68"
      style={{ backgroundColor: props.color, color: props.fontcolor }}
    >
        <h1>{props.title}</h1>
        <p style ={{color : props.fontcolor}}>{props.des}</p>
    </div>
  </div>
)

export default Cards
