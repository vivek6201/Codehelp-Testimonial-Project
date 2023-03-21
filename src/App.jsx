import './App.css'
import Testimonials from './Components/Testimonials'

function App() {

  return (
    <div className="bg-gray-400 w-full h-screen flex justify-center items-center flex-col">
      <h1 className='font-bold text-5xl text-slate-700 -translate-y-16'>Our Testimonials</h1>
      <Testimonials/>
    </div>
  )
}

export default App
