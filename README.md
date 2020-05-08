# Nxchange Next.js app

Just to test Next.js and the easy of use.

## Deployment

I tried to deploy this to now.sh. It seems [next-i18next](https://github.com/isaachinman/next-i18next) is not ready for it yet ([#577](https://github.com/isaachinman/next-i18next/issues/577), [#274](https://github.com/isaachinman/next-i18next/issues/274)). Not sure how deployment goes with our current server, it might be easier or more complicated. I don't know.

## Screenshots

<kbd><img width="700px" alt="Screenshot" src="https://user-images.githubusercontent.com/1079135/81289175-3ba5b180-9066-11ea-9a1c-8717102407dd.png"></kbd>

## Browser

Don't use Firefox, it does not work well with reloading. No idea why. Hopefully it doesn't impact production. Development works fine in Google Chrome.

## Translations

Translations work within this app. It uses [isaachinman/next-i18next](https://github.com/isaachinman/next-i18next). It has two down sides. It does not do translations in (dynamic) routes and it does not translate error pages. This last issue is because Next.js does not support that.

As mentioned above with deployment it does not work well with this (or any) translations library because of limitations of Next.js. Also sometimes the reloader does reload without some translations:

<kbd><img width="410px" alt="Screenshot" src="https://user-images.githubusercontent.com/1079135/81408392-729ac680-913d-11ea-9011-20c10198f2be.png"></kbd>

Maybe this is due to translations which are loading only after a full app reload?

## SWR

The name “SWR” is derived from `stale-while-revalidate`, a HTTP cache invalidation strategy popularized by RFC 5861. It's quite cool to use and have some caching in it which load the same data not twice. This means it's faster with navigation. You still need to use it with axios or fetch.

## Next.js telemetry

Just run `npx next telemetry disable` if you want to disable [telemetry](https://nextjs.org/telemetry).
