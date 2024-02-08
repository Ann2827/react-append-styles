import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const openGitHub = () => window.open("https://github.com/Ann2827/react-append-styles", "_self");

const config: Config = {
  title: 'React append styles',
  tagline: 'A small library for working with css in js.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ann2827.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/react-append-styles/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ann2827', // Usually your GitHub org/user name.
  projectName: 'react-append-styles', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    localeConfigs: {
      en: { label: 'EN' },
      ru: { label: 'RU' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({versionDocsDirPath, docPath}) =>
            `https://github.com/Ann2827/react-append-styles/tree/main/${versionDocsDirPath}/${docPath}`,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.png',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          position: 'left',
          // docId: 'introduction',
          sidebarId: 'sidebarDoc',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          // docId: 'classes',
          sidebarId: 'sidebarApi',
          position: 'left',
          label: 'API',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          position: 'right',
          type: 'html',
          value: '<div class="header-github-link" onclick="window.open(\'https://github.com/Ann2827/react-append-styles\', \'_self\')"></div>',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} GitHub project Ann2827. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
