import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

interface IProps {}

const App = (props: IProps) => {
  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4"></div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  )
}

export default App
