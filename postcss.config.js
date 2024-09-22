module.exports = {
  plugins: {
    "postcss-rtlcss": {
      processUrls: false,
      rules: [
        {
          selector: ':where([dir="rtl"])',
          rtl: true,
        },
        {
          selector: ':where([dir="ltr"])',
          rtl: false,
        },
      ],
    },
  },
};
