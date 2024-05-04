export default function sitemap() {
    return [
      {
        url: 'http://localhost:3000',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'http://localhost:3000/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'http://localhost:3000/faq',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'http://localhost:3000/service',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: 'http://localhost:3000/contact',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      }
    ]
  }