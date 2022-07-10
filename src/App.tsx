import React from 'react';
import './App.css';
import MyComponent from './MyComponent';

interface MyObject {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  company: string;
  address: string;
  city: string;
  postalZip: string;
  region: string;
  country: string;
}

interface RowData {
  id: number;
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  col6: string;
  col7: string;
  col8: string;
  col9: string;
  col10: string;
}

function App() {
  return (
    <MyComponent />
  );
}

export default App;
