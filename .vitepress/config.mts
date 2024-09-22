import { DefaultTheme, LocaleSpecificConfig, defineConfig } from "vitepress";
import englishThemeConfig from "../en/config";
import persianThemeConfig from "../fa/config";

type ThemeConfig = LocaleSpecificConfig<DefaultTheme.Config> & {
  label: string;
  link?: string;
};

const persianLang: ThemeConfig = {
  title: "یادداشت‌ها",
  description: "",
  label: "فارسی",
  lang: "fa",
  dir: "rtl",
  link: "/",
  themeConfig: persianThemeConfig,
};

const englishLang: ThemeConfig = {
  title: "Notes",
  description: "",
  label: "English",
  lang: "en",
  dir: "ltr",
  link: "/",
  themeConfig: englishThemeConfig,
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "notes",
  description: "my notes",
  cleanUrls: true,
  lang: "fa",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  locales: {
    fa: { ...persianLang, link: "/fa/" },
    en: { ...englishLang, link: "/en/" },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    i18nRouting: true,
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/sparrolil/sparrolil.github.io",
      },
    ],
    search: {
      provider: "local",
    },
  },
  sitemap: {
    hostname: "https://sparrolil.github.io",
  },
});
