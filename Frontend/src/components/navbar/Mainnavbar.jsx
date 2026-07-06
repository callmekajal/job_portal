import React from 'react'
import Logo from '../ui/Logo'
import Manu from '../ui/Manu'
const Mainnavbar = () => {
  return (
    <div className=' w-full h-20 py-4 px-10  border-b-3 border-gray-300 flex flex-row justify-between'><Logo/>

<Manu/>
    </div>
  )
}

export default Mainnavbar