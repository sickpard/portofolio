(function() {
    const supportedLangs = JSON.parse(document.documentElement.dataset.supportedLangs)
    const defaultLang = 'it'
    
    const preferredLang = (function() {
        const browserLangs = navigator.languages || [navigator.language]
        
        for (const lang of browserLangs) {
            const code = lang.split(/[-_]/)[0].toLowerCase()
            if (supportedLangs.includes(code)) {
                return code
            }
        }
        return defaultLang
    })()

    
    if (window.location.pathname === '/' && !sessionStorage.getItem('redirected')) {
        const pathPrefix = preferredLang === defaultLang ? '' : `/${preferredLang}`
        
        sessionStorage.setItem('redirected', 'true')
        
        window.location.href = `${pathPrefix}/`
    }
})()