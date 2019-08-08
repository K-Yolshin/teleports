const demo = [
  {
    id: 1,
    name: 'ИП Иванов Александр',
    address: 'г Москва',
    inn: '56 38 069251 04',
    regDate: new Date(2002, 11, 2),
    ogrn: '1027700194961',
  },
  {
    id: 2,
    name: 'ИП Иванов Дмитрий',
    address: 'г Москва, поселение Воскресенское, поселок Воскресенское',
    inn: '50 31 165655 91',
    regDate: new Date(2002, 11, 2),
    ogrn: '1027700194961',
  },
  {
    id: 3,
    name: 'ИП Иванов Евгений',
    address: 'г Москва',
    inn: '77 18 906340 03',
    regDate: new Date(2002, 11, 2),
    ogrn: '1027700194961',
  },
];

export default (query?: string) => new Promise(resolve => setTimeout(resolve, 250, demo));
