import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { io } from "socket.io-client";
import Navbar from '../components/Navbar';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/ChatForumstyle'


function ChatForum() {
    const {
        user,
        isLoading,
        showAlert,
        displayAlert,
        registerUser,
        loginUser
    } = useAppContext();

    const socket = io("http://localhost:3000");
    const [currentMessage, setCurrentMessage] = useState(null);
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                author: user.username,
                message: currentMessage,
                time:
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    };
    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        });
    }, [socket]);

    return (
        <div>
            <Wrapper>
                <Navbar />
                <div className="chat-window">
                    <div className="chat-header">
                        <p>Ask Forum</p>
                    </div>
                    <div className="chat-body">
                        <ScrollToBottom className="message-container">
                            {messageList.map((messageContent) => {
                                return (
                                    <div
                                        className="message"
                                        id={user.username === messageContent.author ? "you" : "other"}
                                    >
                                        <div>
                                            <div className="message-content">
                                                <p>{messageContent.message}</p>
                                            </div>
                                            <div className="message-meta">
                                                <p id="time">{messageContent.time}</p>
                                                <p id="author">{messageContent.author}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </ScrollToBottom>
                    </div>
                    <div className="chat-footer">
                        <input
                            type="text"
                            value={currentMessage}
                            placeholder="message...."
                            onChange={(event) => {
                                setCurrentMessage(event.target.value);
                            }}
                            onKeyPress={(event) => {
                                event.key === "Enter" && sendMessage();
                            }}
                        />
                        <Button onClick={sendMessage}>&#9658;</Button>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default ChatForum;