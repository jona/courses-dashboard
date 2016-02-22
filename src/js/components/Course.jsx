'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import request from 'request'
import { Link } from 'react-router'

import Auth from '../authentication'

export default class Course extends React.Component {
  static propTypes = {
    url: React.PropTypes.string.isRequired
  };

  static defaultProps = {
    url: 'http://canvas-api.herokuapp.com/api/v1/courses'
  };

  constructor(props){
    super(props)

    this.state = {
      data: []
    }
  }

  componentDidMount(){
    return this.fetchData(this.props.params.id)
  }

  render(){
    let dateFormat = "MMMM Do YYYY, h:mm a"

    return (
      <div>
        <div className='top-nav'>
          <Link to="/" className="btn"><i className="fa fa-arrow-left"></i> Back to Course List</Link>
        </div>
        <div className='course'>
          <h1>{this.state.data.name} - {this.state.data.code}</h1>
          <h2><strong>Starts at</strong>: {this.state.data.start_at ? moment(this.state.data.start_at).format('MMMM Do YYYY, h:mm a') : 'Not specified'} - <strong>Ends at</strong>: {this.state.data.end_at ? moment(this.state.data.end_at).format('MMMM Do YYYY, h:mm a') : 'Not specified'}</h2>
          <p>{this.state.data.description}</p>
          <div><strong>Created on</strong>: {this.state.data.created_at ? moment(this.state.data.created_at).format('MMMM Do YYYY, h:mm a') : 'Not specified'}</div>
        </div>
      </div>
    )
  }

  fetchData(id) {
    Auth.getToken((token) => {
      let options = {
        url: `${this.props.url}/${id}`,
        headers: { 'Authorization': token }
      }

      request.get(options, (err, response, body) => {
        return (
          this.setState({
            data: JSON.parse(body)
          })
        )
      })
    })
  }
}
