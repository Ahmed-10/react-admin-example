import React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
// import jsonServerProvider from 'ra-data-json-server';
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostShow from './components/PostShow';
import dashboard from './components/dashboard';

function App() {
  return (
    <Admin dataProvider={simpleRestProvider('http://localhost:3000')} dashboard={dashboard}> 
      <Resource name='posts' list={PostList} create={PostCreate}  show={PostShow}/>
    </Admin>
  );
}

export default App;
