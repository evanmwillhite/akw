import React from 'react'
import Helmet from 'react-helmet'
import '../assets/scss/init.scss'

import favicon from './favicon.ico'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="layout">
        <Helmet
          defaultTitle="Blog by Amanda Willhite"
          meta={[
            { name: 'description', content: 'The blog of Amanda Willhite' },
          ]}
          link={[
            {
              rel: 'icon',
              type: 'image/x-icon',
              href: favicon,
            },
          ]}
        />
        {children()}
      </div>
    )
  }
}

export default Layout
