{
    "name": "example",
    "version": "1.0.0",
    "description": "-",
    "main": "app.js",
    "scripts": {
      "build": "rollup -c ./rollup.config.js",
      "watch": "rollup -w -c ./rollup.config.js"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "@rollup/plugin-node-resolve": "^11.2.1",
      "rollup": "^2.45.2"
    },
    "dependencies": {
      "three": "^0.128.0",
      "web-ifc-three": "0.0.102"
    }
  }