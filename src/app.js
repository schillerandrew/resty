// import React from 'react';
import { useState } from 'react';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const App = () => {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const callAPI = (requestParams) => {
    // mock output
    const data = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
    setData({ data });
    setRequestParams({ requestParams });
  }

    return (
      <>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleAPICall={callAPI} />
        <Results data={data} />
        <Footer />
      </>
    );
};

export default App;
