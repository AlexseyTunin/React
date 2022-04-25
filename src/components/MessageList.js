import { useParams } from "react-router-dom";

const MessagesList = ({chats}) => {
    let {chatId} = useParams();

    if(!chats[chatId]) return null;

    const messages = chats[chatId].message;
    

    return (
      <div>
            <h4>Messeges</h4>
            {messages.map((el,index) => (
                <div key={index}>
                    <div>{el.text}</div>
                    <div>{el.author}</div>
                </div>
            ))}
      </div>
    )
}

export default MessagesList;