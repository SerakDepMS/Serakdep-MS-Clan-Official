if (!sessionStorage.getItem('serakdep_access_granted')) {
  const isGithubPages = window.location.pathname.includes('/Serakdep-MS-Clan-Official/');
  const rootPrefix = isGithubPages ? '/Serakdep-MS-Clan-Official/' : '/';
  const pathParts = window.location.pathname.replace('/Serakdep-MS-Clan-Official/', '/').split('/').filter(Boolean);
  const depth = pathParts.length - 1;
  const relPrefix = depth > 0 ? '../'.repeat(depth) : './';
  window.location.href = relPrefix + 'index.html';
}