import React, { Component } from 'react'
import Editor from './Editor'

class Note extends Component {
  render () {
    return (
      <div>
        笔记项目
        <Editor />
      </div>
    )
  }
}

export default Note
