export const themeList = [
  { name: 'Monokai', value: 'monokai', icon: 'fa-moon' },
  { name: 'Dracula', value: 'dracula', icon: 'fa-skull' },
  { name: 'Solarized', value: 'solarized', icon: 'fa-sun' },
  { name: 'Nord', value: 'nord', icon: 'fa-snowflake' },
  { name: 'Material', value: 'material', icon: 'fa-palette' },
  { name: 'Default', value: 'default', icon: 'fa-circle' }
];

export function changeTheme(theme, editors, currentThemeObj) {
  currentThemeObj.value = theme;
  Object.values(editors).forEach(ed => ed.setOption('theme', theme));
}