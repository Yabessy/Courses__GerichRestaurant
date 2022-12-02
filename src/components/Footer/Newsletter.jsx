import React from "react"
import SubHeading from "../SubHeading/SubHeading"
import "./Newsletter.css"

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-header">
      <SubHeading title="NewsLetter" />
      <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
    </div>
  </div>
)

export default Newsletter
