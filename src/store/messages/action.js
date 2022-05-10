export const ADD_MESSAGE = 'MESSAGES :: ADD_MESSAGE';

export const addMessage = (chatId, messages) => ({
    type: ADD_MESSAGE,
    payload: { chatId, messages }
});