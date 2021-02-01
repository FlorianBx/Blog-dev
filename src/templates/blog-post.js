import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Script from "react-inline-script"

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {

  componentDidMount() {
    window.gc_params = {
      graphcomment_id: 'Le-blog-d-un-dev',
      fixed_header_height: 0,
    };

    (() => {
      var gc = document.createElement('script'); gc.type = 'text/javascript'; gc.async = true;
      gc.src = 'https://graphcomment.com/js/integration.js?' + Math.round(Math.random() * 1e8);
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gc);
    })();
  }

  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    console.log(this.props.pageContext)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
        <div id="graphcomment"></div>
        <Script>
          {`
            window.gc_params = {
                graphcomment_id: 'codewithlinda',
                fixed_header_height: 0,
            };

            (function() {
              var gc = document.createElement('script'); gc.type = 'text/javascript'; gc.async = true;
              gc.src = 'https://graphcomment.com/js/integration.js?' + Math.round(Math.random() * 1e8);
              (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gc);
            })();
          `}
        </Script>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`
