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

## Bootstrap new presentation

Use the embeded generator. Just run:

```sh
npm run new-talk
```

And follow the interactive CLI. Finally, use `cd talks/[talk] && npm start`.

## Fragaria theme

There is fragaria theme ready for you along with few layouts. See
`talks/conventional-commits/conventional-commits.mdx` for reference on usage.
