import React, { Component } from 'react'
import Editor from './Editor'

class Note extends Component {
  state = {
    entity: this.props.entity,
    body: this.props.entity.body,
    updated: this.props.entity.meta.updated || this.props.entity.meta.created
  }

  render () {
    return (
      <div className="item">
        <div className="meta">
          { this.state.updated }
        </div>
        <div className="content">
          <div className="header">
            { this.state.body }
          </div>
          <div className="extra">
            <Editor />
            { this.state.body.length } 字
            <i className="right floated trash outline icon">

            </i>
          </div>
        </div>
      </div>
    )
  }
}

export default Note
