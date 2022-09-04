function SensoresNivel(props) {
    return (
        <svg {...props}>
            <g stroke="#000" strokeWidth={0} fill={1 <= props.sensor_poco ? '#00FF21' : 'black'}>
                <path d="M352.47286 706.84219H386.90859V713.64752H352.47286z" />
                <path
                    transform="matrix(1.43063 .61197 -.72015 1.21573 274.743 -456.064)"
                    d="M446.13122 731.67331H459.63108V736.67331H446.13122z"
                />
            </g>
            <g stroke="#000" strokeWidth={0} fill={2 == props.sensor_poco ? '#00FF21' : 'black'}>
                <path d="M353.25802 497.88945H387.69374999999997V504.69478000000004H353.25802z" />
                <path
                    transform="matrix(1.43063 .61197 -.72015 1.21573 274.743 -456.064)"
                    d="M377.54164 594.32503H391.0415V599.32503H377.54164z"
                />
            </g>
            <g stroke="#000" strokeWidth={0} fill={3 <= props.sensor_cisterna ? '#00FF21' : 'black'}>
                <path d="M347.81262 264.63989H382.24834999999996V271.44522H347.81262z" />
                <path
                    transform="matrix(1.43063 .61197 -.72015 1.21573 274.743 -456.064)"
                    d="M297.45098 442.78091H310.95084V447.78091H297.45098z"
                />
            </g>
            <g stroke="#000" strokeWidth={0} fill={4 <= props.sensor_cisterna ? '#00FF21' : 'black'}>
                <path d="M347.81262 212.4017H382.24834999999996V219.20703H347.81262z" />
                <path
                    transform="matrix(1.43063 .61197 -.72015 1.21573 274.743 -456.064)"
                    d="M280.19412 408.49898H293.69398V413.49898H280.19412z"
                />
            </g>
            <g stroke="#000" strokeWidth={0} fill={5 <= props.sensor_cisterna ? '#00FF21' : 'black'}>
                <path d="M347.81262 161.37836H382.24834999999996V168.18368999999998H347.81262z" />
                <path
                    transform="matrix(1.43063 .61197 -.72015 1.21573 274.743 -456.064)"
                    d="M263.33859 375.01431H276.83845V380.01431H263.33859z"
                />
            </g>
            <g stroke="#000" strokeWidth={0} fill={6 <= props.sensor_cisterna ? '#00FF21' : 'black'}>
                <path d="M347.81262 112.7847H382.24834999999996V119.59003H347.81262z" />
                <path
                    transform="matrix(1.43063 .61197 -.72015 1.21573 274.743 -456.064)"
                    d="M247.2857 343.12414H260.78556V348.12414H247.2857z"
                />
            </g>
            <g stroke="#000" strokeWidth={0} fill={7 == props.sensor_cisterna ? '#00FF21' : 'black'}>
                <path d="M347.81262 62.9762H382.24834999999996V69.78153H347.81262z" />
                <path
                    transform="matrix(1.43063 .61197 -.72015 1.21573 274.743 -456.064)"
                    d="M230.83149 310.43672H244.33135000000001V315.43672H230.83149z"
                />
            </g>
        </svg>
    );
}

export default SensoresNivel;
