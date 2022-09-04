import { FormGroup, FormControlLabel, SvgComponent, SwitchBomba, SwitchValvBomba, SwitchValvDreno } from './waterplant-components';
import { database, ref, onValue } from '../../../firebase.js';
import { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Grid, Menu, MenuItem, Typography } from '@mui/material';
import Leituras from './Leituras';

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

const BlueCardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&>div': {
        position: 'relative',
        zIndex: 5
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        borderRadius: '50%',
        zIndex: 1,
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
        zIndex: 1,
        width: 210,
        height: 210,
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

export default function WaterPlant() {
    // Ip da esp32
    const [espIp, setEspIp] = useState('');

    // Estados de controle
    const [bombaOn, setBombaOn] = useState('');
    const [eletroValSubOn, setEletroValSubOn] = useState('');
    const [eletroValDesOn, setEletroValDesOn] = useState('');

    // Estados de leitura
    const [vazaoSubida, setVazaoSubida] = useState(Number);
    const [vazaoDescida, setVazaoDescida] = useState(Number);
    const [nivelAproxCisterna, setNivelAproxCisterna] = useState(Number);
    const [nivelAproxPoco, setNivelAproxPoco] = useState(Number);
    const [sensorCisterna, setSensoresCisterna] = useState(Number);
    const [sensorPoco, setSensoresPoco] = useState(Number);

    useEffect(() => {
        const changesListener = onValue(ref(database, '/'), (snapshot) => {
            setEspIp(snapshot.child('espIp').val().toString());

            setBombaOn(snapshot.child('bomba').val().toString());
            setEletroValSubOn(snapshot.child('EVbomba').val().toString());
            setEletroValDesOn(snapshot.child('EVdreno').val().toString());

            setVazaoSubida(snapshot.child('vazaoSub').val());
            setVazaoDescida(snapshot.child('vazaoDes').val());
            setSensoresCisterna(snapshot.child('sensorCisterna').val());
            setSensoresPoco(snapshot.child('sensorPoco').val());
            setNivelAproxCisterna(snapshot.child('nivelAproxPoco').val());
            setNivelAproxPoco(snapshot.child('nivelAproxCisterna').val());
        });
    });

    return (
        <MainCard>
            <Grid container spacing={gridSpacing} alignItems="center">
                <Grid item xs={12} xl={5}>
                    <Grid container direction="column" justifyContent="space-evenly" alignItems="stretch">
                        <Grid item sx={{ mb: 3 }}>
                            <BlueCardWrapper border={false} content={false}>
                                <Box sx={{ p: 2.25 }}>
                                    <Leituras />
                                </Box>
                            </BlueCardWrapper>
                        </Grid>
                        <Grid item>
                            <CardWrapper border={false} content={false}>
                                <Box sx={{ p: 2.25 }}>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<SwitchBomba bombaOn={bombaOn} eletrovalAberta={eletroValSubOn} ip={espIp} />}
                                            label={
                                                <Typography variant="h3" color="white">
                                                    Bomba
                                                </Typography>
                                            }
                                            sx={{ m: 1 }}
                                        />
                                        <FormControlLabel
                                            control={<SwitchValvBomba aberta={eletroValSubOn} bombaOn={bombaOn} ip={espIp} />}
                                            label={
                                                <Typography variant="h3" color="white">
                                                    Eletroválvula de subida
                                                </Typography>
                                            }
                                            sx={{ m: 1 }}
                                        />
                                        <FormControlLabel
                                            control={<SwitchValvDreno aberta={eletroValDesOn} ip={espIp} />}
                                            label={
                                                <Typography variant="h3" color="white">
                                                    Eletroválvula de descida
                                                </Typography>
                                            }
                                            sx={{ m: 1 }}
                                        />
                                    </FormGroup>
                                </Box>
                            </CardWrapper>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} xl={7}>
                    <SvgComponent
                        bomba={bombaOn}
                        eletroval_sub={eletroValSubOn}
                        eletroval_des={eletroValDesOn}
                        vazao_sub={vazaoSubida}
                        vazao_des={vazaoDescida}
                        sensor_cisterna={sensorCisterna}
                        sensor_poco={sensorPoco}
                        nivel_cisterna={nivelAproxCisterna}
                        nivel_poco={nivelAproxPoco}
                        ip={espIp}
                    />
                </Grid>
            </Grid>
        </MainCard>
    );
}
