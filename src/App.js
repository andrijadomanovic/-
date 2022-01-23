import { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import { Home } from './screens/Home/Home';
import SeriesCard from './screens/SeriesInfo/SeriesCard';
import ShowSeason from './screens/ShowSeason/ShowSeason';



class App extends Component{
  constructor(props){
    super(props);
    this.state={
      name: 'Good start to you',
      
    }
  }
 

  render(){

    return (
      <Router>
           <div className="App">
        <Navigation />
              {/* <h1>{this.state.name}</h1> */}
          <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/series' element={<SeriesCard />} />
              <Route path='/series/seasons' element={<ShowSeason />}/> 
          </Routes>

      </div>
      </Router>
    );
   
    }
}

export default App;
