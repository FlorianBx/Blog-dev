import React from 'react'
import { Link } from 'gatsby'

import Badge from './badge'
import '../styles/global.css'

const TagsBar = ({ ...props }) => {
  const tags = props.tag.map(uniqTag => {
    return uniqTag.node.frontmatter.tags
  })
  const uniqTags = [...new Set(tags)]
  return (
    <div style={{display: 'flex', justifyContent: 'start'}}>
      { uniqTags.map((tag, key) => {
        return (
          <Link key={key} className='link' to={`/tags/${tag}`}>
            <Badge tags={tag} />
          </Link>
        )
      })}
    </div>
  )
}

export default TagsBar