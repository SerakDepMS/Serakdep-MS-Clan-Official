(function() {
  if (sessionStorage.getItem('serakdep_access_granted')) return;


  var path = window.location.pathname;
  var isGithubPages = path.includes('/Serakdep-MS-Clan-Official/');
  var basePath = isGithubPages ? '/Serakdep-MS-Clan-Official/' : '/';
  

  var relativePath = path.replace(basePath, '').split('/').filter(Boolean);
  var depth = relativePath.length;
  

  var prefix = depth > 0 ? '../'.repeat(depth) : './';
  

  window.location.href = prefix + 'index.html';
})();