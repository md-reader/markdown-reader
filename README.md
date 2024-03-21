# Markdown Reader

<img src="./src/images/logo-stroke.svg" align="right" width="120">

English | [中文](./README-cn.md) | [한국어](./README-ko.md)

[![](https://badgen.net/chrome-web-store/v/medapdbncneneejhbgcjceippjlfkmkg?icon=chrome&color=607cd2)](https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg) [![](https://badgen.net/chrome-web-store/stars/medapdbncneneejhbgcjceippjlfkmkg?icon=chrome&color=607cd2)](https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg) [![](https://badgen.net/chrome-web-store/users/medapdbncneneejhbgcjceippjlfkmkg?icon=chrome&color=607cd2)](https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg)

Markdown Reader is a powerful Chrome extension that helps you quickly preview markdown documents in Chrome.

- Support for previewing links in the `file://` `http://` `https://` protocol as well as documents with `*.md` `*.mkd` `*.mdx` `*.markdown` extensions, like the following:
  - `https://example.com/example.md` (online Markdown URL)
  - `file:///Users/my-project/readme.markdown` (local Markdown file, \*[requires specific permissions](#allowing-file-access-permission))
- Built-in multiple syntax plug-ins to support rendering Emoji emoticons, superscripts/subscripts, checkboxes, mathematical formulas, flowcharts, Gantt charts, table of contents, insertions, markdowns, abbreviations, paraphrases, annotations, and message/success/warning/danger alerts.
- Code highlighting, and carefully arranged light/dark theme styles.
- Support document hot reloading, real-time preview of document changes; support document centred display, more conducive to reading.
- Automatically organise the document directory to the sidebar, and support switching to preview the original file content; support previewing image media resources.
- Supports Chrome extension shortcuts for quick function invocation.

![banner](./example/example-1.png)

## Installation

### A. Install from Chrome Web Store

<a href="https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg" target="_blank"><img src="./src/images/chrome-web-store.svg" alt="Chrome Web Store" style="width:247px"/></a>

### B. Building installation

1. Clone the `markdown-reader` repository and build it:

   ```bash
   # Clone this repository
   git clone https://github.com/md-reader/markdown-reader.git && cd markdown-reader

   # Install dependencies
   pnpm install

   # Build the extension
   pnpm build
   ```

2. After a successful build, the `markdown-reader/dist` folder will contain the `markdown-reader-xxx.zip` extension package.

3. Go to the Extensions management page in Chrome and drag the extension into the browser to install it.

## Usage

After installation, Chrome is now able to preview online markdown documents. However, it is not able to preview local markdown documents by default and requires enabling file access permission for the Chrome extension.

### Allowing File Access Permission

> Due to security reasons, Chrome by default disables extension access to local files. Therefore, after installing the plugin, you need to manually enable the permission in order to preview local markdown files.

In the Chrome Extensions management page, locate the installed "Markdown Reader" extension, click on "Details", and find the option "Allow access to file URLs" in the details page. Switch it to the enabled state (Please rest assured that "Markdown Reader" only performs read and display operations on markdown files and will not modify or upload user file data).

<br/>

Now all the work is done~!ヾ(◍°∇°◍)ﾉ

Try the effect by opening this online document: [Example Document](https://raw.githubusercontent.com/md-reader/markdown-reader/main/example/example.md); You can also try dragging a Markdown document directly into the browser!

Feel free to ask any questions or provide suggestions.

Giving a star to show your support is also an encouragement for me~!

## License

License [MIT](https://github.com/md-reader/markdown-reader/blob/main/LICENSE)

© 2018-present, [Bener](https://github.com/Heroor)
