import React from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Dashboard/>
      <Form/>
      <Header/>
    </div>
  );
}

export default App;
