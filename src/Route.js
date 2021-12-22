import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Layout
import Main from "./components/pages/layout/Main";
//

// Pages
import Home from "./components/pages/home/Home";

export default () => {

  return (
    <Router>
      <Main>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </Main>
    </Router>
  )

}