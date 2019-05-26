import React, { Component } from 'react';
import './css/style.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      videos: this.data.videos
    }
  }

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
      return data
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
        {this.state.videos.map(image => <img src={image.profileImage} alt="" />)}
      </div>
    )
  }
}

export default App;
