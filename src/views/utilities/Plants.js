import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ===============================|| PLANT CARD ||=============================== //

const PlantBox = ({ name }) => (
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

PlantBox.propTypes = {
    name: PropTypes.string.isRequired
};

// ============================|| PLANTS EXHIBITION ||============================ //

const PlantsExhibition = () => (
    <MainCard title="Plantas Hidráulicas">
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <SubCard title="Usuário 1">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="0" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="1" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="2" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="3" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="4" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="5" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="6" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="7" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="8" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="9" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="10" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="11" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="12" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="13" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="14" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="15" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="16" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="17" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="18" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="19" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="20" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="21" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="22" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="23" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PlantBox name="24" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default PlantsExhibition;
