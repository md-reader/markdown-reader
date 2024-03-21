# Markdown Reader

<img src="./src/images/logo-stroke.svg" align="right" width="120">

[English](./README.md) | 中文 | [한국어](./README-ko.md)

[![](https://badgen.net/chrome-web-store/v/medapdbncneneejhbgcjceippjlfkmkg?icon=chrome&color=607cd2)](https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg) [![](https://badgen.net/chrome-web-store/stars/medapdbncneneejhbgcjceippjlfkmkg?icon=chrome&color=607cd2)](https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg) [![](https://badgen.net/chrome-web-store/users/medapdbncneneejhbgcjceippjlfkmkg?icon=chrome&color=607cd2)](https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg)

Markdown Reader 是一个功能强大的 Chrome 扩展程序，它可以帮助你在 Chrome 中快速预览 markdown 文档。

- 支持预览 `file://` `http://` `https://` 协议的链接以及 `*.md` `*.mkd` `*.mdx` `*.markdown` 扩展名的文档，就像下面的样子:
  - `https://example.com/example.md`（在线 Markdown 链接）
  - `file:///Users/my-project/readme.markdown`（本地 Markdown 文件，[\*需要开启特定权限](#允许本地文件访问权限)）
- 内置多种语法插件，支持渲染 Emoji 表情、上标/下标、复选框、数学公式、流程图、甘特图、目录、插入、标记、缩写、释义、注解、信息/成功/警告/危险提示。
- 支持代码高亮，以及精心调配的 亮色/暗色 主题样式。
- 支持文档热重载，实时预览文档改动；支持文档居中显示，更利于阅读。
- 自动整理出文档目录至侧边栏，同时支持切换预览原文件内容；支持预览图片媒体资源。
- 支持 Chrome 扩展快捷键，快速调用功能。

![banner](./example/example-1.png)

## 安装

### A. Chrome 应用商店安装（需要机智上网）

<a href="https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg" target="_blank"><img src="./src/images/chrome-web-store.svg" alt="Chrome Web Store" style="width:247px"/></a>

### B. 本地构建

1. 克隆 `markdown-reader` 仓库到本地并编译:

   ```bash
   # 克隆本仓库
   git clone https://github.com/md-reader/markdown-reader.git && cd markdown-reader

   # 安装依赖
   pnpm install

   # 构建扩展程序
   pnpm build
   ```

2. 构建成功后，`markdown-reader/dist` 文件夹会生成 `markdown-reader-xxx.zip` 扩展程序包。

3. 进入 Chrome 的扩展管理页，将扩展程序拖拽进浏览器即可安装。

## 使用

安装完成后，此时 Chrome 已经可以预览在线的 markdown 文档了，但是还不可以预览本地的 markdown 文档，需要开启 Chrome 扩展的文件访问权限。

### 允许本地文件访问权限

> 由于 Chrome 出于安全考虑，默认关闭了扩展程序对本地文件的访问权限，所以在安装完插件后需要手动开启权限，这样就可以正常预览本地 markdown 文件了。

在 Chrome 扩展程序管理页中，找到刚刚安装的 `Markdown Reader`，点击 `详细信息`，在详情页找到 `允许访问文件网址` 选项，然后切换为开启状态即可（请放心：`Markdown Reader` 只对 markdown 文件进行读取和展示的操作，不会修改和上传用户文件数据）。

<br/>

现在所有工作都完成啦~！ヾ(◍°∇°◍)ﾉ

打开这个在线文档试一下效果吧：[示例文档](https://raw.githubusercontent.com/md-reader/markdown-reader/main/example/example.md)；你还可以试试直接将 Markdown 文档 **拖进浏览器**！

欢迎提出你的使用问题和建议。

点一颗星星（star）支持一下也是对我的鼓励哦~！

## 协议

License [MIT](https://github.com/md-reader/markdown-reader/blob/main/LICENSE)

© 2018-present, [Bener](https://github.com/Heroor)
