const demo = [
  {
    id: 1,
    name: 'ОАО «ГЛАВМОССТРОЙ-ТЕЛЕВИК»',
    address: 'г Москва, ул Кедрова, д 21 к 1',
    inn: '77 45 000016',
    regDate: new Date(2002, 11, 2),
    ogrn: '1027700194961',
  },
  {
    id: 2,
    name: 'АО «СОЮЗДОРПРОЕКТ»',
    address: 'г Москва, Токмаков пер, д 9',
    inn: '77 45 000190',
    regDate: new Date(2002, 11, 2),
    ogrn: '1027700194961',
  },
  {
    id: 3,
    name: 'ЗАО «КОМПЛЕКС ОЭБ»',
    address: 'г Москва, ул Владимирская 2-я, д 62Б',
    inn: '77 45 000217',
    regDate: new Date(2002, 11, 2),
    ogrn: '1027700194961',
  },
];

export default (query?: string) => new Promise(resolve => setTimeout(resolve, 250, demo));
