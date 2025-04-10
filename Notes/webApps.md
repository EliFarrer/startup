2007 Jobs introduced the iphone. A pocket computer. The idea was you write an app with the modern web standards like js, html, and css. So you wouldn't need the app store. Then in 2008 they made the app store. They did this for the money and 'security', but in reality, the browser is also not really secure.
- native apps in the app store
- certification
- revenue share
You need two different code basses, one for android, and another for ios. (also technically the microsoft phone). But then you also need to support the web. What about running on a playstation.... This leads to deviations. Developers don't push back because Developers have jobs. The user kind of looses out on this because there is so much effort put into a little app for them.

Then the idea is we create one code base with some tech on top of it that can transpile (like react native). There is always a browser on the code. So then the technology will take the render the code as if it were an app that just runs in the browser.

Where we are at
- Special code for each target
- multiple distribution paths
- app store deployment
- utilize unique device features (double tap powere button for camera)

# Progressive Web App (Installable web application)
A standard to build apps with core technologies. Then the browser will interact with the os and pretend to be an app. With this, we need to be sure our app will work well on different sized devices. Then we need to install it to the desktop.

This gives us
- one code base
- smaller than native code base
- one distribution (not to an app store, but to the internet), easy updates
- no app store (no approval or installation fees)
- works offline
- advanced caching functionality
- native like experience for the user

We can go to spotify and install the app, but it is just a facade running from the browser.

In the top right of the chrome browser next to the star you can install an application.

On mobile, go to the three dots and add it to home screen, this is adding it as an app. It is basically the same. You can add code to cache data.

You can even add things like vibration, face detection, motin, biometric authentication, and other functionality to a mobile app. You can do things like notifications too, nfc. The browser has access to the os and so it can do thigns like this.

Push notifications work on android, but not apple because that is the thing they are holding on to.

# How to do this
You can pull this off in like 15 minutes.

1) Create a manifest that has a description, icons, background color, the name...
2) Provide all the icons
3) Create a service worker
The browser is single threaded so there is one running your whole page. You can use another to do the caching in a second thread. You will call the service worker and ask if it has the data and it will do the checking. A lot of times in Network, it will pull things from the service worker.
4) Offline fallbacks. You want to write your app so it will run offline.
- put data in local storage
- pull other data from the cache.

Vite will do a lot of this for you. In some meta tags in index.html, it will read the manifest and also icons.

Then in the `vite.config.js`, add `"vite-plugin-pwa":` which will write your manifest and service worker for you.

On different screens for hover events, just add different handlers for the different events. Then they will always be called and do different things. Hover doesn't make sense on touchscreen.