import { useState } from 'react'
import {Routes , Route} from 'react-router-dom'
import './assets/client/root.css'
import RootLayout from './layout/rootLayout'
import AdminLayout from './layout/adminLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>

      {/* CLient */}
      <Route path='/' element={<RootLayout/>}></Route>
      {/* Admin */}
      <Route path='/admin' element={<AdminLayout/>}>

      </Route>
      
     </Routes>
    </>
  )
}

export default App
