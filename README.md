# parcel-storybook

full storybook (preview + manager including addons!) bundled by parceljs instead of webpack

## features (thanks to parceljs :) )

1. zero config react + typescript support (no babel, no webpack or any other config)
2. glob import all stories (\*.stories.ts), see ./storybook/iframe.ts
3. fast bundling
   -- fast storybook preview bundling thanks to parceljs
   -- storybook manager prebuilt and included in git (approach used by snowpack and yarn 2 cache sharing), so no time spent to build it

## usage

```sh
git clone https://github.com/vasileermicioi/parcel-storybook
```

```sh
cd parcel-storybook
```

```sh
yarn install
```

```sh
yarn storybook
```

## storybook manager rebuild

if you need more addons (now only actions and knobs) you can modify ./storybook/config/main.js

```sh
yarn rebuild-manager
```

```sh
yarn storybook
```

!! don't forget to commit newly generated files
!! rebuild manager only when you need to change manager config, not the preview or stories

## motivation

storybook published a standalone preview powered by parceljs
(see here https://github.com/storybookjs/storybook/tree/next/examples/standalone-preview)
but the example is not working with the addons because the preview is inside an iframe with different origin,
(see here https://github.com/storybookjs/storybook/issues/8677)
cross-origin requests/communication being blocked by browsers (same domain but different port is considered another origin)

running storybook with parceljs (because of it's simplicity) seems to be a popular request
https://github.com/storybookjs/storybook/issues/10110
https://github.com/storybookjs/storybook/issues/8677
https://github.com/storybookjs/storybook/issues/5975#issuecomment-513541119

## posible solutions

main problem is to fix cross-origin communication, I was able to solve that in 2 ways

1. reverse proxy both the manager and the preview so they are in the same domain
2. build static manager (how often are you changing storybook config?) and serving / watching only the preview having
   storybook manager as static assets

so current repo is solved using second approach
