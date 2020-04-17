import { defineConfig } from 'dumi';

const alias = {};
if (process.env.NODE_ENV === 'production') {
  alias['./styles/tailwind.css'] = './styles/tailwind.min.css';
}

export default defineConfig({
  title: '开发笔记',
  mode: 'site',
  logo:
    'https://admin.tmp.heychen.cn/assets/c020821bfc9d174d6958eab6b98dd559.jpg',
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    // {
    //   title: 'GitHub',
    //   path: 'https://github.com/umijs/dumi',
    // },
  ],
  // more config: https://d.umijs.org/config
  menus: {
    '/css': [
      {
        title: '布局',
        children: [
          'css/layout/holy-grail-layout.md',
          'css/layout/vertical-center.md',
        ],
      },
      {
        title: '文本',
        children: ['css/text/ellipsis.md', 'css/text/user-select.md'],
      },
    ],
  },
  alias,
  extraBabelPlugins: [
    'babel-plugin-emotion',
    ['import', { libraryName: 'zarm', style: true }],
  ],
});
