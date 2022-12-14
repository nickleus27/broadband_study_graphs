/**
 * Nick Anderson
 * November 28, 2022
 */

/**
 * Converts test data to the format need for the graph
 * 
 * @param {*} testData 
 * @returns an array of graph data objects with keys: name, value, and totalTests
 */

function getSpeedGraph(testData) {
    var graph = [];
    const speeds = new Set(["200M+", "100M-200M", "50M-100M", "10M-50M", "0M-10M"]);
    for (const key of Object.keys(testData)) {
        if (speeds.has(key)) {
            graph.push({ name: key, value: parseInt(testData[key]), totalTests: parseInt(testData["total tests"]) });
        }
    }
    return graph;
}

function getErrorGraph(testData) {
    var graph = [];
    const errors = new Set(["timeout", "no effective service", "connect_error2", "bad_output", "unknown_error"]);
    for (const key of Object.keys(testData)) {
        if (errors.has(key)) {
            graph.push({ name: key, value: parseInt(testData[key]), totalTests: parseInt(testData["total tests"]) });
        }
    }
    return graph;
}

export { getSpeedGraph, getErrorGraph };