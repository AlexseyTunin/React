import { Link, useParams } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Chats from "../pages/Chats";


const ChatList = ({ chats }) => {

   // let { chatId } = useParams();
   return <div> <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Chat List
          </Typography>
          <List>
            {Object.keys(chats).map((chat,index) => (
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
              <ListItemText primary= {chats[chat].name} />
            </ListItem>
            </Link>
            ))}
            </List>
              </div>
}
              
export default ChatList;