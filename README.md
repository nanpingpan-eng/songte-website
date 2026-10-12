# 松特工程机械外贸独立站 — 使用说明

**Guangzhou SongTe Engineering Machinery CO.,LTD — English Trade Website (cylinder-first, A方案)**

在线网址：https://nanpingpan-eng.github.io/songte-website/

站点本地根目录：`E:\目录模板资料&资料图&logo\SongTe-Website-Upload\`

---

## 一、如何打开（本地预览）

方式 A：直接用浏览器打开 `index.html`（双击即可，站点完全离线可用，无需联网）。

方式 B：本地起 HTTP 服务（推荐，效果等同线上）：
```
cd E:\目录模板资料&资料图&logo\SongTe-Website-Upload
python -m http.server 8080
```
然后浏览器访问 `http://localhost:8080`。

## 二、如何部署上线

本仓库为 GitHub Pages 静态站，推送后即由 GitHub 发布到上述网址；亦可将整站原样上传到任意静态托管（OSS / COS / Cloudflare Pages / Vercel / Nginx 等），无需数据库与后端。

> 注意：部署时务必保持目录结构完整（`index.html`、`products.html`、`about.html`、`contact.html`、`product/`、`assets/`），不要只上传单个 HTML 文件。

## 三、站点结构（Epiroc 主推 + 油缸优先，统一卡片网格）

| 文件 | 内容 |
|---|---|
| `index.html` | Epiroc 导向 Hero、可信承诺条、统一分类卡片网格（Epiroc Cylinders 置顶 Featured）、"Cylinder Materials & Process — Built for the Field" 材质工艺板块、"How We Help Confirm the Right Cylinder" 三步、Before Ordering 提示 |
| `products.html` | 统一分类卡片网格（Epiroc 24 products 置顶）+ 搜索框 + 品牌筛选标签；卡片 "View range →" 页内展开产品行（产品名/P/N/适配机型/Details） |
| `product/*.html` | 96 个产品详情页：Epiroc 实拍图、Part Number、Compatible Models、Product Type、Condition、Warranty、Lead Time、规格表、询盘按钮、同类推荐 |
| `about.html` | 油缸定制生产与测量能力、零件号询价、出货前检验、证书墙、技术图解、出口市场 |
| `contact.html` | 扩展询盘表单（公司/零件号/机型/数量/状态/目的港等）、WhatsApp 按钮、二维码、名片 |
| `assets/` | 全站样式 `css/style.css`、交互脚本 `js/main.js`、产品/品牌/证书/Epiroc 实拍图 `images/` |

> **主推类目 Epiroc Cylinders**：24 个 Epiroc / Atlas Copco 替换油缸（适配 DML 1200、DM 45/30/50/75 地表钻机），配 39 张安百拓实拍图（`assets/images/epiroc/`，来源对照 `data/epiroc_manifest.json`）。

## 四、联系方式（已内置在网站中）

- 询盘邮箱（表单 mailto 发至此）：**songtemachine04@hotmail.com**
- 电话 / WhatsApp / 微信：+86 181 4282 7405
- 地址：No. 119, Building 1, Xiangyi Technology Town, Jishan Xinlu Road, Zhuji Street, Tianhe District, Guangzhou City, Guangdong Province, China

## 五、口径说明（重要）

- **保修**：按数据 `warranty` 字段展示（油缸 18 months、终传动 12 months、其余 Please inquire）。**保修政策以双方最终书面确认为准。**
- **库存**：不写"500+ engines in stock"等强承诺，统一表述为 "Substantial stock of new & remanufactured engines — please inquire for current availability"。
- **数据真实性**：资料未提供的型号/规格/适用机型，页面如实显示 **"To be confirmed"** 或 **"Please inquire"**，未做任何编造。
- 产品数据：`data/product_data.json`（21 分类、96 产品；Epiroc 图片对照 `data/epiroc_manifest.json`）；改数据后需重新运行生成脚本刷新静态页。**全站不含任何价格数字/金额**。

## 六、交付前已核验

- 全站本地链接/图片引用无断链；全部页面与资源本地 HTTP 测试返回 200。
- 每个产品详情页含全部 7 个字段（Name / Part No / Compatible Models / Type / Condition / Warranty / Lead Time）。
- 桌面与手机布局已截图检查，无塌陷、无裂图、无横向溢出。
- 全站无外部脚本/样式依赖（唯一外链是 WhatsApp 官方链接），可完全离线运行。
