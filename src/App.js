import './App.css';
import {useState} from 'react';
import Form from './components/Form';
import Title from './components/Title';
import axios from 'axios'
import Results from './components/Results';

function App() {
  const [word, setWord] = useState("");
  const [photo, setPhoto] = useState([]); 
  const getPhotoData = (e) => {
    e.preventDefault();
    axios
    .get(`https://api.unsplash.com//search/photos?query=${word}&client_id=zkeq-96g5n22Nt9MTsOzr6Xamv2yqQQbj3ceOxNuxNQ`)
    .then(res => {
      setPhoto(res.data.results)
    })

  }
  return (
    <div className="App">
      <Title/>
      <Form setWord = {setWord} getPhotoData = {getPhotoData}/>
      <Results photo={photo}/>
    </div>
  );
}

export default App;
