// import type {Config} from '@docusaurus/types';
// import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

const config = {
  title: 'Free Tallinn Running Tours',
  tagline: 'Come run with us in Tallinn and see places that normal tourists do not see!',
  favicon: 'img/run-icon.png',

  // Set the production url of your site here
  url: 'https://tallinnrunningtours.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'isaac-chung', // Usually your GitHub org/user name.
  projectName: 'tallinnrunningtours.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [
            remarkMath
          ],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          readingTime: ({content, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Tallinn Running Tours`,
            createFeedItems: async (params) => {
              const {blogPosts, siteConfig, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // Keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 20),
                siteConfig,
                outDir: rest.outDir,
              });
            },
          },
          remarkPlugins: [
            remarkMath
          ],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-S9GM86JB37',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    metadata: [
      {name: 'keywords', content: 'running, tallinn, tours, free, club, estonia, running tours, running club'},
    ],
    image: 'img/snow-run.png',
    navbar: {
      title: 'Tallinn Running Tours',
      logo: {
        alt: 'icon',
        src: 'img/run-icon.png',
      },
      items: [
        {to: '/docs/routes', label: 'Routes', position: 'left'},
        {to: '/faq', label: 'FAQ', position: 'left'},
        {
          label: 'Tip Jar',
          href: '/tipjar',
          position: 'right',
        },
        {
          href: 'https://wa.me/37258972730',
          label: 'Book Now via WhatsApp',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
       {
          title: 'Social',
          items: [
            {
              label: 'Google',
              href: 'https://g.co/kgs/imqSxmJ',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/profile.php?id=61555150562314',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Tip Jar',
              href: '/tipjar',
            },
            {
              label: 'Contact Us',
              to: 'mailto:tallinnrunningtours@gmail.com',
            },
            {
              label: 'WhatsApp',
              href: 'https://wa.me/37258972730',
            },
            {
              label: 'Terms and Conditions',
              href: '/tncs',
            },
          ],
        },
      ],
      // Existing copyright...
      copyright: `Copyright © ${new Date().getFullYear()} Tallinn Running Tours`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

export default config;