# 安全

## XSS(Cross Site Script 跨站脚本)

- 值在页面中注入我们的 js 脚本，执行非法操作
- 在表单中传入脚本，服务器返回到前端后在某个页面展示
- React 已经有效的解决了这类问题

## CSRF(Cross-Site Request Forgery 跨站请求伪造)

- 跨站伪造用户的请求，模拟用户的操作
- 原网站登录后存储了 cookie 信息，B 网站调用原网站的 API 请求，因为 cookie 会自动带上去

### 防御

1. 验证 Referrer 字段
2. 自定义 Token
