# react-generator

React's equivalent to Angular's "ng g".

## Installation

Get the package:
```
npm install -D @lual/react-generator
```

Configure the script in `package.json`:
```
...
"scripts": {
  "g": "node ./node_modules/react-genator/index.js"
},
...
```

## Usage

Just write:
```
npm run g <component-name>
```

And get the boilerplate:
```
/src/
    components/
        <component-name>/
            component-name.component.js    # includes boilerplate code
            component-name.component.scss  # includes boilerplate code
```

## Contributing

As with Angular, the templates are strongly opinionated, so it follows [a specific style](https://github.com/lualparedes/frontend-methodology). However, if you think that this package can add value to you with a little tweaking, feel free to fork it and customize it to your needs :blush:.