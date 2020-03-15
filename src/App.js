import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from "styled-components/macro";
import EventSlide from "./templates/EventSlide";
import { useThemeColours } from "./stphils-ds/colour";

export default function App() {
  return (
    <Router>
        <nav css={`
            padding: 18px;
            background-color: ${useThemeColours('blue').dark.background};
            a {
                color: white;
            }
        `}>
            <Link to="/template/event-slides">Event Slides</Link>
        </nav>
        <Switch>
            <Route path="/template/event-slides">
                <EventSlide />
            </Route>
        </Switch>
    </Router>
  );
}