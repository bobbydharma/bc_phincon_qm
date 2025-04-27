import './App.css'

function App() {
return (
  <nav className="bg-blue-500 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-lg font-bold">
        <a href="#" className="hover:text-blue-300">
          Brand
        </a>
      </div>
      <div className="space-x-4">
        <a href="#" className="text-white hover:text-blue-300">
          Home
        </a>
        <a href="#" className="text-white hover:text-blue-300">
          About
        </a>
        <a href="#" className="text-white hover:text-blue-300">
          Services
        </a>
        <a href="#" className="text-white hover:text-blue-300">
          Contact
        </a>
      </div>
    </div>
  </nav>
)

}

export default App
