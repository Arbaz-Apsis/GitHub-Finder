import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import User from './Pages/User'
import NotFound from './Pages/NotFound'
import Navbar from './Component/Layout/Navbar'
import Footer from './Component/Layout/Footer'
import Alert from './Component/Layout/Alert'
import { GithubProvider } from './Component/context/github/GithubContext'
import { AlertProvider } from './Component/context/alert/AlertContext'


export default function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
            <div className="flex flex-col justify-between h-screen text-white">

              <Navbar />
              <main className='container mx-auto px-3 pb-12'>
                <Alert/>
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/user/:login' element={<User/>}/>
                  <Route path='/notfound' element={<NotFound/>}/>
                  <Route path='/*' element={<NotFound/>}/>
                </Routes>
              </main> 
              <Footer/>
            </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}

 // started from 63
 // practiced till 62 and watched till 63     
