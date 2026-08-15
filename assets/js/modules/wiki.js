export let wikiData = { html: '', css: '', js: '' };
export let wikiSection = 'html';

export async function loadWikiData(wikiContent, showWikiFn) {
  const WIKI_URL = 'https://api.npoint.io/47b284f068e1c936d147';
  try {
    const response = await fetch(WIKI_URL);
    if (!response.ok) throw new Error('Error al cargar la enciclopedia');
    wikiData = await response.json();
    showWikiFn(wikiSection, wikiContent, wikiData);
  } catch (error) {
    console.error(error);
    wikiContent.innerHTML = '<p>Error al cargar la enciclopedia. Intenta recargar la página.</p>';
  }
}

export function showWiki(section, wikiContent, data = wikiData) {
  wikiSection = section;
  wikiContent.innerHTML = data[section] || '<p>Sección no encontrada.</p>';
  document.querySelectorAll('.wiki-tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`.wiki-tab[data-wiki="${section}"]`).classList.add('active');
}