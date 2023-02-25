import Header from "./jsx/components/Header.component";
import MainPage from "./jsx/pages/Main.page";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          {/* <Route path={"/"} element={<HomePage />} /> */}
        </Routes>
      </Router>

      <MainPage />
    </div>
  );
}

export default App;