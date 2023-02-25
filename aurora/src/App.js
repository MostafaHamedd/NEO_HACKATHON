import Header from "./jsx/components/Header.component";
import MainPage from "./jsx/pages/Main.page";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import { URL_ROUTES } from "./jsx/URL_ROUTES.routes"
import SchedulePage from "./jsx/pages/Schedule.page"

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path={URL_ROUTES.HOME_PAGE} element={<MainPage />} />
          <Route exact path={URL_ROUTES.SCHEDULE_PAGE} element={<SchedulePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;