import { FormGroup, FormControlLabel, SvgComponent, SwitchBomba, SwitchValvBomba, SwitchValvDreno } from './waterplant-components';
//import { database, ref, onValue } from "../firebase";
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

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

    /*useEffect(() => {
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
    });*/

    return (
        <MainCard>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} xl={5}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <FormGroup>
                                <FormControlLabel
                                    control={<SwitchBomba bombaOn={bombaOn} eletrovalAberta={eletroValSubOn} ip={espIp} />}
                                    label="Bomba"
                                />
                                <FormControlLabel
                                    control={<SwitchValvBomba aberta={eletroValSubOn} bombaOn={bombaOn} ip={espIp} />}
                                    label="Eletroválvula de subida"
                                />
                                <FormControlLabel
                                    control={<SwitchValvDreno aberta={eletroValDesOn} ip={espIp} />}
                                    label="Eletroválvula de descida"
                                />
                            </FormGroup>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} xl={7}>
                    {/*<FormDialog espIp={espIp} /> ---> CONFIGURACOES*/}

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
