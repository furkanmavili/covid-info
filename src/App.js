import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/HomePage";
import Stats from "./pages/StatsPage";
import axios from "axios";
import CountryPage from "./pages/CountryPage";
import Footer from "./components/Footer";
import { Flex } from "@chakra-ui/core";
import PageNotFound from "./pages/PageNotFound";

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
        <Flex direction="column" minHeight="100vh">
          <Header />
          <Switch>
            <Route path="/covid-info/stats/:countryName">
              <CountryPage />
            </Route>
            <Route exact path="/covid-info/stats">
              <Stats data={data} setData={setData} />
            </Route>
            <Route exact path="/covid-info">
              <Home data={data} />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <Footer />
        </Flex>
      </Router>
    </>
  );
}
