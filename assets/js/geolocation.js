(function() {
  'use strict';

  const GEO_STORAGE_KEY = 'serakdep_geo_data';
  const GEO_CACHE_DURATION = 24 * 60 * 60 * 1000;


  const COUNTRY_MAP = {

    'US': '🇺🇸 Estados Unidos', 'CA': '🇨🇦 Canadá', 'MX': '🇲🇽 México',

    'GT': '🇬🇹 Guatemala', 'BZ': '🇧🇿 Belice', 'SV': '🇸🇻 El Salvador',
    'HN': '🇭🇳 Honduras', 'NI': '🇳🇮 Nicaragua', 'CR': '🇨🇷 Costa Rica',
    'PA': '🇵🇦 Panamá',

    'CU': '🇨🇺 Cuba', 'DO': '🇩🇴 República Dominicana', 'JM': '🇯🇲 Jamaica',
    'HT': '🇭🇹 Haití', 'PR': '🇵🇷 Puerto Rico',

    'CO': '🇨🇴 Colombia', 'VE': '🇻🇪 Venezuela', 'EC': '🇪🇨 Ecuador',
    'PE': '🇵🇪 Perú', 'BO': '🇧🇴 Bolivia', 'CL': '🇨🇱 Chile',
    'AR': '🇦🇷 Argentina', 'PY': '🇵🇾 Paraguay', 'UY': '🇺🇾 Uruguay',
    'BR': '🇧🇷 Brasil', 'GY': '🇬🇾 Guyana', 'SR': '🇸🇷 Surinam',

    'ES': '🇪🇸 España', 'PT': '🇵🇹 Portugal', 'FR': '🇫🇷 Francia',
    'IT': '🇮🇹 Italia', 'DE': '🇩🇪 Alemania', 'AT': '🇦🇹 Austria',
    'CH': '🇨🇭 Suiza', 'BE': '🇧🇪 Bélgica', 'NL': '🇳🇱 Países Bajos',
    'LU': '🇱🇺 Luxemburgo', 'GB': '🇬🇧 Reino Unido', 'IE': '🇮🇪 Irlanda',

    'SE': '🇸🇪 Suecia', 'NO': '🇳🇴 Noruega', 'DK': '🇩🇰 Dinamarca',
    'FI': '🇫🇮 Finlandia', 'IS': '🇮🇸 Islandia',

    'PL': '🇵🇱 Polonia', 'CZ': '🇨🇿 República Checa', 'SK': '🇸🇰 Eslovaquia',
    'HU': '🇭🇺 Hungría', 'RO': '🇷🇴 Rumania', 'BG': '🇧🇬 Bulgaria',
    'GR': '🇬🇷 Grecia', 'HR': '🇭🇷 Croacia', 'SI': '🇸🇮 Eslovenia',
    'EE': '🇪🇪 Estonia', 'LV': '🇱🇻 Letonia', 'LT': '🇱🇹 Lituania',
    'UA': '🇺🇦 Ucrania', 'RU': '🇷🇺 Rusia',

    'AU': '🇦🇺 Australia', 'NZ': '🇳🇿 Nueva Zelanda',
    'JP': '🇯🇵 Japón', 'KR': '🇰🇷 Corea del Sur', 'CN': '🇨🇳 China',
    'IN': '🇮🇳 India', 'ZA': '🇿🇦 Sudáfrica', 'NG': '🇳🇬 Nigeria',
    'EG': '🇪🇬 Egipto', 'IL': '🇮🇱 Israel', 'AE': '🇦🇪 Emiratos Árabes'
  };


  const TIMEZONE_COUNTRY = {

    'America/New_York': 'US', 'America/Chicago': 'US', 'America/Denver': 'US',
    'America/Los_Angeles': 'US', 'America/Anchorage': 'US', 'Pacific/Honolulu': 'US',
    'America/Toronto': 'CA', 'America/Vancouver': 'CA',
    'America/Mexico_City': 'MX', 'America/Tijuana': 'MX', 'America/Cancun': 'MX',

    'America/Guatemala': 'GT', 'America/Belize': 'BZ',
    'America/El_Salvador': 'SV', 'America/Tegucigalpa': 'HN',
    'America/Managua': 'NI', 'America/Costa_Rica': 'CR',
    'America/Panama': 'PA', 'America/Havana': 'CU',
    'America/Santo_Domingo': 'DO', 'America/Jamaica': 'JM',
    'America/Port-au-Prince': 'HT', 'America/Puerto_Rico': 'PR',

    'America/Bogota': 'CO', 'America/Caracas': 'VE',
    'America/Guayaquil': 'EC', 'America/Lima': 'PE',
    'America/La_Paz': 'BO', 'America/Santiago': 'CL',
    'America/Argentina/Buenos_Aires': 'AR', 'America/Asuncion': 'PY',
    'America/Montevideo': 'UY', 'America/Sao_Paulo': 'BR',
    'America/Guyana': 'GY', 'America/Paramaribo': 'SR',

    'Europe/Madrid': 'ES', 'Europe/Lisbon': 'PT', 'Europe/Paris': 'FR',
    'Europe/Rome': 'IT', 'Europe/Berlin': 'DE', 'Europe/Vienna': 'AT',
    'Europe/Zurich': 'CH', 'Europe/Brussels': 'BE', 'Europe/Amsterdam': 'NL',
    'Europe/Luxembourg': 'LU', 'Europe/London': 'GB', 'Europe/Dublin': 'IE',

    'Europe/Stockholm': 'SE', 'Europe/Oslo': 'NO', 'Europe/Copenhagen': 'DK',
    'Europe/Helsinki': 'FI', 'Atlantic/Reykjavik': 'IS',

    'Europe/Warsaw': 'PL', 'Europe/Prague': 'CZ', 'Europe/Bratislava': 'SK',
    'Europe/Budapest': 'HU', 'Europe/Bucharest': 'RO', 'Europe/Sofia': 'BG',
    'Europe/Athens': 'GR', 'Europe/Zagreb': 'HR', 'Europe/Ljubljana': 'SI',
    'Europe/Tallinn': 'EE', 'Europe/Riga': 'LV', 'Europe/Vilnius': 'LT',
    'Europe/Kiev': 'UA', 'Europe/Moscow': 'RU',

    'Australia/Sydney': 'AU', 'Pacific/Auckland': 'NZ',
    'Asia/Tokyo': 'JP', 'Asia/Seoul': 'KR', 'Asia/Shanghai': 'CN',
    'Asia/Kolkata': 'IN', 'Africa/Johannesburg': 'ZA',
    'Africa/Lagos': 'NG', 'Africa/Cairo': 'EG', 'Asia/Jerusalem': 'IL',
    'Asia/Dubai': 'AE'
  };


  const TIMEZONE_MAP = {
    'America/Mexico_City': 'GMT-6', 'America/Tijuana': 'GMT-8',
    'America/Cancun': 'GMT-5', 'America/Argentina/Buenos_Aires': 'GMT-3',
    'America/Bogota': 'GMT-5', 'America/Lima': 'GMT-5',
    'America/Santiago': 'GMT-3', 'America/New_York': 'GMT-5',
    'America/Chicago': 'GMT-6', 'America/Los_Angeles': 'GMT-8',
    'Europe/Madrid': 'GMT+1', 'Europe/London': 'GMT+0',
    'Europe/Berlin': 'GMT+1', 'Europe/Paris': 'GMT+1',
    'Europe/Rome': 'GMT+1', 'Europe/Amsterdam': 'GMT+1',
    'Europe/Lisbon': 'GMT+0', 'Asia/Tokyo': 'GMT+9',
    'Asia/Shanghai': 'GMT+8', 'Asia/Seoul': 'GMT+9',
    'Australia/Sydney': 'GMT+10', 'Pacific/Auckland': 'GMT+12'
  };

  async function fetchGeoData(attempt = 1) {
    try {
      const r = await fetch('https://ipapi.co/json/');
      if (!r.ok) {
        throw new Error(`API returned status ${r.status}`);
      }
      
      let d;
      try {
        d = await r.json();
      } catch (parseError) {
        throw new Error('Invalid JSON response from geolocation API');
      }
      
      const geo = {
        country: d.country_name || '',
        countryCode: d.country_code || '',
        timezone: d.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: navigator.language || 'es',
        timestamp: Date.now()
      };

      if (!geo.countryCode && geo.timezone) {
        geo.countryCode = TIMEZONE_COUNTRY[geo.timezone] || '';
        geo.country = COUNTRY_MAP[geo.countryCode] ? COUNTRY_MAP[geo.countryCode].replace(/[^\w\s]/g, '').trim() : '';
      }
      localStorage.setItem(GEO_STORAGE_KEY, JSON.stringify(geo));
      return geo;
    } catch (e) {

      const MAX_RETRIES = 2;
      if (attempt <= MAX_RETRIES) {
        const delay = Math.pow(2, attempt - 1) * 500; 
        console.warn(`Reintentando geolocalización en ${delay}ms (intento ${attempt}/${MAX_RETRIES})`);
        await new Promise(res => setTimeout(res, delay));
        return fetchGeoData(attempt + 1);
      }
      

      console.error('Error al obtener geolocalización:', e.message);
      const fallback = {
        country: '', countryCode: '',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: navigator.language || 'es',
        timestamp: Date.now()
      };

      if (fallback.timezone) {
        fallback.countryCode = TIMEZONE_COUNTRY[fallback.timezone] || '';
        fallback.country = COUNTRY_MAP[fallback.countryCode] ? COUNTRY_MAP[fallback.countryCode].replace(/[^\w\s]/g, '').trim() : '';
      }
      localStorage.setItem(GEO_STORAGE_KEY, JSON.stringify(fallback));
      return fallback;
    }
  }

  async function getGeoData() {
    const cached = localStorage.getItem(GEO_STORAGE_KEY);
    if (cached) {
      const p = JSON.parse(cached);
      if (Date.now() - p.timestamp < GEO_CACHE_DURATION) return p;
    }
    return await fetchGeoData();
  }

  function setSelectValue(select, value, text) {
    if (!select) return;
    let opt = select.querySelector(`option[value="${value}"]`);
    if (!opt && value) {
      opt = document.createElement('option');
      opt.value = value;
      opt.textContent = text || value;
      select.appendChild(opt);
    }
    if (opt) {
      select.value = value;
      select.dataset.autoFilled = 'true';
    }
  }

  function replaceWithDisplay(select, displayText, flag) {
    if (!select || select.dataset.displayCreated) return;
    select.style.cssText = 'position:absolute;opacity:0;pointer-events:none;height:0;width:0;';
    const div = document.createElement('div');
    div.className = 'geo-display-field';
    div.innerHTML = `${flag ? flag + ' ' : ''}${displayText} <i class="fas fa-lock" style="margin-left:8px;color:var(--bamboo-gold);font-size:0.8rem;" title="Detectado automáticamente"></i>`;
    select.parentNode.insertBefore(div, select.nextSibling);
    select.dataset.displayCreated = 'true';
  }

  function autoFill(geo) {
    const countryCode = geo.countryCode || (geo.timezone ? (TIMEZONE_COUNTRY[geo.timezone] || '') : '');
    const countryVal = countryCode in COUNTRY_MAP ? countryCode : 'OT';
    const tzVal = TIMEZONE_MAP[geo.timezone] || geo.timezone;
    const flag = COUNTRY_MAP[countryVal] ? COUNTRY_MAP[countryVal].split(' ')[0] : '🌍';
    const displayCountry = COUNTRY_MAP[countryVal]
      ? COUNTRY_MAP[countryVal].replace(/^[^\w\s]+/, '').trim()
      : geo.country || 'Otro país';
    const displayTz = tzVal || geo.timezone;

    ['country', 'admin-country', 'colab-country'].forEach(id => {
      const f = document.getElementById(id);
      if (f && f.tagName === 'SELECT' && !f.dataset.autoFilled) {
        setSelectValue(f, countryVal, displayCountry);
        replaceWithDisplay(f, displayCountry, flag);
      }
    });

    ['timezone', 'admin-timezone', 'colab-timezone'].forEach(id => {
      const f = document.getElementById(id);
      if (f && f.tagName === 'SELECT' && !f.dataset.autoFilled && tzVal) {
        setSelectValue(f, tzVal, displayTz);
        replaceWithDisplay(f, displayTz, '🕒');
      }
    });
  }

  async function init() {
    const geo = await getGeoData();
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      autoFill(geo);
      window.dispatchEvent(new CustomEvent('serakdep:geoReady', { detail: geo }));
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        autoFill(geo);
        window.dispatchEvent(new CustomEvent('serakdep:geoReady', { detail: geo }));
      });
    }
    window.__serakdepGeo = geo;
    console.log('Geolocalización aplicada:', geo);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();