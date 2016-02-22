'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import CourseList from './components/CourseList'
import Course from './components/Course'

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={CourseList} />
      <Route path="/courses/:id" component={Course} />
    </Router>
  ),
  document.getElementById('app')
)
