# News Search

This has been tested in 1900x1200 resolution in Chrome, Safari, and Firefox on OSX.  It's recommended to use Chrome.

## Run The Demo

- Open one terminal
- Clone the repo: `git clone https://github.com/davidjnelson/news-app.git`
- `cd news-app`
- [Install Homebrew](https://brew.sh/)
- [Install Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)
- `yarn demo`
- Open a second terminal
- `cd build`
- `python -m SimpleHTTPServer 3000`
- Visit: [http://localhost:3000](http://localhost:3000)

## Run The Tests
- `yarn test`

## Run The Build
- `yarn build`

## Run The Hot Reloading Development Environment
- Open one terminal
- `yarn start-proxy`
- Open a second terminal
- `yarn start`

## Future Improvements
- add css modules
- add flow types with check in build
- test in IE11 and Edge
- make it responsive for phones and tablets
- make the styling match the mockup exactly
