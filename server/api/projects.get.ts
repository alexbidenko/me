import zod from 'zod';
import type { ProjectType } from '#types';

const DATA = (<Omit<ProjectType, 'id'>[]>[
  {
    role: 'Frontend Developer',
    title: 'VK (Инфраструктура vk.com)',
    categories: [Category.FRONTEND, Category.DEVOPS],
    period: {
      from: ['2024', '05'],
      to: []
    },
    description: 'Разработка внутренних стандартов и инструментов для проекта vk.com, оптимизация производительности, сборки и контроля качества.',
    tasks: [
      'Оптимизация инструментов контроля качества кода',
      'Оптимизация производительности сайта',
      'Исследование и интеграция новых инструментов разработки',
      'Разработка внутренних инструментов и плагинов'
    ],
    stack: [
      'React',
      'TypeScript',
      'ESLint',
      'Oxc',
      'Effector',
      'PHP'
    ]
  },
  {
    role: 'Frontend Developer',
    title: 'Альфа-Банк — модуль маршрутов подписания',
    categories: [Category.FRONTEND],
    period: {
      from: ['2023', '08'],
      to: ['2024', '05']
    },
    description: 'Модуль настройки маршрутов подписания документов для юридических лиц и ИП с гибкими правилами и условиями.',
    tasks: [
      'Разработка интерфейсов модуля маршрутов подписания',
      'Проработка бизнес-логики маршрутов и условий',
      'Внедрение автотестирования',
      'Техническое обновление проекта и устранение проблем безопасности'
    ],
    stack: [
      'React',
      'Redux-Saga',
      'SCSS Modules',
      'TypeScript',
      'Kubernetes'
    ]
  },
  {
    role: 'Frontend Developer',
    title: 'Альфа-Банк — модуль конвертации валют',
    categories: [Category.FRONTEND],
    period: {
      from: ['2024', '02'],
      to: ['2024', '04']
    },
    description: 'Модуль просмотра и мониторинга конвертаций валют с отображением прогресса в реальном времени.',
    tasks: [
      'Разработка интерфейсов модуля конвертации валют',
      'Реализация бизнес-логики и отображения прогресса',
      'Разработка автотестов',
      'Подготовка новых сервисов для работы в Kubernetes'
    ],
    stack: [
      'React',
      'Redux Toolkit',
      'SCSS Modules',
      'TypeScript',
      'Kubernetes'
    ]
  },
  {
    role: 'Frontend Developer',
    title: 'RedCat — CRM система для риэлторов',
    categories: [Category.FRONTEND],
    period: {
      from: ['2024', '01'],
      to: ['2024', '03']
    },
    description: 'CRM система для управления агентством недвижимости, сотрудниками, ролями и правами доступа.',
    tasks: [
      'Разработка интерфейсов профиля агента',
      'Функционал редактирования информации об агенте и агентстве',
      'Управление данными сотрудников и настройка прав',
      'Оптимизация производительности и повышение UX'
    ],
    stack: [
      'React',
      'Next.js',
      'PropTypes'
    ]
  },
  {
    role: 'Open Source Author',
    title: 'NuxtStrictFetch (open source)',
    categories: [Category.FRONTEND],
    period: {
      from: [],
      to: []
    },
    description: 'Библиотека для строгого контроля HTTP-запросов в приложениях на Nuxt.js, улучшенная обработка ошибок и управление состоянием запросов.',
    tasks: [
      'Проектирование API библиотеки',
      'Реализация строгой валидации и обработки ошибок',
      'Упрощение управления состоянием запросов',
      'Поддержка стабильности и надежности приложений'
    ],
    stack: [
      'TypeScript',
      'Nuxt.js',
      'ofetch'
    ]
  },
  {
    role: 'Speaker (Frontend)',
    title: 'Конференция «Стачка»',
    categories: [Category.FRONTEND],
    period: {
      from: ['2023', '09'],
      to: ['2023', '09']
    },
    description: 'Доклад в секции Frontend по оптимизации скорости загрузки сайта.',
    tasks: [
      'Разбор оптимизации изображений и оптимизаторов изображений',
      'Настройка кэширования на разных уровнях',
      'Оптимизация рендеринга и доставки HTTP сообщений',
      'Оптимизация API запросов и настроек серверов'
    ],
    stack: []
  },
  {
    role: 'Frontend Developer',
    title: 'Альфа-Банк — административная панель сотрудников',
    categories: [Category.FRONTEND],
    period: {
      from: ['2023', '01'],
      to: []
    },
    description: 'Административные интерфейсы для работы с клиентами, машиночитаемыми доверенностями и настройкой доступности интерфейсов.',
    tasks: [
      'Разработка новых интерфейсов',
      'Внедрение новых возможностей',
      'Доработка автотестов',
      'Обновление технологического стека и подготовка сервисов к работе в Kubernetes'
    ],
    stack: [
      'React',
      'Redux',
      'SCSS Modules',
      'TypeScript',
      'Kubernetes'
    ]
  },
  {
    role: 'Frontend Developer',
    title: 'Альфа-Банк — профиль юридического лица',
    categories: [Category.FRONTEND],
    period: {
      from: ['2022', '05'],
      to: ['2022', '12']
    },
    description: 'Интерфейсы работы с данными организаций, доступами и электронными подписями.',
    tasks: [
      'Разработка интерфейсов профиля юридического лица',
      'Внедрение новых возможностей',
      'Доработка автотестирования',
      'Подготовка сервисов для работы в инфраструктуре банка'
    ],
    stack: [
      'React',
      'Redux',
      'SCSS Modules',
      'TypeScript'
    ]
  },
  {
    role: 'Fullstack Developer / DevOps Engineer',
    title: 'Инструмент управления сервером (собственный проект)',
    categories: [Category.FRONTEND, Category.BACKEND, Category.DEVOPS],
    period: {
      from: ['2021'],
      to: ['2022']
    },
    description: 'Панель управления Docker контейнерами, хранилищами и сетями, TLS, файловым менеджером и управлением веб-сервером.',
    tasks: [
      'Полный цикл разработки от идеи до готового продукта',
      'Проектирование архитектуры и функционала',
      'Реализация frontend и backend частей',
      'Настройка инфраструктуры и деплоя'
    ],
    stack: [
      'Docker',
      'Vue.js',
      'Gin',
      'Go',
      'Gorm',
      'PostgreSQL',
      'Redis',
      'Caddy'
    ]
  },
  {
    role: 'Fullstack Developer / DevOps Engineer',
    title: 'Чат технической поддержки',
    categories: [Category.FRONTEND, Category.BACKEND, Category.DEVOPS],
    period: {
      from: ['2022', '02'],
      to: ['2022', '02']
    },
    description: 'Чат технической поддержки с виджетом и административной частью, оптимизированный под любое количество пользователей.',
    tasks: [
      'Полная разработка чата с нуля',
      'Реализация ролевой модели и статусов клиентов',
      'Оптимизация под высокое количество пользователей'
    ],
    stack: [
      'Docker',
      'Next.js',
      'Socket.IO',
      'NestJS',
      'PostgreSQL'
    ]
  },
  {
    role: 'Frontend Developer',
    title: 'Gazprom — инструмент работы специалистов Data Science',
    categories: [Category.FRONTEND],
    period: {
      from: ['2020'],
      to: ['2021']
    },
    description: 'Инструмент контроля работы Data Science pipelines.',
    tasks: [
      'Разработка всех интерфейсов приложения',
      'Реализация всего функционала',
      'Подготовка сервиса к работе в инфраструктуре клиента'
    ],
    stack: [
      'React',
      'Redux',
      'TypeScript'
    ]
  },
  {
    role: 'Frontend Developer',
    title: 'Gazprom — проект «Интеллектуальная собственность»',
    categories: [Category.FRONTEND],
    period: {
      from: ['2019'],
      to: ['2020']
    },
    description: 'Система управления интеллектуальной собственностью.',
    tasks: [
      'Разработка всех интерфейсов и функционала',
      'Реализация генерации интерфейса для произвольного количества форм'
    ],
    stack: [
      'Vue.js',
      'Nuxt.js',
      'Pug',
      'SCSS',
      'Vuex',
      'Axios'
    ]
  },
  {
    role: 'Frontend Developer',
    title: 'Gazprom — управление производственной мощностью',
    categories: [Category.FRONTEND],
    period: {
      from: ['2019'],
      to: ['2021']
    },
    description: 'Цифровой инструмент поддержки решений по эффективности реализации проектов.',
    tasks: [
      'Разработка новых интерфейсов',
      'Реализация бизнес-задач',
      'Работа с графиками, диаграммами и документами',
      'Разработка панели администрирования'
    ],
    stack: [
      'TypeScript',
      'React',
      'MobX',
      'Emotion',
      'D3.js'
    ]
  },
  {
    role: 'Frontend Team Lead',
    title: 'Gazprom — мониторинг экономической эффективности портфелей',
    categories: [Category.FRONTEND],
    period: {
      from: ['2020'],
      to: []
    },
    description: 'Аналитическая система по расчету экономической эффективности проектов компании.',
    tasks: [
      'Разработка новых интерфейсов',
      'Реализация бизнес-задач',
      'Работа с графиками, диаграммами и документами',
      'Оптимизация проекта и подготовка к развертыванию у клиента'
    ],
    stack: [
      'React',
      'Redux',
      'D3.js',
      'TypeScript'
    ]
  },
  {
    role: 'Frontend Developer / DevOps Engineer',
    title: 'Panasonic — Lumix и Experience Fresh (промо сайты)',
    categories: [Category.FRONTEND, Category.DEVOPS],
    period: {
      from: ['2020'],
      to: ['2020']
    },
    description: 'Разработка промо-сайтов для продуктов Panasonic.',
    tasks: [
      'Разработка интерфейсов и бизнес-функционала',
      'Настройка системы генерации тестовых стендов'
    ],
    stack: [
      'Vue.js',
      'Nuxt.js',
      'Vuex',
      'Pug',
      'SCSS',
      'GraphQL',
      'Docker',
      'GitLab CI'
    ]
  },
  {
    role: 'Frontend Developer / DevOps Engineer',
    title: 'Panasonic — интернет-магазин Eplaza',
    categories: [Category.FRONTEND, Category.DEVOPS],
    period: {
      from: ['2020'],
      to: ['2020']
    },
    description: 'Официальный интернет-магазин техники Panasonic.',
    tasks: [
      'Разработка новых интерфейсов и бизнес-функционала',
      'Настройка системы генерации тестовых стендов',
      'Улучшение безопасности проекта'
    ],
    stack: [
      'Vue.js',
      'Nuxt.js',
      'Vuex',
      'Pug',
      'SCSS',
      'Docker',
      'GitLab CI',
      'Nginx'
    ]
  },
  {
    role: 'Frontend Team Lead / DevOps Engineer',
    title: 'Образовательная платформа Grow Heads',
    categories: [Category.FRONTEND, Category.DEVOPS],
    period: {
      from: ['2020', '10'],
      to: ['2022', '05']
    },
    description: 'Платформа для обучения современным IT-профессиям.',
    tasks: [
      'Решение архитектурных вопросов',
      'Координация и контроль команды',
      'Настройка генерации тестовых стендов',
      'Улучшение безопасности проекта'
    ],
    stack: [
      'React',
      'MobX',
      'SCSS Modules',
      'Docker',
      'Go',
      'GitLab CI',
      'PostgreSQL'
    ]
  },
  {
    role: 'Frontend Developer',
    title: 'Приложение для Smart TV (Tizen OS, WebOS)',
    categories: [Category.FRONTEND],
    period: {
      from: ['2020', '08'],
      to: ['2020', '08']
    },
    description: 'Приложение онлайн-кинотеатра для Smart TV.',
    tasks: [
      'Разработка приложения для Tizen OS и WebOS'
    ],
    stack: [
      'JavaScript',
      'Webpack',
      'Tizen Framework',
      'WebOS Framework'
    ]
  },
  {
    role: 'Frontend Developer / DevOps Engineer',
    title: 'Mail.ru — сайт премии и библиотеки AI кейсов',
    categories: [Category.FRONTEND, Category.DEVOPS],
    period: {
      from: ['2020', '09'],
      to: ['2021', '03']
    },
    description: 'Сайт премии и библиотеки кейсов по использованию искусственного интеллекта.',
    tasks: [
      'Разработка проекта и сложной анимации',
      'Внедрение новых функций',
      'Оптимизация производительности и поддержки старых браузеров'
    ],
    stack: [
      'Vue.js',
      'Nuxt.js',
      'Vuex',
      'Pug',
      'SCSS',
      'GSAP'
    ]
  },
  {
    role: 'Fullstack Developer',
    title: 'Сервис работы с интернетом вещей в автомобилях',
    categories: [Category.FRONTEND, Category.BACKEND],
    period: {
      from: ['2017'],
      to: ['2019', '03']
    },
    description: 'Сервис мониторинга состояния автомобиля по датчикам и управления сервисными услугами.',
    tasks: [
      'Разработка интерфейсов для работы с датчиками и автомобилями',
      'Разработка API для мобильного приложения',
      'Разработка интерфейсов работы с IoT устройствами'
    ],
    stack: [
      'Angular',
      'Laravel',
      'PostgreSQL'
    ]
  }
]).map<ProjectType>((item, index) => ({ ...item, id: index + 1 }));

export default defineEventHandler(async (event) => {
  const { category } = await getValidatedQuery(event, zod.object({ category: zod.enum(Category) }).parse);

  return DATA.filter((item) => item.categories.includes(category));
});
