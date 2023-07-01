import {Outlet} from 'react-router-dom'
import Navbar from '../components/Nabvar/Navbar'
import Footer from '../components/Footer/Footer'

function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet ></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Layout