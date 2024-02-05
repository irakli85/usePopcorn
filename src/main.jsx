import React from 'react'
import ReactDOM from 'react-dom/client'
import StarRating from './StarRating'
// import App from './App.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/> */}
    <StarRating maxRating={12} defaultRating={6}/>
    <StarRating maxRating={5} color='red' size={24} messages={['Terrible', 'bad', 'okay', 'good', 'amazing']} defaultRating={3}/>
  </React.StrictMode>,
)
