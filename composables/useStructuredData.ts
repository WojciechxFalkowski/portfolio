import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

type SchemaType = 'Person' | 'WebSite' | 'BreadcrumbList'

interface Translation {
  name?: string
  description?: string
  jobTitle?: string
  home?: string
  [key: string]: string | undefined
}

interface StructuredDataOptions {
  type: SchemaType
  data: Record<string, any>
  translations?: {
    [key: string]: Translation
  }
}

export const useStructuredData = (options: StructuredDataOptions) => {
  const { locale } = useI18n()
  const route = useRoute()

  const baseUrl = 'https://wojciechfalkowski.pl'
  const translations = options.translations || {}

  const getTranslatedText = (key: string, defaultValue: string) => {
    return translations[locale.value]?.[key] || defaultValue
  }

  const generateSchema = () => {
    switch (options.type) {
      case 'Person':
        return {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: getTranslatedText('name', 'Wojciech Falkowski'),
          url: baseUrl,
          sameAs: [
            'https://github.com/wojciechfalkowski',
            'https://www.linkedin.com/in/wojciechfalkowski/',
          ],
          jobTitle: getTranslatedText('jobTitle', 'Web Developer'),
          worksFor: {
            '@type': 'Organization',
            name: 'Freelance',
          },
          description: getTranslatedText('description', 'Professional web developer specializing in modern web technologies.'),
          ...options.data,
        }
      case 'WebSite':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: getTranslatedText('name', 'Wojciech Falkowski - Portfolio'),
          url: baseUrl,
          description: getTranslatedText('description', 'Professional portfolio website of Wojciech Falkowski, a web developer specializing in modern web technologies.'),
          inLanguage: locale.value,
          ...options.data,
        }
      case 'BreadcrumbList':
        const pathSegments = route.fullPath.split('/').filter(Boolean)
        const breadcrumbs = pathSegments.map((segment, index) => {
          const translatedName = getTranslatedText(`breadcrumb_${segment}`, segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '))
          return {
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@id': `${baseUrl}/${pathSegments.slice(0, index + 1).join('/')}`,
              name: translatedName,
            },
          }
        })

        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': baseUrl,
                name: getTranslatedText('home', 'Home'),
              },
            },
            ...breadcrumbs,
          ],
          ...options.data,
        }
    }
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(generateSchema()),
      },
    ],
  })
} 