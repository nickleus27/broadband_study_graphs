var graphData = {};

function loadFileCB() {
    graphData = processData(this.responseText);
    // hard codes string parameters for test
    // need to pass these values in from a button click
    //GRAPHDATA = getVendorModelServerGraph("FirstNet", "XP8800", "wTCPup1");

    /*
    new Chart(
    document.getElementById('visualizer'),
    {
        type: 'bar',
        data: {
        labels: GRAPHDATA.map( row => row.test),
        datasets: [
            {
            label: 'Tests',
            data: GRAPHDATA.map(row => row.value)
            }
        ]
        }
    }
    );
    */
}

function getVendorModelServerGraph(vendor, model, server) {
    var tests = ["200M+", "100M-200M", "50M-100M", "10M-50M", "0M-10M", "timeout", "no effective service", "connect_error2", "bad_output", "unknown_error"];
    var collection = JSON[vendor][model][server];
    var data = [];
    for (const test of tests) {
        data.push({ test: test, value: parseInt(collection[test]) });
    }
    //maxGraphValue = collection["total tests"];
    return data;
}

//snippet from https://stackoverflow.com/questions/7431268/how-to-read-data-from-csv-file-using-javascript#:~:text=function%20processData(allText)%20%7B%0A%20%20%20%20var%20allTextLines,push(tarr)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20//%20alert(lines)%3B%0A%7D-->
function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var json = {};

    for (var i = 1; i < allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length === headers.length) {
            let carrier = data[0];
            let phone_model = data[1];
            if (!json[carrier]) { // if carrier is not in jason
                json[carrier] = {
                    [phone_model]:
                {
                    "wTCPup1": {
                        "200M+": 0, "100M-200M": 0, "50M-100M": 0, "10M-50M": 0, "0M-10M": 0,
                        "timeout": 0, "no effective service": 0, "connect_error2": 0, "bad_output": 0, "unknown_error": 0, "total tests": 0
                    },
                    "wTCPdown1": {
                        "200M+": 0, "100M-200M": 0, "50M-100M": 0, "10M-50M": 0, "0M-10M": 0,
                        "timeout": 0, "no effective service": 0, "connect_error2": 0, "bad_output": 0, "unknown_error": 0, "total tests": 0
                    },
                    "eTCPup1": {
                        "200M+": 0, "100M-200M": 0, "50M-100M": 0, "10M-50M": 0, "0M-10M": 0,
                        "timeout": 0, "no effective service": 0, "connect_error2": 0, "bad_output": 0, "unknown_error": 0, "total tests": 0
                    },
                    "eTCPdown1": {
                        "200M+": 0, "100M-200M": 0, "50M-100M": 0, "10M-50M": 0, "0M-10M": 0,
                        "timeout": 0, "no effective service": 0, "connect_error2": 0, "bad_output": 0, "unknown_error": 0, "total tests": 0
                    },
                    "wTCPup2": {
                        "200M+": 0, "100M-200M": 0, "50M-100M": 0, "10M-50M": 0, "0M-10M": 0,
                        "timeout": 0, "no effective service": 0, "connect_error2": 0, "bad_output": 0, "unknown_error": 0, "total tests": 0
                    },
                    "wTCPdown2": {
                        "200M+": 0, "100M-200M": 0, "50M-100M": 0, "10M-50M": 0, "0M-10M": 0,
                        "timeout": 0, "no effective service": 0, "connect_error2": 0, "bad_output": 0, "unknown_error": 0, "total tests": 0
                    },
                    "eTCPup2": {
                        "200M+": 0, "100M-200M": 0, "50M-100M": 0, "10M-50M": 0, "0M-10M": 0,
                        "timeout": 0, "no effective service": 0, "connect_error2": 0, "bad_output": 0, "unknown_error": 0, "total tests": 0
                    },
                    "eTCPdown2": {
                        "200M+": 0, "100M-200M": 0, "50M-100M": 0, "10M-50M": 0, "0M-10M": 0,
                        "timeout": 0, "no effective service": 0, "connect_error2": 0, "bad_output": 0, "unknown_error": 0, "total tests": 0
                    },
                    "total in batch": 0
                }
                };
            }
            if (!json[carrier][phone_model]) { //if phone type is not in json
                json[carrier][phone_model] =
                {
                    "wTCPup1": {
                        "200M+": 0, "100M-200M": 0, "50M-100M": 0, "10M-50M": 0, "0M-10M": 0,
                        "timeout": 0, "no effective service": 0, "connect_error2": 0, "bad_output": 0, "unknown_error": 0, "total tests": 0
                    },
                    "wTCPdown1": {
                        "200M+": 0, "100M-200M": 0, "50M-100M": 0, "10M-50M": 0, "0M-10M": 0,
                        "timeout": 0, "no effective service": 0, "connect_error2": 0, "bad_output": 0, "unknown_error": 0, "total tests": 0
                    },
                    "eTCPup1": {
                        "200M+": 0, "100M-200M": 0, "50M-100M": 0, "10M-50M": 0, "0M-10M": 0,
                        "timeout": 0, "no effective service": 0, "connect_error2": 0, "bad_output": 0, "unknown_error": 0, "total tests": 0
                    },
                    "eTCPdown1": {
                        "200M+": 0, "100M-200M": 0, "50M-100M": 0, "10M-50M": 0, "0M-10M": 0,
                        "timeout": 0, "no effective service": 0, "connect_error2": 0, "bad_output": 0, "unknown_error": 0, "total tests": 0
                    },
                    "wTCPup2": {
                        "200M+": 0, "100M-200M": 0, "50M-100M": 0, "10M-50M": 0, "0M-10M": 0,
                        "timeout": 0, "no effective service": 0, "connect_error2": 0, "bad_output": 0, "unknown_error": 0, "total tests": 0
                    },
                    "wTCPdown2": {
                        "200M+": 0, "100M-200M": 0, "50M-100M": 0, "10M-50M": 0, "0M-10M": 0,
                        "timeout": 0, "no effective service": 0, "connect_error2": 0, "bad_output": 0, "unknown_error": 0, "total tests": 0
                    },
                    "eTCPup2": {
                        "200M+": 0, "100M-200M": 0, "50M-100M": 0, "10M-50M": 0, "0M-10M": 0,
                        "timeout": 0, "no effective service": 0, "connect_error2": 0, "bad_output": 0, "unknown_error": 0, "total tests": 0
                    },
                    "eTCPdown2": {
                        "200M+": 0, "100M-200M": 0, "50M-100M": 0, "10M-50M": 0, "0M-10M": 0,
                        "timeout": 0, "no effective service": 0, "connect_error2": 0, "bad_output": 0, "unknown_error": 0, "total tests": 0
                    },
                    "total in batch": 0
                };
            }
            let statistic = json[carrier][phone_model]["wTCPup1"][data[2]] !== undefined ? data[2] : data[3]; // statistic is the string of error type or speed range
            let carrier_phone = json[carrier][phone_model];
            for (var server = 4; server < headers.length - 2; server++) {
                carrier_phone[headers[server]][statistic] = data[server];
                carrier_phone[headers[server]]["total tests"] = data[data.length - 2];
            }
            carrier_phone["total in batch"] = data[data.length - 1];
        }
    }
    return json;
}

export { graphData, processData };