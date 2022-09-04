import Switch from '@mui/material/Switch';
import { useState } from 'react';

function EletroValvulaBomba(props) {
    const handleClick = () => {
        if (props.aberta == 'true' && props.bomba == 'false') fetch(`http://${props.ip}/update?output=26&state=0`);
        else if (props.aberta == 'false') fetch(`http://${props.ip}/update?output=26&state=1`);
        else window.alert('Desligue a bomba antes de fechar a válvula');
    };

    return (
        <svg onClick={handleClick} fill={props.aberta == 'true' ? '#00FF21' : 'red'} {...props}>
            <g stroke="#000">
                <path d="M594.105 375.62435H608.68338V399.92144H594.105z" />
                <path fill="#666" d="M581.3489 370.15752H594.10498V404.78119H581.3489z" />
            </g>
        </svg>
    );
}

function SwitchValvBomba(props) {
    const [aberta, setAberta] = useState('');

    const handleChange = () => {
        if (props.aberta == 'true' && props.bombaOn == 'false') {
            fetch(`http://${props.ip}/update?output=26&state=0`);
            setAberta('false');
        } else if (props.aberta == 'false') {
            fetch(`http://${props.ip}/update?output=26&state=1`);
            setAberta('true');
        } else window.alert('Desligue a bomba antes de fechar a válvula');
    };

    return (
        <Switch
            checked={(props.aberta == 'true' && aberta != 'false') || aberta == 'true'}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
}

export { EletroValvulaBomba, SwitchValvBomba };
