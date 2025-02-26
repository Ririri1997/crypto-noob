
const BASE_URL = 'https://min-api.cryptocompare.com/';

export const IMG_URL = 'https://cryptocompare.com';


export const API_URLS = {
  COINLIST: `${BASE_URL}data/all/coinlist`,
  PRICE: `${BASE_URL}data/price`,
  HISTORICAL: `${BASE_URL}data/v2/histoday`,
  // NEWS: `${BASE_URL}data/news`,
  NEWS: `${BASE_URL}/news/v2/news/?lang=EN`,
  TOP: `${BASE_URL}data/top/totalvolfull?limit=10&tsym=USD`
};

export const API_PARAMS = {
  currency: 'USD',
  limit: 10, 
};
