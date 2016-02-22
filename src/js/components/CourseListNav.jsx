'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

export default class CourseListNav extends React.Component {
  static propTypes = {
    links: React.PropTypes.object.isRequired
  }

  static defaultProps = {
    links: {}
  }

  render(){
    let nav = []

    if(this.props.links.prev !== undefined){
      nav.push(
        <Link key='prev-link' to={`/?page=${this.props.links.prev.page}&per_page=${this.props.links.prev.per_page}`} className="btn prev-link"><i className="fa fa-arrow-left"></i> Previous</Link>
      )
    } 
    
    if(this.props.links.next !== undefined){
      nav.push(
        <Link key='next-link' to={`/?page=${this.props.links.next.page}&per_page=${this.props.links.next.per_page}`} className="btn next-link">Next <i className="fa fa-arrow-right"></i></Link>
      )
    }

    return <div className="course-list-nav">{nav}</div>
  }
}
