import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import CreateDeck from "./Decks/CreateDeck";
import Deck from "./Decks/Deck";
import Study from "./Study";
import EditDeck from "./Decks/EditDeck";
import AddCard from "./Decks/AddCard";
import EditCard from "./Decks/EditCard";
import NotFound from "./NotFound";

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId" exact>
            <Deck />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
