import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

const serverUrl = 'http://localhost:8000';

function App() {
  const [data, setData] = useState([])
  const socket = io(serverUrl);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/`)

      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleTitleClick = (item) => {
    socket.emit('title_click', item.id);
    alert("Message broadcasted check the console")
  }

  socket.on('receive_title_click', (data) => {
    console.log('clicked title no.', data);
  })

  return (
    <div className="App">

      <div className='container'>
        {
          data.map((item, index) => (
            <div key={index} className='title' onClick={() => handleTitleClick(item)}>
              <span>{item.id}</span>
              <span>{item.title}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
