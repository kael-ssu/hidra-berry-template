import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { Typography } from '@mui/material';
import PopUpDelete from 'ui-component/PopUpDelete';
import PopUpEdit from 'ui-component/PopUpEdit';
import { useState, useEffect } from 'react';
import { database, get, child, ref } from '../../firebase';

// ============================|| UserS EXHIBITION ||============================ //
var users = [{}];
const UsersExhibition = () => {
    const [exclude, setExclude] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        get(child(ref(database), 'users')).then((snapshot) => {
            let snap = [];
            snapshot.forEach((child) => {
                snap.push(child.val());
            });
            setUsers(snap);
        });
    }, []);

    return (
        <MainCard title="Usuários">
            <Grid container spacing={gridSpacing}>
                {users.map((user) => {
                    return (
                        <Grid item xs={12}>
                            <SubCard
                                title={user.name}
                                secondary={
                                    <>
                                        <PopUpEdit />
                                        <PopUpDelete />
                                    </>
                                }
                            >
                                <Typography>ID: {user.uid}</Typography>
                                <Typography>Nome: {user.name}</Typography>
                                <Typography>Email: {user.email}</Typography>
                                <Typography>Matrícula: {user.matricula}</Typography>
                            </SubCard>
                        </Grid>
                    );
                })}
            </Grid>
        </MainCard>
    );
};

export default UsersExhibition;
