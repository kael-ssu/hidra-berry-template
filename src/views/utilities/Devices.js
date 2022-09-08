import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid } from '@mui/material';
import PopUpDelete from 'ui-component/PopUpDelete';
import PopUpEdit from 'ui-component/PopUpEdit';
import { Typography } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

const devices = [
    {
        id: 1,
        name: 'Válvula de subida',
        phone: '1-770-736-8031 x56442'
    },
    {
        id: 2,
        name: 'Válvula de descida',
        phone: '1-770-736-8031 x56442'
    },
    {
        id: 3,
        name: 'Sensor de fluxo de subida',
        phone: '1-770-736-8031 x56442'
    },
    {
        id: 4,
        name: 'Sensor de fluxo de descida',
        phone: '1-770-736-8031 x56442'
    },
    {
        id: 5,
        name: 'Bomba',
        phone: '1-770-736-8031 x56442'
    },
    {
        id: 6,
        name: 'Sensor de nível',
        phone: '1-770-736-8031 x56442'
    }
];

// ===============================|| Device CARD ||=============================== //

const DeviceBox = ({ name }) => (
    <Card sx={{ mb: 3, boxShadow: 4 }}>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 4.5,
                bgcolor: 'primary.light',
                color: 'grey.800'
            }}
        >
            <Grid container direction="column">
                <Grid item>
                    <Grid container direction="row" alignItems="center" justifyContent="space-between">
                        <Grid item sx={{ pl: 4 }}>
                            <Typography>{name}</Typography>
                        </Grid>
                        <Grid item>
                            <PopUpEdit />
                            <PopUpDelete />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Box sx={{ color: 'inherit' }}></Box>
                </Grid>
            </Grid>
        </Box>
    </Card>
);

DeviceBox.propTypes = {
    name: PropTypes.string.isRequired
};

// ============================|| DeviceS EXHIBITION ||============================ //

const DevicesExhibition = () => (
    <MainCard title="Dispositivos">
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    {devices.map((device) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <DeviceBox name={device.name} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </Grid>
    </MainCard>
);

export default DevicesExhibition;
