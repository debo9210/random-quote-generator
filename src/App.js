import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from './component/MainPage';
import Footer from './component/Footer';
import QuoteList from './component/QuoteList';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' component={MainPage} exact/>
        <Route path="/quoteList/:authorName" component={QuoteList} exact />
        <Footer />
    </div>
    </Router>
  );
}

export default App;
