import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'
import '../styles/global.css'

const Description = () => {
  return ( 
    <StaticQuery
      query={descQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(1 / 2),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 125,
                borderRadius: `100%`,
              }}
            />
            <div>
              <p style={{ width: rhythm(12 / 1), textAlign: `center`, marginTop: `20px`}}>
                Personal blog by <Link target="_blank" className="link" to={`https://www.instagram.com/${social.instagram}`}>Florian Beaumont</Link>
                <br />
                Read less, learn more.<span style={{ fontSize: `20px`}}> 🚀</span>
              </p>
              <div
                style={{
                  display: `flex`,
                  justifyContent: `space-around`,
                  alignItems: `center`,
                  marginTop: `-20px`
                }}
              >
                <a 
                  href={`https://www.linkedin.com/in/${social.linkedin}`} 
                  target="_blank"             
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                >
                  <Image
                    fixed={data.linkedin.childImageSharp.fixed}
                    alt={author}
                    style={{
                      marginRight: rhythm(1 / 2),
                      marginBottom: 0,
                      minWidth: 25,
                    }}
                  />
                </a>
                <a 
                  href={`https://www.instagram.com/${social.instagram}`}
                  target="_blank"             
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                >
                  <Image
                      fixed={data.instagram.childImageSharp.fixed}
                      alt={author}
                      style={{
                        marginBottom: 0,
                        minWidth: 25,
                      }}
                    />
                </a>
                <a 
                  href={`https://twitter.com/${social.twitter}`}
                  target="_blank"             
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                >
                  <Image
                      fixed={data.twitter.childImageSharp.fixed}
                      alt={author}
                      style={{
                        marginBottom: 0,
                        minWidth: 40,
                      }}
                  />
                </a>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

const descQuery = graphql`
  query DescQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    instagram: file(absolutePath: {regex: "/insta.png/"}) {
      childImageSharp {
        fixed(width: 38, height: 38) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    linkedin: file(absolutePath: {regex: "/linkedin.png/"}) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    twitter: file(absolutePath: {regex: "/twitter.png/"}) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter,
          linkedin,
          instagram
        }
      }
    }
  }
`

export default Description;