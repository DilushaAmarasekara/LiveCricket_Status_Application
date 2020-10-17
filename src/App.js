import React, { useEffect, useState} from 'react';
import './App.css';
import {Grid} from "@material-ui/core";
import Navbar from "./Components/Navbar";
import { getMatches } from "./Api/Api";
import MyCard from "./Components/MyCard";

function App() {

    const [matches,setMatches] = useState([]);

    useEffect(() => {
        getMatches()
            .then((data) => setMatches(data.matches))
            .catch();
    },[]);


  return (
    <div className="App">
          <Navbar />
        <h1><b>Welcome to my Live Status Platform</b></h1>
           <Grid container>
             <Grid xs={2}></Grid>
             <Grid xs={8}>
                 {
                     matches.map((match) => (
                         <MyCard match={match} />))
                 }
             </Grid>
         </Grid>
    </div>
  );
}

export default App;
