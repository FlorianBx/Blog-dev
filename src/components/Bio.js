import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

const Bio = () => {
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
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
            />
            <div>
              <p>
                Hey, i'm <strong>{author}</strong>. Flutter mobile developer, 
                just a random dev who wants share some tips about one of his many passions 
              </p>
              <div
                style={{
                  display: `flex`,
                  justifyContent: `space-around`,
                  alignItems: `center`,
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
                  alt={`It's me ${author}`}
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

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
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

export default Bio
