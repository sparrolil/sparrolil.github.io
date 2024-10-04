export const config = {
  nav: [
    { text: "Home", link: "/en/" },
    { text: "Guides", link: "/en/guides/" },
    { text: "Blog", link: "/en/blog/" },
  ],
  sidebar: [
    {
      text: "VPS Setup and Optimization",
      items: [
        {
          text: "Installing XanMod Kernel and Enabling BBRv3",
          link: "/en/guides/install-xanmod.md",
        },
        {
          text: "Changing the Default SSH Port",
          link: "/en/guides/change-ssh-port.md",
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
    text: "Edit and improve this page on GitHub",
  },
};

export default config;
