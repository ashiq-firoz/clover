export default function robots() {
    return {
      rules: [
        {
          userAgent: 'Googlebot',
          allow: ['/','/faq','/contact','/about','/service'],
          disallow: ['/private/'],
        },
        {
          userAgent: ['Applebot', 'Bingbot'],
          allow: ['/','/faq','/contact','/about','/service'],
          disallow: ['/'],
        },
      ],
      sitemap: 'http://localhost:3000/sitemap.xml',
    }
  }