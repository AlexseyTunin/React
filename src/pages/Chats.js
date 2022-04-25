import MessagesList from "../components/MessageList";
import ChatList from "../components/ChatList";
import ControlPanel from "../components/ControlPanel"



const Chats = ({chats, addMessages}) => {

    return (
            <div className="wrapper">
                <ChatList chats ={chats} />
                <div className="messengerPlace">
                <MessagesList chats = {chats} />
                <ControlPanel addMessages = {addMessages} />
                </div>
           </div>
           )
}

export default Chats;

