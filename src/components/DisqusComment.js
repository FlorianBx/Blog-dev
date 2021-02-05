import React from 'react'
import { Disqus } from 'gatsby-plugin-disqus';

const DisqusComments = ({ url, identifier, title }) => (
    <Disqus
      config={
          url,
          identifier,
          title
      }
    />
);

export default DisqusComments