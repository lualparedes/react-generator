// Imports and global stuff
const fs = require('fs');
const convertToUpperCamelCase = require('./utils/utils').convertToUpperCamelCase;
const name = process.argv[2].toLowerCase();
const upperCamelCaseName = convertToUpperCamelCase(name);
const dir = './src/components/';

// Templates
let stylesTemplate = 
`@import '../../assets/styles/tools/variables';
@import '../../assets/styles/tools/functions';
@import '../../assets/styles/tools/mixins';

`;
let componentTemplate = 
`import React, { Component } from 'react';
import './${name}.component.css';

export default class ${upperCamelCaseName} extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="${upperCamelCaseName}">
                
            </div>
        );
    }

}`;
let testTemplate = 
`import React from 'react';
import ReactDOM from 'react-dom';
import ${upperCamelCaseName} from './${name}.component';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<${upperCamelCaseName} />, div);
});`;

// Create components directory if needed
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

// Generate the component
fs.mkdirSync(dir+name);
fs.writeFile(dir+name+'/'+name+'.component.js', componentTemplate, (err) => { if (err) { throw err; } });
fs.writeFile(dir+name+'/'+name+'.component.test.js', testTemplate, (err) => { if (err) { throw err; } });
fs.writeFile(dir+name+'/'+name+'.component.scss',  stylesTemplate, (err) => { if (err) { throw err; } });
fs.writeFile(dir+name+'/'+name+'.component.css',  '', (err) => { if (err) { throw err; } });