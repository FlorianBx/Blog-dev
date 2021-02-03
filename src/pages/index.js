import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import Description from '../components/Description'
import Badge from '../components/badge'
import TagsBar from '../components/TagsBar'


const BlogIndex = ({ location, ...props }) => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`, `flutter`, `dart`]}
      />
      <Description />
      <TagsBar tag={data.allMdx.edges} />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            {console.log(node.frontmatter.readingTime)}
            <small>{node.frontmatter.date + ' . ' + node.timeToRead + ' min read'}</small>
            <br />
            <Link to={`/tags/${node.frontmatter.tags}`}>
              <Badge tags={node.frontmatter.tags} />
            </Link>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
          timeToRead
        }
      }
    }
  }
`
