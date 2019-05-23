import React from 'react';
import './css/style.css';

const options = {
  method: 'GET',
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
}

const url = "https://pt.protoawe.com/api/video-promotion/v1/client/list?psid=zkygge&pstool=421_1&campaign_id=110795&accessKey=8345cd885505b6e7bcfb634eb402ff86&ms_notrack=1&campaign=110795&type=&sexualOrientation=straight&forcedPerformers=&limit=25&primaryColor=%238AC437&labelColor=%23212121"

const fetchVideos = async () => {
  try {
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    return data;
  } catch (error) {
    console.log(error)
  }
}

fetchVideos()

function App() {
  return (
    <div>
      <h1>Switeturbate</h1>
    </div>
  );
}

export default App;
