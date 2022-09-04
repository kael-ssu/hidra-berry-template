import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Grid, Menu, MenuItem, Typography, Button } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark,
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: theme.palette.secondary[800],
        borderRadius: '50%',
        top: -85,
        right: -95,
        [theme.breakpoints.down('sm')]: {
            top: -105,
            right: -140
        }
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: theme.palette.secondary[800],
        borderRadius: '50%',
        top: -125,
        right: -15,
        opacity: 0.5,
        [theme.breakpoints.down('sm')]: {
            top: -155,
            right: -70
        }
    }
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const DailyUsage = ({ isLoading }) => {
    const theme = useTheme();

    const [personUsage, setPersonUsage] = useState(false);
    const handleChangeUsageType = (event, newValue) => {
        setPersonUsage(newValue);
    };

    return (
        <>
            {isLoading ? (
                <SkeletonEarningCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 2.25 }}>
                        <Grid container direction="column">
                            <Grid item>
                                <Grid container justifyContent="space-between">
                                    <Grid item>
                                        <Button
                                            disableElevation
                                            variant={personUsage ? 'contained' : 'text'}
                                            size="small"
                                            color={personUsage ? 'secondary' : 'inherit'}
                                            onClick={(e) => handleChangeUsageType(e, true)}
                                        >
                                            Por Pessoa
                                        </Button>
                                        <Button
                                            disableElevation
                                            variant={!personUsage ? 'contained' : 'text'}
                                            size="small"
                                            color={!personUsage ? 'secondary' : 'inherit'}
                                            onClick={(e) => handleChangeUsageType(e, false)}
                                        >
                                            Total
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={{ mb: 0.75 }}>
                                <Grid container alignItems="center">
                                    <Grid item xs={6}>
                                        <Grid container alignItems="center">
                                            <Grid item>
                                                {personUsage ? (
                                                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                                        0.75 litros
                                                    </Typography>
                                                ) : (
                                                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                                        6000 litros
                                                    </Typography>
                                                )}
                                            </Grid>
                                            <Grid item xs={12}>
                                                {personUsage ? (
                                                    <Typography
                                                        sx={{
                                                            fontSize: '1rem',
                                                            fontWeight: 500,
                                                            color: theme.palette.secondary[200]
                                                        }}
                                                    >
                                                        Consumo Diário por Pessoa
                                                    </Typography>
                                                ) : (
                                                    <Typography
                                                        sx={{
                                                            fontSize: '1rem',
                                                            fontWeight: 500,
                                                            color: theme.palette.secondary[200]
                                                        }}
                                                    >
                                                        Consumo Diário Total
                                                    </Typography>
                                                )}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

DailyUsage.propTypes = {
    isLoading: PropTypes.bool
};

export default DailyUsage;
