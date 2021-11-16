import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import axios from "axios";
import Country from "./pages/Country";
import Footer from "./components/Footer";
import { Container } from "@chakra-ui/react";
import NotFound from "./pages/NotFound";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Router>
        <Container>
          <Header />
          <Switch>
            <Route path="/covid-info/stats/:countryName">
              <Country />
            </Route>
            <Route exact path="/covid-info/stats">
              <Stats data={data} setData={setData} />
            </Route>
            <Route exact path="/covid-info">
              <Home data={data} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Container>
      </Router>
    </>
  );
}
