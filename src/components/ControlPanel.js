import { TextField } from "@mui/material";
import { Fab } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect, useRef } from "react";
import { AUTHOR } from "../constans/common";
import { useParams } from "react-router-dom";
import { useTheme } from "@emotion/react";


const ControlPanel = ({addMessages}) => {

  let {chatId} = useParams();
  const [value, setValue] = useState('');
  const theme =useTheme();
  const inputRef = useRef();

  const handleInput = (event) => {
    setValue(event.target.value);
    };

  const handleClick = () => {
        if(value !== '') {
          const newMessages = {text: value, author:AUTHOR.me }
          addMessages(chatId, newMessages);
          setValue('');
          inputRef.current.focus();
        }
      } 
      
   /*useEffect (() => {
        let timerId;
        if(messageList.length > 0 && messageList[messageList.length - 1].author !==AUTHOR.bot) {
          timerId = setInterval(() => {
            setMessageList([...messageList, newMessage]);
           }, 1500)
           const newMessage = {text: 'Привет друг', author: AUTHOR.bot}
          }
    
          return () => {
            if(timerId) {
              clearInterval(timerId);
            }
          }
        }
      ,[messageList]);*/

    return (
        <div className='box'>
        <div className='app-input'>
            <TextField
            inputRef={inputRef} 
            autoFocus = {true}
            className='input' 
            placeholder={'Введите сообщение'}
            value = {value}
            onChange = {handleInput} />
        <Fab 
        className="app-button"
         style={ {
           backgroundColor: theme.palette.primary.main
         }}
        color="primary" aria-label="add" onClick={handleClick}>
        <SendIcon />
        </Fab>
        </div>
        </div>
    )
    }

export default ControlPanel;