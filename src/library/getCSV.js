/**
 * Nick Anderson
 * November 28, 2022
 * Function for converting CSV data to a javascript object
 * A global variable for storing the data
 */

//global data object
var graphData = {};

//snippet from https://stackoverflow.com/questions/7431268/how-to-read-data-from-csv-file-using-javascript#:~:text=function%20processData(allText)%20%7B%0A%20%20%20%20var%20allTextLines,push(tarr)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20//%20alert(lines)%3B%0A%7D
//first few lines for splitting the csv in javascript were take from stackoverflow
/**
 * @param {csv string} allText 
 * @returns javascript object
 */
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