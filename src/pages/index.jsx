// Step 1: import react
import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

// Step 2: Define a component
const IndexPage = () => {
  return (
    <Layout pageTitle='Home'>
      <p>I'm  making this by following the Gatsby Tutorial</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/clifford.jpg"
      />
    </Layout>
  )
}

// Step 3: Export the component
export default IndexPage
