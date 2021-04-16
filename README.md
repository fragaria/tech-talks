# Fragaria tech talks

A repository to maintain presentations and tech talks from Fragaria.

Relies on [mdx-deck](https://github.com/jxnblk/mdx-deck) presentation toolkit.

## Run locally

```sh
nvm install
npm i
cd talks/[talk]
npm start
```

## Add new presentation

Create new folder:

```sh
cd talks
mkdir [talk]
npm init
```

Then, add `mdx-deck` to `devDependencies`. Create your `.mdx` file and provide start
script in `npm` scripts. For example:


```json
{
  "name": "@tech-talks/conventional-commits",
  "version": "1.0.0",
  "description": "Introduction to conventional commits",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "mdx-deck conventional-commits.mdx"
  },
  "author": "Filip Vařecha",
  "license": "MIT",
  "devDependencies": {
    "mdx-deck": "^4.1.1"
  }
}
```

Done!

## Fragaria theme

There is fragaria theme ready for you along with few layouts. See
`talks/conventional-commits/conventional-commits.mdx` for reference on usage.
