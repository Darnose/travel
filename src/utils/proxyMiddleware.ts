import { createProxyMiddleware } from 'http-proxy-middleware';

const proxy = createProxyMiddleware({
  target: process.env.NEXT_PUBLIC_ATTRACTIONS_URL,
  changeOrigin: true,
  followRedirects: true,
  logLevel: 'debug',
  cookieDomainRewrite: 'localhost',
  onProxyRes: (proxyRes) => {
    if (!proxyRes.headers['set-cookie']) {
      return;
    }
    const adaptCookiesForLocalhost = proxyRes.headers[
      'set-cookie'
    ].map((cookie) => cookie.replace(/; secure/gi, '').replace(/; SameSite=None/gi, ''));

    // eslint-disable-next-line no-param-reassign
    proxyRes.headers['set-cookie'] = adaptCookiesForLocalhost;
  },
  onError: () => {},
});

export default proxy;