const getIntroOfTest = (label, graph) => {
    if (label === "200M+") {
        return `Tests from ${graph} with speeds of over 200 MegaBytes`;
    }
    if (label === "100M-200M") {
        return `Tests from ${graph} with speeds between 100 to 200 MegaBytes`;
    }
    if (label === "50M-100M") {
        return `Tests from ${graph} with speeds between 50 to 100 MegaBytes`;
    }
    if (label === "10M-50M") {
        return `Tests from ${graph} with speeds between 10 to 50 MegaBytes`;
    }
    if (label === "0M-10M") {
        return `Tests from ${graph} with speeds between 0 to 10 MegaBytes`;
    }
    if (label === "timeout") {
        return `Tests from ${graph} with timeout errors`;
    }
    if (label === "no effective service") {
        return `Tests from ${graph} with no effective service errors`;
    }
    if (label === "connect_error2") {
        return `Tests from ${graph} with connect errors`;
    }
    if (label === "bad_output") {
        return `Tests from ${graph} with bad output errors`;
    }
    if (label === "unknown_error") {
        return `Tests from ${graph} with unknown errors`;
    }
    return '';
};

const getDescription = (totalTests, graph) => {
    return `Total tests conducted in ${graph}: ${totalTests}`;
}

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${label} : ${payload[0].value} & ${payload[1].value}`}</p>
                <p className="intro">{`${payload[0].value} ${getIntroOfTest(label, payload[0].name )}`}</p>
                <p className="intro">{`${payload[1].value} ${getIntroOfTest(label, payload[1].name )}`}</p>
                <p className="desc">{getDescription(payload[0].payload.totalTests, payload[0].name)}</p>
                <p className="desc">{getDescription(payload[0].payload.totalTests2, payload[1].name)}</p>
            </div>
        );
    }

    return null;
};

export default CustomTooltip;