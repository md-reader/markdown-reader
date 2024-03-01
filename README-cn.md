# Markdown Reader

<img src="./src/images/logo-stroke.svg" align="right" width="120">

[English](./README.md) | 中文 | [한국어](./README-ko.md)

[![](https://badgen.net/chrome-web-store/v/medapdbncneneejhbgcjceippjlfkmkg?icon=chrome&color=607cd2)](https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg) [![](https://badgen.net/chrome-web-store/stars/medapdbncneneejhbgcjceippjlfkmkg?icon=chrome&color=607cd2)](https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg) [![](https://badgen.net/chrome-web-store/users/medapdbncneneejhbgcjceippjlfkmkg?icon=chrome&color=607cd2)](https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg)

一个可以使 Chrome 预览 markdown 文件的扩展程序。

> 支持浏览 `file://` `http://` `https://` 链接以及 `*.md` `*.mkd` `*.markdown` 扩展名文件。

就像下面的样子:

- `https://example.com/example.md`
- `file:///Users/my-project/readme.markdown`

![banner1](./example/example-1.png)

![banner2](./example/example-2.png)

## Features

- 以 `HTML` 形式渲染 `Markdown`
- 侧边栏目录
- 原文件预览
- 图片预览
- 代码高亮
- 亮色/暗色/自动 主题样式
- 文档热重载
- 功能快捷键
- 文档居中显示
- 插件:
  - 表情
  - 上标
  - 下标
  - 插入
  - 目录
  - 标记
  - 图表
  - 流程图
  - 缩写
  - 释义
  - 注解
  - 任务列表复选框
  - 信息/成功/警告/危险 提示
- 支持系统:
  - Windows
  - macOS
  - Linux
  - Ubuntu
  - ChromeOS

## 安装

### A. 在线安装（需要机智上网）

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

安装完成后，此时 Chrome 已经可以预览在线的 markdown 文件了，但是还不可以预览本地的 markdown 文件，需要开启 Chrome 扩展的本地文件访问权限：

> 由于 Chrome 出于安全考虑，默认关闭了扩展程序对本地文件的访问权限，所以在安装完插件后需要手动开启权限，这样就可以正常预览本地 markdown 文件了。

**开启权限**：在扩展程序管理页中，找到刚刚安装的 `Markdown Reader`，点击 `详细信息`，在详情页找到 `允许访问文件网址` 选项，然后切换为开启状态即可（请放心：`Markdown Reader` 只对 markdown 文件进行读取和展示的操作，不会修改和上传用户文件数据）。

<br/>

这样就大功告成啦~！ヾ(◍°∇°◍)ﾉ

打开这个在线文件试一下效果吧：[example.md](https://raw.githubusercontent.com/md-reader/markdown-reader/main/example/example.md)，或者直接将 markdown 文件 **拖进浏览器** 试试！

如有使用问题请提出，欢迎 Star~

## 开发

```bash
# 克隆本仓库
git clone https://github.com/md-reader/markdown-reader.git && cd markdown-reader

# 安装依赖
pnpm install

# 启动开发环境
pnpm dev
```

在 Chrome 扩展程序管理页，点击“加载已解压的扩展程序”，选择 `markdown-reader/extension` 目录即可。

## 协议

License [MIT](https://github.com/md-reader/markdown-reader/blob/main/LICENSE)

© 2018-present, [Bener](https://github.com/Heroor)
