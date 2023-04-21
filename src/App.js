import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Greeting from './components/Greeting';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Greeting />} />,
  ),
);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
