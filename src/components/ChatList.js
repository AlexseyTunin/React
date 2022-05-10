import { Link, useParams } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { Dialog, Button, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import { addChats } from "../store/chats/action";

const ChatList = () => {
   const chats = useSelector(state => state.chats.chatList);
   const [visible,setVisible] = useState(false);
   const [chatName, setChatName] = useState('');
   const dispatch = useDispatch();

   const handleClose = () => {
     setVisible(false);
   }

   const handleChatName = (e) => {
     setChatName(e.target.value);
   }

   const handleAdd = () => {
     setVisible(true);
   }

   const handleSave = () => {
     dispatch(addChats(chatName));
     handleClose();
     /*setChatName('');*/
   }
   
   return <div> 
          <List>
            {chats?.length > 0 ? chats.map((chat,index) => (
              <Link to ={`/chats/${chat}`} key={index}>
              <ListItem
              key = {index}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>
              <ListItemText primary= {chat.name} />
            </ListItem>
            </Link>
            )) : (
              <div>Chats, not found</div>
            ) }
            </List>
            <Button onClick={handleAdd}>Add chat</Button>
            <Dialog open = {visible} onClose = {handleClose}>
              <DialogTitle>Please enter a name for a new chat</DialogTitle>
              <TextField
                placeholder="chat Name"
                value={chatName}
                onChange = {handleChatName}
              />
              <Button onClick={handleSave}>Save chat</Button>
            </Dialog>
              </div>
}
              
export default ChatList;