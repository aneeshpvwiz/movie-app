import React from "react";
import { Store } from "./store";
import HomePage from "./HomePage";
import FavPage from "./FavPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <Router>
        <header className="header">
          <div>
            <h1>Pick up your favourite shows</h1>
          </div>

          <div>
            <Link to="/">Home</Link>
            <Link to="/favs">Favourites:{state.favourites.length}</Link>
          </div>
        </header>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/favs" component={FavPage}></Route>
      </Router>
    </React.Fragment>
  );
}
