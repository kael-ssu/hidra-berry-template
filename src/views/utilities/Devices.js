import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

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
            <Box sx={{ color: 'inherit' }}>{name}</Box>
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
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <DeviceBox name="0" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <DeviceBox name="1" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <DeviceBox name="2" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <DeviceBox name="3" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <DeviceBox name="4" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <DeviceBox name="5" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <DeviceBox name="6" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <DeviceBox name="7" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <DeviceBox name="8" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <DeviceBox name="9" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <DeviceBox name="10" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <DeviceBox name="11" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <DeviceBox name="12" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </MainCard>
);

export default DevicesExhibition;
