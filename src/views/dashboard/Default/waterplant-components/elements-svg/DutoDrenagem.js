function DutoDrenagem(props) {
    return (
        <svg {...props}>
            <path stroke="#7f3f00" fill="none" strokeWidth={10} d="M414.895 501.64l-.9-54.66-91.112.912.911-162.18h30.979" />
            <path
                stroke={props.vazao == 'com fluxo' ? '#5B9BA2' : '#7f3f00'}
                fill="none"
                strokeWidth={4}
                d="M414.895 501.64l-.9-54.66-91.112.912.911-162.18h30.979"
            />
        </svg>
    );
}

export default DutoDrenagem;
