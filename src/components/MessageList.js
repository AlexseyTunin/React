import { useParams } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AndroidIcon from '@mui/icons-material/Android';
import { AUTHOR } from '../constans/common';
import { useSelector } from 'react-redux';

const MessagesList = ({chats}) => {
    let {chatId} = useParams();
    const { name } = useSelector((state) => state.profile);

    if(!chats[chatId]) return null;

    const messages = chats[chatId].message;
    
    const isAuthorBot = (author) => {
        return author === AUTHOR.bot;
    }

    return (
        <>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {messages.map((el,index) => (
                <div key={index}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp">
                                {isAuthorBot(el.author) ?<AndroidIcon/>:<AccountCircleIcon/>}
                            </Avatar>
                        </ListItemAvatar>
                    <ListItemText
                        primary={isAuthorBot(el.author) ? AUTHOR.bot : name}
                        secondary={
                <>
                     <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {el.text}
                     </Typography> 
                </>
            }
        />
      </ListItem>
            <Divider variant="inset" component="li" />
                </div>
            ))}

      </List></>
    )
}

export default MessagesList;