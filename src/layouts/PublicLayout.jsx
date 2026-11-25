import { Outlet } from 'react-router'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import ThemeSwap from '../components/ThemeSwap'


const PublicLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        <Navbar/>

        <main className='flex-1'>
          <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default PublicLayout