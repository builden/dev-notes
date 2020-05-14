import { defineConfig } from 'dumi';

const alias = {};
let base;
let publicPath;
if (process.env.NODE_ENV === 'production') {
  base = '/dev-notes/';
  alias['./styles/tailwind.css'] = './styles/tailwind.min.css';
  publicPath = '/dev-notes/';
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
  extraBabelPlugins: [
    'babel-plugin-emotion',
    ['import', { libraryName: 'zarm', style: true }, 'zarm'],
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true, // `style: true` 会加载 less 文件, `style: 'css'`会加载css文件
      },
      'antd',
    ],
  ],
  exportStatic: {},
  alias,
  base,
  publicPath,
});
