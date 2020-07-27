import { HOSTNAME } from '../constant'

export default {
  titleTemplate(title) {
    if (title) {
      return `${title} - Property Syariah`
    }
    return 'Property Syariah'
  },
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, minimum-scale=1'
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      property: 'og:image:alt',
      content: 'Property Syariah'
    },
    { property: 'fb:admins', content: 100003000286186 },
    {
      property: 'fb:app_id',
      content: 267913173658573
    },
    { property: 'fb:pages', content: 632770976865033 },
    {
      name: 'google-site-verification',
      content: 'uDWa7gsQlLiIe_Nk0fG5AvaW8vyEyOFuAZNDdmaZB4M'
    }
  ],
  link: [
    {
      rel: 'webmention',
      href: 'https://webmention.io/Property Syariah.id/webmention'
    },
    {
      rel: 'pingback',
      href: 'https://webmention.io/Property Syariah.id/xmlrpc'
    },
    {
      type: 'text/plain',
      rel: 'author',
      href: `${HOSTNAME}/humans.txt`
    },
    {
      rel: 'dns-prefetch',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'dns-prefetch',
      href: 'https://fonts.gstatic.com'
    },
    {
      rel: 'preconnect',
      href: 'https://d33wubrfki0l68.cloudfront.net'
    },
    {
      rel: 'preconnect',
      href: 'https://www.google-analytics.com'
    }
  ],
  // Taken from: https://github.com/manniL/lichter.io/blob/master/config/head.js
  __dangerouslyDisableSanitizers: ['script'],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'WebSite',
        name: 'Property Syariah',
        headline: 'A personal site of Property Syariah',
        description: 'A personal site of Property Syariah',
        about: 'A personal site of Property Syariah',
        keywords: 'property-syariah, Property Syariah',
        genre: ['Property Syariah', 'Website Property Syariah', 'Applikasi Properti Syariah', 'Properti', 'Syariah'],
        copyrightYear: new Date().getFullYear(),
        dateCreated: '2020-07-27',
        inLanguage: ['Bahasa Indonesia'],
        isAccessibleForFree: 'true',
        isFamilyFriendly: 'true',
        license: 'https://opensource.org/licenses/MIT',
        image: {
          '@type': 'imageObject',
          url: `${HOSTNAME}/icon.png`,
          width: '2739',
          height: '3102'
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${HOSTNAME}`
        },
        publisher: {
          '@type': 'Organization',
          name: 'Property Syariah',
          sameAs: 'https://www.facebook.com/nasrullah.web.id',
          logo: {
            '@type': 'imageObject',
            url: `${HOSTNAME}/icon.png`,
            width: '2739',
            height: '3102'
          }
        },
        creator: {
          '@type': 'Person',
          name: 'Nasrullah',
          alternateName: 'nazcules',
          birthDate: '1992-12-30',
          gender: { '@type': 'GenderType', alternateName: 'Male' },
          url: [`${HOSTNAME}`],
          sameAs: [
            'https://github.com/nazcules',
            'https://instagram.com/id.nasrullah_',
            'https://pinterest.com/nazcules',
            'https://plus.google.com/+nazcules',
            'https://twitter.com/nasrullahID',
            'https://www.facebook.com/nasrullah.web.id',
            'https://www.linkedin.com/in/nazcules/'
          ]
        }
      })
    }
  ]
}
