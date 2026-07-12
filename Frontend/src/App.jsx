

import './App.css'

import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/layout/AuthLayout'
import Hero from './Feartures/website/home/pages/Hero'
import Home from './Feartures/website/home/home'
import Jobs from './Feartures/website/jobs/Jobs'
import Jobdiscription from './Feartures/website/jobs/Jobdiscription'
import Companies from './Feartures/website/company/Companies'
import Blogs from './Feartures/website/Blogs'
import Contact from './Feartures/website/Contact'
import Login from './Feartures/website/auth/Login'
import Register from './Feartures/website/auth/Register'

function App() {


  return (
    <>
<Routes>

<Route element={<AuthLayout />}>
    <Route path='/' element={<Home/>} />  
    <Route path='/jobs' element={<Jobs/>} />  
    <Route path='/jobs-description' element={<Jobdiscription/>} />  
    <Route path='/companies' element={<Companies/>} />  
    <Route path='/blogs' element={<Blogs/>} /> 
    <Route path="/contact" element={<Contact />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login/>} />
  </Route>
  </Routes>

      </>
  )
}

export default App
