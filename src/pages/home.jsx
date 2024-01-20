import React from "react";
import Sidebar from "../components/sidebar";
import Chatpage from "../components/chatpage";

const Home = () => {
    return (
      <div className='home'>
        <div className="container">
          <Sidebar/>
          <Chatpage />
        </div>
      </div>
    )
  }

export default Home;