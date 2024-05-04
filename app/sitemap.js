export default function sitemap() {
    return [
      {
        url: 'https://clovercreative.ae',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://clovercreative.ae/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://clovercreative.ae/faq',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'https://clovercreative.ae/service',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: 'https://clovercreative.ae/contact',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      }
    ]
  }
