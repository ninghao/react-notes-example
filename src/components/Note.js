import React, { Component } from 'react'
import Editor from './Editor'
import moment from 'moment'
import 'moment/locale/zh-cn'
import _ from 'lodash'
moment.locale('zh-CN')

class Note extends Component {
  state = {
    entity: this.props.entity,
    body: this.props.entity.body,
    updated: this.props.entity.meta.updated || this.props.entity.meta.created
  }

  updated () {
    return moment(this.state.updated).fromNow()
  }

  header () {
    return _.truncate(this.state.body, { length: 30 }) || '新建笔记'
  }

  words() {
    return this.state.body.length
  }

  render () {
    return (
      <div className="item">
        <div className="meta">
          { this.updated() }
        </div>
        <div className="content">
          <div className="header">
            { this.header() }
          </div>
          <div className="extra">
            <Editor />
            { this.words() } 字
            <i className="right floated trash outline icon">

            </i>
          </div>
        </div>
      </div>
    )
  }
}

export default Note
