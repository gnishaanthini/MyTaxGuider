import styled from 'styled-components'

const Wrapper=styled.main`
  .chat-window {
   width: 50%;
   height: 100%;
   position:relative
   padding-top: 50px;
   padding-right: 30px;
   padding-bottom: 50px;
   padding-left: 80px;
   margin:auto
  }
  
  
  .chat-window p {
    margin: 10%;
  }
  .chat-window .chat-header {
    height: 45px;
    border-radius: 6px;
    background: #263238;
    position: relative;
    cursor: pointer;
  }
  .chat-window .chat-header p {
    display: block;
    padding: 0 1em 0 2em;
    color: #fff;
    line-height: 45px;
  }
  
  .chat-window .chat-body {
    height: calc(450px - (45px + 70px));
    border: 1px solid #263238;
    background: #fff;
  
    position: relative;
  }
  .chat-window .chat-body .message-container {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  
  .chat-window .chat-body .message-container::-webkit-scrollbar {
    display: none;
  }
  .chat-window .chat-body .message {
    height: auto;
    padding: 10px;
    display: flex;
  }
  
  .chat-window .chat-body .message .message-content {
    width: auto;
    height: auto;
    min-height: 40px;
    max-width: 120px;
    background-color: #43a047;
    border-radius: 5px;
    color: white;
    display: flex;
    align-items: center;
    margin-right: 5px;
    margin-left: 5px;
    padding-right: 5px;
    padding-left: 5px;
    overflow-wrap: break-word;
    word-break: break-word;
  }
  
  #you {
    justify-content: flex-start;
  }
  
  #you .message-content {
    justify-content: flex-start;
  }
  
  #you .message-meta {
    justify-content: flex-start;
    margin-left: 5px;
  }
  
  #other {
    justify-content: flex-end;
  }
  
  #other .message-content {
    justify-content: flex-end;
    background-color: cornflowerblue;
  }
  
  #other .message-meta {
    justify-content: flex-end;
    margin-right: 5px;
  }
  
  .message-meta #author {
    margin-left: 10px;
    font-weight: bold;
  }
  
  .chat-window .chat-body .message .message-meta {
    display: flex;
    font-size: 12px;
  }
  
  .chat-window .chat-footer {
    height: 40px;
    border: 1px solid #263238;
    border-top: none;
    display: flex;
  }
  
  .chat-window .chat-footer input {
    height: 100%;
    flex: 85%;
    border: 0;
    padding: 0 0.7em;
    font-size: 1em;
    border-right: 1px dotted #607d8b;
  
    outline: none;
    font-family: "Open Sans", sans-serif;
  }
  
  .chat-window .chat-footer button {
    border: 0;
    display: grid;
    place-items: center;
    cursor: pointer;
    flex: 15%;
    height: 100%;
    background: transparent;
    outline: none;
    font-size: 25px;
    color: lightgray;
  }
  
  .chat-window .chat-footer button:hover {
    color: #43a047;
  }
  
`

export default Wrapper