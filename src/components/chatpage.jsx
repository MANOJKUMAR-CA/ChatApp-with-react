import React, { useContext } from "react";
import Messages from "./messages";
import Input from "./input";
import Cam from "../img/cam.png"
import Add from "../img/add.png"
import More from "../img/more.png"
import { ChatContext } from "../context/chatContext";

const Chatpage = () => {
    //need to - do if user not selected display a blank page
    const { data } = useContext(ChatContext);
    return(
        <div className="chat">
            <div className="chatInfo">
                <span>{data.user?.displayName} </span>
                <div className="chatIcons">
                    <img src={Cam} alt="" />
                    <img src={Add} alt="" />
                    <img src={More} alt="" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chatpage;