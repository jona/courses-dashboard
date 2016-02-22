'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import request from 'request'
import ParseLinkHeader from 'parse-link-header'

import Auth from '../authentication'

import CourseListItem from './CourseListItem'
import CourseListNav from './CourseListNav'

export default class CourseList extends React.Component {
  static propTypes = {
    url: React.PropTypes.string.isRequired
  };

  static defaultProps = {
    url: 'http://canvas-api.herokuapp.com/api/v1/courses'
  };

  constructor(props){
    super(props)

    this.state = {
      page: props.location.query.page || 1,
      per_page: props.location.query.per_page || 2,
      links: {},
      data: []
    }
  }

  componentDidMount(){
    return this.fetchData(this.state.page, this.state.per_page)
  }

  componentWillReceiveProps(nextProps) {
    let q = nextProps.location.query

    return this.fetchData(q.page, q.per_page);
  }

  render(){
    let courses = this.state.data.map(function(el, index) {
      return <CourseListItem key={el.id} course={el} />
    })

    return (
      <div className="course-list">
        <h1 className="course-list-header">Course list</h1>

        <ul className="courses">
          {courses}
        </ul>

        <CourseListNav links={this.state.links} />
      </div>
    )
  }

  fetchData(page, per_page) {
    Auth.getToken((token) => {
      let options = {
        url: this.props.url,
        qs: {
          page: page,
          per_page: per_page
        },
        headers: { 'Authorization': token }
      }

      request.get(options, (err, response, body) => {
        return (
          this.setState({
            page: page,
            per_page: per_page,
            links: ParseLinkHeader(response.headers.link),
            data: JSON.parse(body)
          })
        )
      })
    })
  }
}
