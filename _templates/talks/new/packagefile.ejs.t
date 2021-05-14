---
to: talks/<%= title.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase() %>/package.json
---
{
  "name": "@tech-talks/<%= title.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase() %>",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "mdx-deck <%= title.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase() %>.mdx"
  },
  "author": "<%= author %>",
  "license": "MIT",
  "devDependencies": {
    "mdx-deck": "^4.1.1"
  }
}
