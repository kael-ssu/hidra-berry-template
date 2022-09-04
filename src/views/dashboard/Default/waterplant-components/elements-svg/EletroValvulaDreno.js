import Switch from '@mui/material/Switch';

function EletroValvulaDreno(props) {
    const handleClick = () => {
        if (props.aberta == 'true') fetch(`http://${props.ip}/update?output=25&state=0`);
        else fetch(`http://${props.ip}/update?output=25&state=1`);
    };

    return (
        <svg onClick={handleClick} fill={props.aberta == 'true' ? '#00FF21' : 'red'} {...props}>
            <g stroke="#000">
                <path d="M330.4844 331.89006H345.06278V356.18715000000003H330.4844z" />
                <path fill="#666" d="M317.72829 326.42323H330.48437V361.0469H317.72829z" />
            </g>
        </svg>
    );
}

function SwitchValvDreno(props) {
    const handleChange = () => {
        if (props.aberta == 'true') fetch(`http://${props.ip}/update?output=25&state=0`);
        else fetch(`http://${props.ip}/update?output=25&state=1`);
    };

    return <Switch checked={props.aberta == 'true'} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />;
}

export { EletroValvulaDreno, SwitchValvDreno };
