import React from 'react';
import { Link } from "react-router-dom";

const Home = ({ videos }) => (
  <div className="videos">
    {videos.map(data => (
      <Link to="/details/" key={data.id}>
        <img src={data.thumbImage} alt="" key={data.id} />
      </Link>
    ))};
  </div>
)

export default Home;