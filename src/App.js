import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./Pages/Home"
import Library from "./Pages/Library"
import SingleGame from "./Pages/SingleGame/SingleGame"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/library" component={Library} />
        <Route path="/game/:id" component={SingleGame} />{" "}
      </Switch>
    </BrowserRouter>
  )
}

export default App
