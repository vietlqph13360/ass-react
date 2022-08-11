import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'antd/dist/antd.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { Provider } from 'react-redux'
import {store} from './app/store'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
)
