import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import Species from './components/Species';
import Footer from './components/Footer';

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true); // loading indicator when fetching data

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.co/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchPlanets() {
      let res = await fetch('https://swapi.co/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }

    async function fetchSpecies() {
      let res = await fetch('https://swapi.co/api/species/?format=json');
      let data = await res.json();
      setSpecies(data.results);
      setLoading(false);
    }

    fetchPeople();
    fetchPlanets();
    fetchSpecies();
  }, []);


  return (
    <>
      <Router>
        <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ) : (
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/people'>
                <People data={people} />
              </Route>
              <Route exact path='/planets'>
                <Planets data={planets} />
              </Route>
              <Route exact path='/species'>
                <Species data={species} />
              </Route>
            </Switch>
          )}
        </Container>
      </Router>
      <Footer />
    </>
  );
}

export default App;
