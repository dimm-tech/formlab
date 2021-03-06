export const state = () => ({
  department: [{
      value: 'Безопасность',
      num: '26'
    },
    {
      value: 'Промышленное оборудование',
      num: '25'
    },
    {
      value: 'Медицина',
      num: '24'
    },
    {
      value: 'Автоэлектроника',
      num: '11'
    },
    {
      value: 'Бытовая техника',
      num: '10'
    },
    {
      value: 'Вендинг и самобслуживание',
      num: '8'
    },
    {
      value: 'Климатическое оборудование',
      num: '7'
    },
    {
      value: 'Система связи',
      num: '7'
    },
    {
      value: 'Строительство и ремонт',
      num: '7'
    },
    {
      value: 'Освещение',
      num: '6'
    },
    {
      value: 'Лабораторное оборудование',
      num: '5'
    },
    {
      value: 'Платежные системы',
      num: '5'
    },
    {
      value: 'Система доступа',
      num: '5'
    },
    {
      value: 'Компьютеры',
      num: '4'
    },
    {
      value: 'Неразрушающий контроль',
      num: '4'
    },
    {
      value: 'Оборудование',
      num: '4'
    },
  ],
  menu: [{
      title: 'Портфолио',
      link: 'portfolio'
    },
    {
      title: 'Блог',
      link: 'projects'
    },
    {
      title: 'Услуги',
      link: 'services'
    },
    {
      title: 'Цены',
      link: 'price'
    },
    {
      title: 'Команда',
      link: 'team'
    },
    {
      title: 'Контакты',
      link: 'contacts'
    },
  ],
  projects: [{
      img: '../assets/img/projects-aurica.jpg',
      category: 'Медицинская техника',
      name: 'Слуховые аппараты Aurica',
      desc: 'Дизайн и эргономическое решение компактных слуховых аппаратов BTE-13 и RIC-10.'
    },
    {
      img: '../assets/img/projects-struna.jpg',
      category: 'Системы безопасности и спецустройства',
      name: 'Блок охранной сигнализации «Струна»',
      desc: 'Дизайн и эргономическое решение компактных слуховых аппаратов BTE-13 и RIC-10.'
    },
    {
      img: '../assets/img/projects-nabat.jpg',
      category: 'Системы безопасности и спецустройства',
      name: 'Многоцелевой интеллектуальный терминал связи «НАБАТ®»',
      desc: 'Дизайн и эргономическое решение компактных слуховых аппаратов BTE-13 и RIC-10.'
    },
    {
      img: '../assets/img/projects-under_constr.jpg',
      category: 'Электроника',
      name: 'Караоке-машина AST, v.4',
      desc: 'Дизайн и эргономическое решение компактных слуховых аппаратов BTE-13 и RIC-10.'
    },
    {
      img: '../assets/img/projects-lobzik.jpg',
      category: 'Другие проекты',
      name: 'Разработка дизайна электролобзика',
      desc: 'Дизайн и эргономическое решение компактных слуховых аппаратов BTE-13 и RIC-10.'
    },
    {
      img: '../assets/img/projects-aurica.jpg',
      category: 'Медицинская техника',
      name: 'Слуховые аппараты Aurica',
      desc: 'Дизайн и эргономическое решение компактных слуховых аппаратов BTE-13 и RIC-10.'
    },
    {
      img: '../assets/img/projects-struna.jpg',
      category: 'Системы безопасности и спецустройства',
      name: 'Блок охранной сигнализации «Струна»',
      desc: 'Дизайн и эргономическое решение компактных слуховых аппаратов BTE-13 и RIC-10.'
    },
    {
      img: '../assets/img/projects-nabat.jpg',
      category: 'Системы безопасности и спецустройства',
      name: 'Многоцелевой интеллектуальный терминал связи «НАБАТ®»',
      desc: 'Дизайн и эргономическое решение компактных слуховых аппаратов BTE-13 и RIC-10.'
    },
    {
      img: '../assets/img/projects-under_constr.jpg',
      category: 'Электроника',
      name: 'Караоке-машина AST, v.4',
      desc: 'Дизайн и эргономическое решение компактных слуховых аппаратов BTE-13 и RIC-10.'
    },
    {
      img: '../assets/img/projects-lobzik.jpg',
      category: 'Другие проекты',
      name: 'Разработка дизайна электролобзика',
      desc: 'Дизайн и эргономическое решение компактных слуховых аппаратов BTE-13 и RIC-10.'
    },
  ]
})

export const actions = {
  open() {
    document.querySelector('nav').classList.add('open')
    document.addEventListener('click', this.dispatch('clickListener'))
  },
  close() {
    document.querySelector('nav').classList.remove('open')
    document.removeEventListener('click', this.dispatch('clickListener'))
  },
  toggle() {
    if (document.querySelector('nav').classList.contains('open')) {
      this.dispatch('close')
    } else {
      this.dispatch('open')
    }
  },
  clickListener(context) {
    console.log(context);
    // if (!document.querySelector('header').contains(document.querySelector('.first-section'))) {
    //   //  this.$refs.Burger.close()
    //   this.dispatch('close')
    // }
  },
}