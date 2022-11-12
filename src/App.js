import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from './components/FeedbackList'
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import Post from './components/Post'

function App() {
  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className='container'>
          <Routes>
            <Route path="/" element={
              <>
              <FeedbackForm />
              <FeedbackStats  />
              <FeedbackList />
              </>
            }> 
            </Route>
          
            <Route element={<AboutPage />} path="/about" />
            <Route element={<Post />} path="/post/*" />
          </Routes>

          <AboutIconLink />
      </div>
      
    </Router>
    </FeedbackProvider>
  )
}

export default App
