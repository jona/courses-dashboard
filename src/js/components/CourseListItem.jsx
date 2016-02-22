'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

export default class CourseListItem extends React.Component {
  static propTypes = {
    course: React.PropTypes.object.isRequired
  }

  static defaultProps = {
    course: {}
  }

  render(){
    return (
      <li>
        <Link to={`/courses/${this.props.course.id}`} className="course-name">{this.props.course.name} - {this.props.course.code}</Link>
      </li>
    )
  }
}
