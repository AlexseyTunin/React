import { Link,Routes,Route } from "react-router-dom";
import Chats from './Chats';
import Home from './Home';
import Profile from './Profile';
import '../App.css';
import { useState } from "react";
import { AUTHOR } from '../constans/common';

const initialChats = {
    id1: {
        name: 'Работа',
        message:[{text: 'Срочно явиться к директору', author: AUTHOR.bot},
                 {text:'Хорошо', author: AUTHOR.me}]
        },
    id2: {
        name: 'Дом',
        message: [{text: 'Жду к 8, милая', author:AUTHOR.me}]
    }    
};

const Router = () => {

    const [chats, setChats] = useState(initialChats);

    const addMessages = (chatId, messages) => {
        setChats({
            ...chats,
            [chatId]: {
                name: chats[chatId].name,
                message: [...chats[chatId].message, messages]
            }
        })
    }

    return <>
             <ul className="menu">
                <li className="list">
                    <Link to = '/'>Home</Link>
                </li>
                <li className="list">
                    <Link to = '/Profile'>Profile</Link>
                </li>
                <li className="list">
                    <Link to = '/Chats'>Chats</Link>
                </li>
             </ul>

             <Routes>
                 <Route path = '/' exact element = {<Home />}/>
                 <Route path = '/Profile' element = {<Profile />}/>
                 <Route path = '/chats'>
                 <Route index element = {<Chats chats={chats} />}/>
                 <Route path = ':chatId' element = {<Chats chats={chats} addMessages = {addMessages} />}/>
                 </Route>
                 <Route path = '*' element = {<Chats chats = {chats} />}/>
             </Routes>
    
           </>
}

export default Router;