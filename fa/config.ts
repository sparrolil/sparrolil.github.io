import { DefaultTheme } from "vitepress";

export const config: DefaultTheme.Config = {
  nav: [
    { text: "خانه", link: "/fa/" },
    { text: "راهنمایی‌ها", link: "/fa/guides/" },
    { text: "بلاگ", link: "/fa/blog/" },
  ],
  sidebar: [
    {
      text: "راه‌اندازی و بهینه‌سازی سرور",
      items: [
        {
          text: "نصب هسته XanMod و فعال‌سازی BBRv۳",
          link: "/fa/guides/install-xanmod.md",
        },
        {
          text: "تغییر پورت پیش‌فرض SSH",
          link: "/fa/guides/change-ssh-port.md",
        },
      ],
    },
  ],
  footer: {
    message:
      'Released under the <a href="https://github.com/sparrolil/sparrolil.github.io/blob/main/LICENSE">MIT License</a>',
    copyright:
      'Copyright © 2024-present <a href="https://github.com/sparrolil">sparrow</a>',
  },
  editLink: {
    pattern: "https://github.com/sparrolil/sparrolil.github.io/edit/main/:path",
    text: "ویرایش و بهبود این صفحه در گیت‌هاب",
  },
  outlineTitle: "محتوای صفحه",
  returnToTopLabel: "بازگشت به بالا",
  docFooter: {
    prev: "صفحه قبل",
    next: "صفحه بعد",
  },
  sidebarMenuLabel: "منو",
};

export default config;
