import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

export const useMetaTags = (options: {
    title?: string
    description?: string
    image?: string
    keywords?: string[]
    noIndex?: boolean
} = {}) => {
    const { t } = useI18n()
    const route = useRoute()
    const { locale } = useI18n()

    const defaultTitle = 'Wojciech Falkowski - Web Developer'
    const defaultDescription = 'Professional web developer specializing in modern web technologies. Check out my portfolio and get in touch for your next project.'
    const defaultImage = '/og-image.jpg'
    const defaultKeywords = ['web developer', 'portfolio', 'frontend', 'backend', 'fullstack', 'vue', 'nuxt', 'typescript']

    const title = options.title || defaultTitle
    const description = options.description || defaultDescription
    const image = options.image || defaultImage
    const keywords = options.keywords || defaultKeywords

    const fullUrl = `https://wojciechfalkowski.pl${route.fullPath}`

    useHead({
        title,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: description },
            { name: 'keywords', content: keywords.join(', ') },
            { name: 'author', content: 'Wojciech Falkowski' },
            { name: 'robots', content: options.noIndex ? 'noindex, nofollow' : 'index, follow' },

            // Open Graph
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:image', content: image },
            { property: 'og:url', content: fullUrl },
            { property: 'og:type', content: 'website' },
            { property: 'og:site_name', content: 'Wojciech Falkowski' },
            { property: 'og:locale', content: locale.value },

            // Twitter Card
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: image },

            // Additional
            { name: 'theme-color', content: '#ffffff' },
            { name: 'google-site-verification', content: 'JrUxcS5USv5BauK-nJn-0ZJNHGf3-I0K8cVm-h-rY1U' },
        ],
        link: [
            { rel: 'icon', href: '/favicon.ico' },
            { rel: 'canonical', href: fullUrl },
        ],
        htmlAttrs: {
            lang: locale.value,
        },
    })
} 