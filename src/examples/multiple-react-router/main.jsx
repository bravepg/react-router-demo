import { useState, useLayoutEffect } from 'react';
import {
  createHashHistory,
  createMemoryHistory,
  createBrowserHistory,
} from 'history';
import * as ReactDOM from 'react-dom/client';
import { useRoutes, Router } from 'react-router-dom';
import Root from './routes/root';
import Demo1 from './routes/demo1';
import Demo2 from './routes/demo2';

import './index.css';

function createHistory(opts) {
  let h;
  if (opts.type === 'hash') {
    h = createHashHistory();
  } else if (opts.type === 'memory') {
    h = createMemoryHistory(opts);
  } else {
    h = createBrowserHistory();
  }

  return h;
}

const history = createHistory({
  type: 'browser',
  basename: '/',
});

export function Routes1() {
  return useRoutes([
    {
      path: '*',
      element: <Root />,
    },
  ]);
}

export function Routes2() {
  return useRoutes([
    {
      path: 'demo1',
      element: <Demo1 />,
    },
    { path: 'demo2', element: <Demo2 /> },
  ]);
}

function App2() {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    return history.listen(aa => {
      console.log('useLayoutEffect history.listen', aa);
      setState(aa);
    });
  }, []);
  return (
    <Router navigator={history} location={state.location} basename={'/'}>
      <Routes2 />
    </Router>
  );
}

function App() {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    return history.listen(aa => {
      console.log('useLayoutEffect history.listen', aa);
      setState(aa);
    });
  }, []);

  return (
    <Router navigator={history} location={state.location} basename={'/'}>
      <Routes1 />
      <App2 />
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <RouterProvider router={router} />,
  <>
    <App />
  </>,
  // </React.StrictMode>,
);
