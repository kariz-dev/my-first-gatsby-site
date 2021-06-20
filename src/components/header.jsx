import * as React from 'react'

// step 1: import the staticquery hook and graphql tag
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
  /* Step 2: use the useStaticQuery hook and grapql tag to query for data (the query gets run at build time) */
  const data = useStaticQuery(graphql `
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
      <h1>{ data.site.siteMetadata.title }</h1>
    </header>
  )
}

export default Header