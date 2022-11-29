const getIntroOfTest = (label) => {
    if (label === "200M+") {
        return "Tests with speeds of over 200 MegaBytes";
    }
    if (label === "100M-200M") {
        return "Tests with speeds between 100 to 200 MegaBytes";
    }
    if (label === "50M-100M") {
        return "Tests with speeds between 50 to 100 MegaBytes";
    }
    if (label === "10M-50M") {
        return "Tests with speeds between 10 to 50 MegaBytes";
    }
    if (label === "0M-10M") {
        return "Tests with speeds between 0 to 10 MegaBytes";
    }
    if (label === "timeout") {
        return "Tests with timeout errors";
    }
    if (label === "no effective service") {
        return "Tests with no effective service errors";
    }
    if (label === "connect_error2") {
        return "Tests with connect errors";
    }
    if (label === "bad_output") {
        return "Tests with bad output errors";
    }
    if (label === "unknown_error") {
        return "Tests with unknown errors";
    }
    return '';
};

const getDescription = (totalTests) => {
    return `Total tests conducted : ${totalTests}`;
}

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
                <p className="intro">{`${payload[0].value} ${getIntroOfTest(label)}`}</p>
                <p className="desc">{getDescription(payload[0].payload.totalTests)}</p>
            </div>
        );
    }

    return null;
};

export default CustomTooltip;