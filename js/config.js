/**
 * CONFIGURACIÓN CENTRALIZADA
 * Todas las URLs y claves de API en un solo lugar
 * Facilita actualizaciones y mantenimiento
 */

const SERAKDEP_CONFIG = {
  // APIs Externas
  APIS: {
    EVENTOS: 'https://api.npoint.io/b7d27b89b7da43de6683',
    NOTICIAS: 'https://api.npoint.io/c7935f8e8b0b09b0b07b',
    GEOLOCATION: 'https://ipapi.co/json/',
  },

  // Servicios de Email
  EMAIL: {
    SERVICE_ID: 'service_id', // Reemplazar con el ID real si es necesario
    TEMPLATE_ID: 'template_id', // Reemplazar con el ID real si es necesario
    PUBLIC_KEY: 'KZquan0PhqC35uDYw', // EmailJS Public Key
  },

  // APIs de Terceros (solo para desarrollo, usar variables de entorno en producción)
  EXTERNAL_APIS: {
    GIPHY_KEY: 'dc6zaTOxFJmzC', // ⚠️ SOLO PARA DESARROLLO - Usar env vars en producción
  },

  // Configuración de Caché
  CACHE: {
    GEOLOCATION_DURATION: 24 * 60 * 60 * 1000, // 24 horas
    API_UPDATE_INTERVAL: 12000, // 12 segundos
  },

  // Reintentos
  RETRY: {
    MAX_ATTEMPTS: 3,
    DELAY_MS: 1000,
  },

  // Logs
  DEBUG: false, // Cambiar a true para logs detallados
};

/**
 * Función auxiliar para obtener configuración con fallback
 */
function getConfig(path, defaultValue = null) {
  const keys = path.split('.');
  let value = SERAKDEP_CONFIG;
  
  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) return defaultValue;
  }
  
  return value;
}

/**
 * Log condicional según DEBUG
 */
function debugLog(...args) {
  if (SERAKDEP_CONFIG.DEBUG) {
    console.log('[SERAKDEP DEBUG]', ...args);
  }
}
