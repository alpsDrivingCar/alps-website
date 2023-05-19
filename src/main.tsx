import ReactDOM from 'react-dom/client'

import { createBrowserRouter ,RouterProvider  } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/main.scss'

import store from './store/index.ts'
import { Provider } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Root from './routes/root.tsx';
import Home from './routes/home.tsx';
import ErrorPage from './routes/ErrorPage.tsx';

library.add(fas);

const routes = createBrowserRouter([{
  path:'/',
  element: <Root/> ,
  errorElement: <ErrorPage/>,
  children:[
    {
      index:true,
      element: <Home/>

    }
  ]
}])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={routes} />

  </Provider>
)
