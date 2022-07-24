import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { axios } from './AxiosRequest';

function App() {

  const [userData, setUserData] = useState(null)

  const getUsers = async () => {
    const data = await axios.get('/users')
    console.log(data)
    const t = document.cookie;
    console.log(t)
  }

  const login = async () => {
    try {
      const { data } = await axios.post('/auth', { email: 'ejones@yahoo.com', password: '111111' })
      localStorage.setItem('data', 'logged in')
      setUserData(data)
    } catch (error) {
      setUserData(null)
      localStorage.removeItem('data')
    }

  }

  const logout = () => {
    localStorage.removeItem('data')
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      {localStorage.getItem('data') ?
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <button onClick={() => login()}>Enter</button>
            <button onClick={() => logout()}>Logout</button>

          </header>
        </div>

        :

        <div className="App">
          <h1>Not Authenticated</h1>
          <button onClick={() => login()}>Enter</button>
        </div>
      }
    </>

  );
}

export default App;
