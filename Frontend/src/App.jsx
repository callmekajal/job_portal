

import './App.css'

import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/layout/AuthLayout'
import Hero from './Feartures/website/home/pages/Hero'

function App() {


  return (
    <>
<Routes>

<Route element={<AuthLayout />}>
    <Route path='/' element={<Hero/>} />  

  </Route>
  </Routes>

      </>
  )
}

export default App
