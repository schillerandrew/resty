import { useState } from 'react';
import axios from 'axios';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';

const App = () => {

  const [results, setResults] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const callAPI = async (requestParams) => {

    let response = await axios.get(requestParams.url);
    setResults(response.data.results);
    setRequestParams(requestParams);
    
  }

    return (
      <>
        <Header />
        <div><b>Request Method:</b> {requestParams.method}</div>
        <div><b>URL:</b> {requestParams.url}</div>
        <Form handleAPICall={callAPI} />
        <Results results={results} />
        <History />
        <Footer />
      </>
    );
};

export default App;
