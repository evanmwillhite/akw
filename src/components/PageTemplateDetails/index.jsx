import React from 'react'
import Sidebar from '../Sidebar'
import './style.scss'

class PageTemplateDetails extends React.Component {
  render() {
    const page = this.props.data.markdownRemark
    const title = page.frontmatter.title
    const shortTitle = title.substr(0, title.indexOf(' ')).toLowerCase()

    return (
      <div>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">{title}</h1>
              <div
                className={`page__body ${shortTitle}`}
                dangerouslySetInnerHTML={{ __html: page.html }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PageTemplateDetails
