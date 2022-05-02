import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../store/index';
import { exampleAction } from '../store/profile/action';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Profile = () => {

    const {showName, name} = useSelector((state) => state);
    const dispatch = useDispatch();
    const[,setDummy ] = useState();

    const setShowName = useCallback(() => {
        dispatch(exampleAction);
        setDummy({});
    }, [dispatch]);

    return (
    <div>
        <h1>Profile</h1>
        <FormControlLabel
            control={
              <Checkbox checked={showName} onChange={setShowName} name="user" />
            }
            label="User"
        />
        <blockquote>{showName && <h3>{name}</h3>}</blockquote>
        </div>
    )
}

export default Profile;