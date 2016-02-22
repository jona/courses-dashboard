'use strict'

import request from 'request'

const Authentication = {
  url: "http://canvas-api.herokuapp.com/api/v1/tokens",

  getToken(cb){
    let token = localStorage.getItem('token')

    if(token === null){
      request.post(this.url, (err, response, body) => {
        token = JSON.parse(body).token
        localStorage.setItem('token', token)
        return cb(token)
      })
    } else {
      return cb(token)
    }
  }
}

module.exports = Authentication
