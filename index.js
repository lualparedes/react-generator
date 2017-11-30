// Imports and global stuff
const fs = require('fs');
const name = process.argv[2].toLowerCase();
const capitalizedName = name.slice(0,1).toUpperCase() + name.substr(1);
const dir = './src/components/';

// Templates
let stylesTemplate = 
`@import '../../assets/styles/tools/variables';
@import '../../assets/styles/tools/functions';
@import '../../assets/styles/tools/mixins';

`;
let componentTemplate = 
`import React, { Component } from 'react';

export default class ${capitalizedName} extends Component {

    constructor(props) {
        super(props);
    }

}`;

// Create components directory if needed
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

// Generate the component
fs.mkdirSync(dir+name);
fs.writeFile(dir+name+'/'+'name.component.scss', stylesTemplate, (err) => { if (err) { throw err; } });
fs.writeFile(dir+name+'/'+'name.component.js', componentTemplate, (err) => { if (err) { throw err; } });