export const THEME_STORAGE_KEY = "gymos-theme";

/**
 * Runs before first paint so a stored dark theme never flashes light.
 * The design's own default is light, so that is the fallback.
 */
export const THEME_BOOTSTRAP = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)});document.documentElement.dataset.theme=t==="dark"?"dark":"light"}catch(e){document.documentElement.dataset.theme="light"}})()`;

/** The <html data-theme> attribute is the single source of truth. */
export function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // Private mode or blocked storage: the toggle still works for this visit.
  }
}
