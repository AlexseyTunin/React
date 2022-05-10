import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { exampleAction } from '../store/profile/action';
import { TextField } from '@mui/material';
import { updateName } from '../store/profile/action';

const Profile = () => {

    const {showName, name} = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const[,setDummy ] = useState();
    const [value, setValue] = useState(name);

    const setShowName = useCallback(() => {
        dispatch(exampleAction);
        setDummy({});
    }, [dispatch]);

    const handleInput = (e) => {
        setValue(e.target.value);
    }

    const saveName = () => {
        dispatch(updateName(value));
    }

    return (
    <div>
        <h1>Profile</h1>
        <button onClick={setShowName}>Show Name</button>
        <blockquote>{showName && <h3>Текущее имя {name}</h3>}</blockquote>
        <TextField
            name = "name"
            label = "name"
            placeholder="Введите Ваше имя"
            value = {value}
            onChange = {handleInput} />
            <button onClick={saveName}>Сохранить</button>
        </div>
        
    )
}

export default Profile;