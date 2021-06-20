import * as React from 'react'
// import the graphql from the gatsby package
import { graphql } from 'gatsby'
import Layout from '../components/layout'

// render the filename for each of your posts.
const BlogPage = ({data}) => {
  return (
    <Layout pageTitle='My blog post'>
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

// define and export the page query. copy over the query built in graphql
export const query = graphql `
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage