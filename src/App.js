import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import axios from "axios";
import Country from "./pages/Country";
import Footer from "./components/Footer";
import { VStack, Container } from "@chakra-ui/react";
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
        <VStack w="100%" minH="100vh">
          <Header />
          <Container maxW="container.lg">
            <Switch>
              <Route path="/stats/:countryName">
                <Country />
              </Route>
              <Route exact path="/stats">
                <Stats data={data} setData={setData} />
              </Route>
              <Route exact path="/">
                <Home data={data} />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Container>
          <Footer />
        </VStack>
      </Router>
    </>
  );
}
