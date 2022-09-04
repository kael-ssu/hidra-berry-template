import { Bomba } from './elements-svg/Bomba';
import PocoArtesiano from './elements-svg/PocoArtesiano';
import Cisterna from './elements-svg/Cisterna';
import Suportes from './elements-svg/Suportes';
import SensoresNivel from './elements-svg/SensoresNivel';
import SensFluxoBomba from './elements-svg/SensFluxoBomba';
import SensFluxoDreno from './elements-svg/SensFluxoDreno';
import DutoBomba from './elements-svg/DutoBomba';
import DutoDrenagem from './elements-svg/DutoDrenagem';
import { EletroValvulaBomba } from './elements-svg/EletroValvulaBomba';
import { EletroValvulaDreno } from './elements-svg/EletroValvulaDreno';
import SuporteSensNivel from './elements-svg/SuporteSensNivel';
import { Container } from '@mui/system';

function SvgComponent(props) {
    return (
        <Container>
            <svg viewBox="30 0 740 800" xmlns="http://www.w3.org/2000/svg" stroke="null" {...props}>
                <PocoArtesiano nivel={props.nivel_poco} />
                <Cisterna nivel={props.nivel_cisterna} />
                <DutoDrenagem vazao={props.vazao_des != 0 ? 'com fluxo' : 'sem fluxo'} />
                <DutoBomba vazao={props.vazao_sub != 0 ? 'com fluxo' : 'sem fluxo'} />
                <Bomba ligada={props.bomba} eletroval_aberta={props.eletroval_sub} ip={props.ip} />
                <EletroValvulaBomba aberta={props.eletroval_sub} bomba={props.bomba} ip={props.ip} />
                <EletroValvulaDreno aberta={props.eletroval_des} ip={props.ip} />
                <SensFluxoBomba vazao={props.vazao_sub} />
                <SensFluxoDreno vazao={props.vazao_des} />
                <SensoresNivel sensor_cisterna={props.sensor_cisterna} sensor_poco={props.sensor_poco} />
                <SuporteSensNivel />
                <Suportes />
            </svg>
        </Container>
    );
}

export default SvgComponent;
