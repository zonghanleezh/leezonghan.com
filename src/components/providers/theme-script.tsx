import { ACTIVE_THEME, THEME_STORAGE_KEY, THEMES } from "@/configs/theme.config"

/**
 * Blocking script that applies saved theme before page renders
 * This prevents FOUC (Flash of Unstyled Content)
 * Must be placed in <head> before any content renders
 */
const ThemeScript = () => {
  // Serialize themes object to inject into script
  const themesJSON = JSON.stringify(THEMES)

  // Generate the script content as a string
  const themeScript = `
    (function() {
      try {
        const STORAGE_KEY = '${THEME_STORAGE_KEY}';
        const DEFAULT_THEME = '${ACTIVE_THEME}';
        const THEMES = ${themesJSON};

        // Get saved theme from localStorage
        const savedTheme = localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;

        // Set data-theme attribute immediately
        document.documentElement.setAttribute('data-theme', savedTheme);

        // Determine if dark mode is active
        // Check next-themes storage first, then system preference
        const nextThemesKey = 'theme';
        const savedDarkMode = localStorage.getItem(nextThemesKey);
        let isDark = false;

        if (savedDarkMode === 'dark') {
          isDark = true;
        } else if (savedDarkMode === 'light') {
          isDark = false;
        } else {
          // If system mode or not set, check system preference
          isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        // Apply CSS variables immediately
        if (THEMES[savedTheme]) {
          const theme = THEMES[savedTheme];
          const colors = isDark ? theme.dark : theme.light;
          const root = document.documentElement;

          Object.entries(colors).forEach(([key, value]) => {
            // Convert camelCase to kebab-case
            const cssVarName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
            root.style.setProperty('--' + cssVarName, value);
          });
        }
      } catch (e) {
        console.error('Failed to apply saved theme:', e);
      }
    })();
  `

  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
      suppressHydrationWarning
    />
  )
}

export default ThemeScript
