Install [Hugo](https://gohugo.io/overview/installing/)

### Build the theme

Install dependencies to build the theme

```
cd themes/coopcycle/
npm install
```

Watch for changes in CSS files

```
npm run watch
```

### Launch server

```
hugo server -D
```

To use homepage search, specify `GOOGLE_API_KEY` environment variable

```
GOOGLE_API_KEY=XXX hugo server -D
```
