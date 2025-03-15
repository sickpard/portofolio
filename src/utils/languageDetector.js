export function getLanguage(url) {
    return url.pathname.split('/')[1] || 'it';
    // Estrae il primo segmento del pathname, oppure restituisce 'it' come default
}

// credo sia cancellabile getPreferredLanguage
export function getPreferredLanguage(supportedLangs) {
    const browserLangs = navigator.languages || [navigator.language];
    
    for (const lang of browserLangs) {
        const code = lang.split(/[-_]/)[0].toLowerCase();
        if (supportedLangs.includes(code)) {
            return code;
        }
    }
    
    return 'en'; // Default a 'en' se nessuna corrispondenza
}
