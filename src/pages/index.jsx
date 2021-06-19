// Step 1: import react
import * as React from "react"
import { Link } from "gatsby"

// Step 2: Define a component
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/about">About</Link>
      <p>I am making this by following the gatsby tutorial.</p>
    </main>
  )
}

// Step 3: Export the component
export default IndexPage
