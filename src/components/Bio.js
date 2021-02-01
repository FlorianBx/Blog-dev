import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

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
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
            />
            <p>
              Hey, moi c'est <strong>{author}</strong>. Il est écrit dans les tablettes de Skélos
              que seul un gnome des Forêts du Nord unijambiste dansant à la pleine lune au milieu 
              de douze statuettes de Gladeulfeurha enroulées dans un jambon trouvera un sens à cette bio !!
              {` `}
              <br />
              <a href={`https://www.linkedin.com/in/${social.linkedin}`} target="_blank">Linkedin</a>
              <br />
              <a href={`https://www.instagram.com/${social.instagram}`} target="_blank">Instagram</a>
              <br />
              <a href={`https://twitter.com/${social.twitter}`} target="_blank">Twitter</a>
            </p>
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
