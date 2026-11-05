# David O'Neal portfolio

Source for [davidoneal.dev](https://davidoneal.dev/). Cloudflare Pages runs `npm run build` and publishes `dist`.

The build prerenders `/`, `/labs`, `/resume`, and `404.html`, so the HTML contains the page text without JavaScript. The client bundle hydrates that HTML when JavaScript is available.

Do not add a catch-all rewrite to `index.html`. That would replace the prerendered `/labs` and `/resume` documents with the homepage.
