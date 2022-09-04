import Switch from '@mui/material/Switch';
import { useState } from 'react';

function Bomba(props) {
    const handleClick = () => {
        if (props.ligada == 'false' && props.eletroval_aberta == 'true') fetch(`http://${props.ip}/update?output=33&state=1`);
        else if (props.ligada == 'true') fetch(`http://${props.ip}/update?output=33&state=0`);
        else window.alert('Abra a válvula antes de ligar a bomba');
    };

    return (
        <svg onClick={handleClick} fill={props.ligada == 'true' ? '#00FF21' : 'red'} {...props}>
            <path stroke="#000" d="M503.93178 698.16114H542.44996V728.91123H503.93178z" />
            <text
                stroke="#000"
                transform="matrix(.41509 0 0 .31445 231.771 252.206)"
                xmlSpace="preserve"
                textAnchor="start"
                fontSize={24}
                strokeWidth={0}
                y={1493.86471}
                x={663.05569}
                fill="#000"
            >
                {'Bomba'}
            </text>
        </svg>
    );
}

function SwitchBomba(props) {
    const [ligada, setLigada] = useState('');

    const handleChange = (event) => {
        if (props.bombaOn == 'false' && props.eletrovalAberta == 'true') {
            fetch(`http://${props.ip}/update?output=33&state=1`);
            setLigada('true');
        } else if (props.bombaOn == 'true') {
            fetch(`http://${props.ip}/update?output=33&state=0`);
            setLigada('false');
        } else window.alert('Abra a válvula antes de ligar a bomba');
    };

    return (
        <Switch
            checked={(props.bombaOn == 'true' && ligada != 'false') || ligada == 'true'}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
}

export { Bomba, SwitchBomba };
