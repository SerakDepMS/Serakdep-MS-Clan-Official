
const SERAKDEP_CONFIG = {

  APIS: {
    EVENTOS: 'https://api.npoint.io/b7d27b89b7da43de6683',
    NOTICIAS: 'https://api.npoint.io/c7935f8e8b0b09b0b07b',
    GEOLOCATION: 'https://ipapi.co/json/',
  },


  EMAIL: {
    SERVICE_ID: 'service_sjea029', 
    TEMPLATE_ID: 'template_bso642c',
    PUBLIC_KEY: 'KZquan0PhqC35uDYw',
  },


  EXTERNAL_APIS: {
    GIPHY_KEY: 'dc6zaTOxFJmzC',
  },


  CACHE: {
    GEOLOCATION_DURATION: 24 * 60 * 60 * 1000,
    API_UPDATE_INTERVAL: 12000,
  },


  RETRY: {
    MAX_ATTEMPTS: 3,
    DELAY_MS: 1000,
  },


  DEBUG: false,
};


function getConfig(path, defaultValue = null) {
  const keys = path.split('.');
  let value = SERAKDEP_CONFIG;
  
  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) return defaultValue;
  }
  
  return value;
}


function debugLog(...args) {
  if (SERAKDEP_CONFIG.DEBUG) {
    console.log('[SERAKDEP DEBUG]', ...args);
  }
}
