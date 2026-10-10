# 松特工程机械外贸独立站 — 使用说明

**Guangzhou SongTe Engineering Machinery CO.,LTD — English Trade Website**

站点根目录：`E:\目录模板资料&资料图&logo\SongTe-Website\`

---

## 一、如何打开（本地预览）

方式 A：直接用浏览器打开 `index.html`（双击即可，站点完全离线可用，无需联网）。

方式 B：本地起 HTTP 服务（推荐，效果等同线上）：
```
cd E:\目录模板资料&资料图&logo\SongTe-Website
python -m http.server 8080
```
然后浏览器访问 `http://localhost:8080`。

## 二、如何部署上线（任选其一）

1. **静态托管 / 对象存储**：将整站所有文件原样上传（阿里云 OSS、腾讯云 COS、Cloudflare Pages、Vercel、Netlify 均可），无需数据库与后端。
2. **自有服务器 / Nginx**：把整站文件放入网站根目录即可；Apache/Nginx 开箱即用。
3. **虚拟主机（cPanel 等）**：整站文件放入 `public_html`，直接访问域名。

> 注意：部署时务必保持目录结构完整（`index.html`、`products.html`、`about.html`、`contact.html`、`product/`、`assets/`），不要只上传单个 HTML 文件，否则图片与页面跳转失效。

## 三、站点结构

| 文件 | 内容 |
|---|---|
| `index.html` | 首页：公司主视觉、核心数据、20 个产品分类、公司优势、精选产品、询盘 CTA |
| `products.html` | 产品中心：全部分类 + 名称筛选 |
| `product/*.html` | 63 个产品详情页：图片、型号、描述、规格表、询盘按钮、同类推荐 |
| `about.html` | 关于我们：公司简介、实力、证书、技术图解、出口市场 |
| `contact.html` | 联系我们：询盘表单、WhatsApp 按钮、微信/WhatsApp 二维码、联系方式 |
| `assets/` | 全站样式（css）、交互脚本（js）、产品图/品牌图（images） |

## 四、联系方式（已内置在网站中）

- 主邮箱：icylin@songtemachine.cn（询盘表单邮件发至此）
- 备用邮箱：songtemachine04@hotmail.com
- 电话 / WhatsApp / 微信：+86 181 4282 7405
- 地址：No. 119, Building 1, Xiangyi Technology Town, Jishan Xinlu Road, Zhuji Street, Tianhe District, Guangzhou City, Guangdong Province

## 五、产品数据说明（重要）

- 产品数据文件：`data/product_data.json`（20 个分类、63 个产品，全部来自公司目录/报价模板真实资料）。
- 资料中未提供的型号、规格、适用机型，页面上如实显示 **"To be confirmed"**，未做任何编造。
- 如需修改产品内容：编辑 `product_data.json` 后，同步更新对应 `product/*.html` 页面（页面为按数据生成的静态文件）。

## 六、交付前已核验

- 全站 2509 条本地链接/图片引用无断链；77 个页面与资源本地 HTTP 测试全部返回 200。
- 桌面（1440×900）与手机（390×844）布局均已截图检查，无空白页、无裂图、无横向溢出。
- 全站无外部脚本/样式依赖（唯一外链是 WhatsApp 官方链接），可完全离线运行。
