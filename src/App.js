import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Home'
import Video from './Video'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      detailsUrl: [],
      videoPlayer: ''
    }
  }

  fetchList = async () => {
    const url = "https://pt.protoawe.com/api/video-promotion/v1/client/list?psid=zkygge&pstool=421_1&campaign_id=110795&accessKey=8345cd885505b6e7bcfb634eb402ff86&ms_notrack=1&campaign=110795&type=&sexualOrientation=straight&forcedPerformers=&limit=24&primaryColor=%238AC437&labelColor=%23212121";

    const options = {
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    };

    try {
      const response = await fetch(url, options);
      const { data } = await response.json();
      console.log(data)
      this.setState(() => ({
        videos: data.videos,
        detailsUrl: data.videos.map(url => url.detailsUrl),
      }));
    } catch (error) {
      console.log(error);
    }
  }

  fetchDetails = async () => {
    const detailsCall = this.state.detailsUrl[0];

    const options = {
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    };

    try {
      const response = await fetch(detailsCall, options);
      const { detailsData } = await response.json();
      console.log(detailsData)
      // this.setState(() => ({
      //   videoPlayer: detailsData.map(url => url.playerEmbedUrl)
      // }));
    } catch (error) {
      
    }
  }

  componentDidMount() {
    this.fetchList()
    this.fetchDetails()
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
          <div className="content">
            <h1>Swipeturbate</h1>
            <p>Just Porn Videos - No Bullshit</p>
            <Switch>
              <Route exact path="/" render={() => <Home {...this.state} />} />
              <Route exact path="/details/" render={() => <Video {...this.state} {...this.actions} />} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
