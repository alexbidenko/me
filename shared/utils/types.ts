export enum Category {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  DEVOPS = 'devops',
}

export enum Role {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  DEVOPS = 'devops',
  DESIGN = 'design',
  TEAM_LEAD = 'teamLead',
  ARCHITECT = 'architect',
  SPEAKER = 'speaker',
  SECURITY = 'security',
}

export enum ShowCase {
  ASMY = 'asmy',
  AI_RUSSIAN = 'ai_russian',
}

export enum Technology {
  ANGULAR = 'angular',
  ANGULAR_JS = 'angular_js',
  AXIOS = 'axios',
  CADDY = 'caddy',
  D3 = 'd3',
  DOCKER = 'docker',
  ESLINT = 'eslint',
  EFFECTOR = 'effector',
  EMOTION = 'emotion',
  FRAMER_MOTION = 'framer_motion',
  GSAP = 'gsap',
  GIN = 'gin',
  GITLAB_CI = 'gitlab_ci',
  GO = 'go',
  GORM = 'gorm',
  GRAPH_QL = 'graph_ql',
  JAVA_SCRIPT = 'java_script',
  KUBERNETES = 'kubernetes',
  LARAVEL = 'laravel',
  MARKDOWN = 'markdown',
  MOBX = 'mobx',
  MY_SQL = 'my_sql',
  NAIVE_UI = 'naive_ui',
  NEST = 'nest',
  NEXT = 'next',
  NGINX = 'nginx',
  NUXT = 'nuxt',
  OXC = 'oxc',
  PHP = 'php',
  POSTGRE_SQL = 'postgre_sql',
  PRIME_REACT = 'prime_react',
  PROP_TYPES = 'prop_types',
  PUG = 'pug',
  REACT = 'react',
  REDIS = 'redis',
  REDUX = 'redux',
  REDUX_TOOLKIT = 'redux_toolkit',
  REDUX_SAGA = 'redux_saga',
  SCSS = 'scss',
  STYLE_MODULES = 'scss_modules',
  SOCKET_IO = 'socket_io',
  TIZEN_FRAMEWORK = 'tizen_framework',
  TYPE_SCRIPT = 'type_script',
  VUE = 'vue',
  VUEX = 'vuex',
  WEBOS_FRAMEWORK = 'webos_framework',
  WEBPACK = 'webpack',
  NUXT_STRICT_FETCH = 'nuxt_strict_fetch',
  OFETCH = 'ofetch',
}

type PeriodType = [string] | [string, string];

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  roles: Role[];
  categories: Category[];
  stack: Technology[];
  tasks: string[];
  period?: {
    from: PeriodType;
    to: PeriodType;
  };
};
