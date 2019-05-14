/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fluid={data.avatar.childImageSharp.fluid}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                borderRadius: `5%`,
                minWidth: 150,
                minHeight: 150
              }}
              imgStyle={{
                height: 'inherit'
              }}
            />
            <p>
              Written by <strong>{author}</strong> | A software engineer, nurse, and dachshund mom<br/>
              {` `}
              <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noopener noreferrer">
                Follow her on Twitter
              </a>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/susie.png/" }) {
      childImageSharp {
        fluid(maxWidth: 150, maxHeight: 150, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
