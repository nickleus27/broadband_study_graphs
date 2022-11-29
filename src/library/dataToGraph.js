/**
 * Nick Anderson
 * November 28, 2022
 */

/**
 * Converts test data to the format need for the graph
 * 
 * @param {*} testData 
 * @returns 
 */

function getCarrierModelServerGraph(testData) {
    var graph = [];
    for (const key of Object.keys(testData)) {
        if (key.includes("total")) {
            continue;
        }
        graph.push({ name: key, value: parseInt(testData[key]) });
    }
    //maxGraphValue = collection["total tests"];
    return graph;
}

export {getCarrierModelServerGraph};