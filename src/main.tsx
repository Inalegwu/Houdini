import React from 'react'
import ReactDOM from 'react-dom/client'
import { Client, Provider, cacheExchange, fetchExchange } from "urql"
import App from './App.tsx'

const client=new Client({
  url:"http://localhost:3000/graphql",
  exchanges:[cacheExchange,fetchExchange]
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
)
