module.exports.convertToUpperCamelCase = (string) => {
    
    let convertedString = '';

    if (string.search('-') === -1) {
        convertedString = string.slice(0,1).toUpperCase() + string.substr(1);
    }
    else {
        let strArray = string.split('-');
        strArray.forEach((str) => {
            convertedString += (str.slice(0,1).toUpperCase() + str.substr(1));
        });
    }

    return convertedString;
}