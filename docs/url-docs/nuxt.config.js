import theme from '@nuxt/content-theme-docs'

export default theme({
  head: {
    meta: [
      { name: 'google-site-verification', content: "VqBuI6LAOEm-RHyKbbLnmhReR-Tk04T9foBKmr9m_LM" }
    ]
  },
  docs: {
    primaryColor: '#3448c5'
  },
  pwa: {
    manifest: {
      name: 'Cloudinary URL Builder'
    }
  }
})
