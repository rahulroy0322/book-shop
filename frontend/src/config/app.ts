const TITLE = 'Reading Room';

const THEMES = ['dark', 'light', 'system'] as const;

const STORAGE_KEY = 'theme';
const DEFAULT_THEME: ThemeType = 'system';


type ThemeType = (typeof THEMES)[number];

export {
    TITLE,
    THEMES, STORAGE_KEY, DEFAULT_THEME,
};

export type {
    ThemeType
};
