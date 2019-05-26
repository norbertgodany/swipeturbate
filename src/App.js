import React, { Component } from 'react';
import './css/style.css';

class App extends Component {

  fetchVideos = async () => {
    const url = "https://pt.protoawe.com/api/video-promotion/v1/client/list?psid=zkygge&pstool=421_1&campaign_id=110795&accessKey=8345cd885505b6e7bcfb634eb402ff86&ms_notrack=1&campaign=110795&type=&sexualOrientation=straight&forcedPerformers=&limit=25&primaryColor=%238AC437&labelColor=%23212121";

    const options = {
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    };

    try {
      const response = await fetch(url, options);
      const { data } = await response.json();
      const videos = data.videos;
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.fetchVideos()
  }

  render() {
    return (
      <div>
        {console.log(this.props.videos)}
      </div>
    )
  }
}

export default App;
