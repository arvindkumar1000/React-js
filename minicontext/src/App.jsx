import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./Context/UserConterxtProvider"
// import './index.css'
import './App.css'


function App() {


  return (
    <UserContextProvider>
      <h1>React with Cahi and Context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>

  )
}

export default App
