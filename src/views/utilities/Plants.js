import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import planta from '../../assets/images/planta.png';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { Image } from 'react';
import PopUpDelete from 'ui-component/PopUpDelete';
import PopUpEdit from 'ui-component/PopUpEdit';

const users = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        plants: [
            {
                id: 1,
                name: 'Colégio Alceu'
            },
            {
                id: 2,
                name: 'Colégio Maria Madalena'
            }
        ],
        phone: '1-770-736-8031 x56442'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        plants: [
            {
                id: 3,
                name: 'Hospital Dom Klaus'
            }
        ],
        phone: '010-692-6593 x09125'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        plants: [
            {
                id: 4,
                name: 'Instituto Federal do RN'
            },
            {
                id: 5,
                name: 'Tribunal Federal'
            }
        ],
        phone: '1-463-123-4447'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        plants: [
            {
                id: 6,
                name: 'Base Naval'
            }
        ],
        phone: '493-170-9623 x156'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        plants: [
            {
                id: 7,
                name: 'Aeroporto Valença'
            }
        ],
        phone: '(254)954-1289'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        plants: [
            {
                id: 8,
                name: 'Shopping Midawal'
            },
            {
                id: 9,
                name: 'Padaria OitoSete'
            },
            {
                id: 10,
                name: 'Condomínio 93'
            },
            {
                id: 11,
                name: 'Igreja dos céus'
            }
        ],
        phone: '1-477-935-8478 x6430'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        plants: [
            {
                id: 12,
                name: 'Shopping Natal'
            },
            {
                id: 13,
                name: 'Escola ZéZé'
            }
        ],
        phone: '210.067.6132'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        plants: [
            {
                id: 14,
                name: 'Rodoviária central'
            },
            {
                id: 15,
                name: 'Bar dos sete'
            }
        ],
        phone: '586.493.6943 x140'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        plants: [
            {
                id: 16,
                name: 'Hospital Pulmon'
            }
        ],
        phone: '(775)976-6794 x41206'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        plants: [
            {
                id: 17,
                name: 'Shopping 12'
            },
            {
                id: 18,
                name: 'Escola LovingLa'
            }
        ],
        phone: '024-648-3804'
    }
];

// ===============================|| PLANT CARD ||=============================== //

const PlantBox = ({ name }) => (
    <Card sx={{ mb: 3, boxShadow: 4 }}>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 2.5,
                bgcolor: 'primary.light',
                color: 'grey.800'
            }}
        >
            <Grid container direction="column">
                <Grid item>
                    <Grid container direction="row" alignItems="center" justifyContent="space-between">
                        <Grid item sx={{ pl: 2 }}>
                            <Typography>{name}</Typography>
                        </Grid>
                        <Grid item>
                            <PopUpEdit />
                            <PopUpDelete />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column" alignItems="center">
                        <Grid item>
                            <img src={planta} alt="planta" height="250 px" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </Card>
);

PlantBox.propTypes = {
    name: PropTypes.string.isRequired
};

// ============================|| PLANTS EXHIBITION ||============================ //

const PlantsExhibition = () => (
    <MainCard title="Plantas Hidráulicas">
        <Grid container spacing={gridSpacing}>
            {users.map((user) => {
                return (
                    <Grid item xs={12}>
                        <SubCard title={user.username}>
                            <Grid container spacing={gridSpacing}>
                                {user.plants.map((plant) => {
                                    return (
                                        <Grid item xs={12} sm={6} md={4} lg={3}>
                                            <PlantBox name={plant.name} />
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </SubCard>
                    </Grid>
                );
            })}
        </Grid>
    </MainCard>
);

export default PlantsExhibition;
