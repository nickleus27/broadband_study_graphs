/**
 * Nick Anderson
 * November 28, 2022
 */

/**
 * Converts test data to the format needed for the graph
 * @param {*} testData 
 * @returns an array of graph data objects with keys: name, value, and totalTests
 */
function getSpeedGraph2(testData, testData2) {
    var graph = [];
    const speeds = new Set(["0M-10M", "10M-50M", "50M-100M", "100M-200M", "200M+"]);
    for (const key of Object.keys(testData)) {
        if (speeds.has(key)) {
            graph.push({
                name: key, graph1: parseInt(testData[key]), graph2: parseInt(testData2[key]),
                totalTests: parseInt(testData["total tests"]), totalTests2: parseInt(testData2["total tests"])
            });
        }
    }
    return graph.sort((a, b) => {
        const nameA = parseInt(a.name.substring(0, a.name.indexOf('M')));
        const nameB = parseInt(b.name.substring(0, b.name.indexOf('M')));
        if (nameA < nameB) {
            return -1;
        } else if (nameB < nameA) {
            return 1;
        } else {
            return 0; //strings are equal
        }
    });
}
function getSpeedGraph(testData) {
    var graph = [];
    const speeds = new Set(["0M-10M", "10M-50M", "50M-100M", "100M-200M", "200M+"]);
    for (const key of Object.keys(testData)) {
        if (speeds.has(key)) {
            graph.push({ name: key, value: parseInt(testData[key]), totalTests: parseInt(testData["total tests"]) });
        }
    }
    return graph.sort((a, b) => {
        const nameA = parseInt(a.name.substring(0, a.name.indexOf('M')));
        const nameB = parseInt(b.name.substring(0, b.name.indexOf('M')));
        if (nameA < nameB) {
            return -1;
        } else if (nameB < nameA) {
            return 1;
        } else {
            return 0; //strings are equal
        }
    });
}
function getErrorGraph2(testData, testData2) {
    var graph = [];
    const errors = new Set(["timeout", "no effective service", "connect_error2", "bad_output", "unknown_error"]);
    for (const key of Object.keys(testData)) {
        if (errors.has(key)) {
            graph.push({
                name: key, graph1: parseInt(testData[key]), graph2: parseInt(testData2[key]),
                totalTests: parseInt(testData["total tests"]), totalTests2: parseInt(testData2["total tests"])
            });
        }
    }
    return graph.sort((a, b) => {
        const nameA = a.name.toLocaleUpperCase();
        const nameB = b.name.toLocaleUpperCase();
        if (nameA < nameB) {
            return -1;
        } else if (nameB < nameA) {
            return 1;
        } else {
            return 0; //strings are equal
        }
    });
}
function getErrorGraph(testData) {
    var graph = [];
    const errors = new Set(["timeout", "no effective service", "connect_error2", "bad_output", "unknown_error"]);
    for (const key of Object.keys(testData)) {
        if (errors.has(key)) {
            graph.push({ name: key, value: parseInt(testData[key]), totalTests: parseInt(testData["total tests"]) });
        }
    }
    return graph.sort((a, b) => {
        const nameA = a.name.toLocaleUpperCase();
        const nameB = b.name.toLocaleUpperCase();
        if (nameA < nameB) {
            return -1;
        } else if (nameB < nameA) {
            return 1;
        } else {
            return 0; //strings are equal
        }
    });
}

export { getSpeedGraph, getSpeedGraph2, getErrorGraph, getErrorGraph2 };