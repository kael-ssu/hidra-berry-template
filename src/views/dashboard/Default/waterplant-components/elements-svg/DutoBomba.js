function DutoBomba(props) {
    return (
        <svg {...props}>
            <path
                stroke="#7f3f00"
                fill="none"
                strokeWidth={10}
                d="M476.678 279.312l-.06-243.237 110.118-.01c3.167 228.971-1.268 450.75 1.9 679.721l-117.84 1.836"
            />
            <path
                stroke={props.vazao == 'com fluxo' ? '#5B9BA2' : '#7f3f00'}
                strokeWidth={4}
                d="M476.678 279.312l-.06-243.237 110.118-.01c3.167 228.971-1.268 450.75 1.9 679.721l-117.84 1.836"
                fill="none"
            />
        </svg>
    );
}

export default DutoBomba;
