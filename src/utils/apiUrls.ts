
const BASE_URL = 'https://min-api.cryptocompare.com/data';

export const API_URLS = {
  COINLIST: `${BASE_URL}/all/coinlist`,
  PRICE: `${BASE_URL}/price`,
  HISTORICAL: `${BASE_URL}/historical`,
  NEWS: `${BASE_URL}/news`,
  TOP: `${BASE_URL}/top/totalvolfull?limit=10&tsym=USD`
};

export const API_PARAMS = {
  currency: 'USD',
  limit: 10, 
};