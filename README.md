# Markdown Reader

<img src="./src/images/logo-stroke.svg" align="right" width="120">

English | [中文](./README-cn.md) | [한국어](./README-ko.md)

[![](https://badgen.net/chrome-web-store/v/medapdbncneneejhbgcjceippjlfkmkg?icon=chrome&color=607cd2)](https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg) [![](https://badgen.net/chrome-web-store/stars/medapdbncneneejhbgcjceippjlfkmkg?icon=chrome&color=607cd2)](https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg) [![](https://badgen.net/chrome-web-store/users/medapdbncneneejhbgcjceippjlfkmkg?icon=chrome&color=607cd2)](https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg)

A markdown reader extension for Chrome.

> Support view `file://` `http://` `https://` URL and `*.md` `*.mkd` `*.markdown` extension files.

Example:

- `https://example.com/example.md`
- `file:///Users/my-project/readme.markdown`

![banner1](./example/example-1.png)

![banner2](./example/example-2.png)

## Features

- Render markdown to HTML
- Table of content sidebar
- RAW preview
- Image preview
- Code highlighting
- Light/Dark/Auto markdown theme
- Shortcut key
- Document hot reload
- Page content centered
- Plugins:
  - Emoji
  - Superscript
  - Subscript
  - Inserted
  - TOC
  - Mark
  - Katex
  - Mermaid
  - Abbreviation
  - Definition list
  - Footnote
  - Task Lists
  - Warning container
  - Tips container
- Support OS:
  - Windows
  - macOS
  - Linux
  - Ubuntu
  - ChromeOS

## Install

### A. Online installation

[![Chrome Web Store](./src/images/chrome-web-store.png)](https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg)

### B. Building installation

1. Clone `markdown-reader` repo and build:

   ```bash
   # Clone repository
   git clone https://github.com/md-reader/markdown-reader.git && cd markdown-reader

   # Install dependencies
   pnpm install

   # Build extension
   pnpm build
   ```

2. After build, the `markdown-reader/dist` folder will generate a `markdown-reader-xxx.zip` extension package.

3. On the Chrome extension management page and drag the extension into the browser.

## Usage

After installation, you should set local file access permissions before preview local files:

Open `details` page of `Markdown Reader` extension, enabled `Allow access to file URLs`.

<br/>

All right!

Visit this [example.md](https://raw.githubusercontent.com/md-reader/markdown-reader/main/example/example.md) to test if it works, Or **drag** markdown file to the Chrome!

## Develop

```bash
# Clone repository
git clone https://github.com/md-reader/markdown-reader.git && cd markdown-reader

# Installation dependencies
pnpm install

# Develop project
pnpm dev
```

On the Chrome extension management page, click "Load unpacked extension" and select `markdown-reader/extension` directory.

## License

License [MIT](https://github.com/md-reader/markdown-reader/blob/main/LICENSE)

© 2018-present, [Bener](https://github.com/Heroor)
