import apiRequest from './MainApi';

const getIds = () => {
  const body = {
    action: 'get_ids',
  };
  const ids = apiRequest(body);
  return ids;
};

const getItems = (ids) => {
  const body = {
    action: 'get_items',
    params: { "ids": ids },
  };
  const items = apiRequest(body);
  return items;
  
};

const getFieldsBrand = () => {
  const body = {
    action: 'get_fields',
    params: {field: 'brand'},
  };
  const items = apiRequest(body);
  return items;
};

const getFieldsPrice = () => {
  const body = {
    action: 'get_fields',
    params: {field: 'price'},
  };
  const items = apiRequest(body);
  return items;
};

const getFieldsProduct = () => {
  const body = {
    action: 'get_fields',
    params: {field: 'product'},
  };
  const items = apiRequest(body);
  return items;
};

const getFilterBrand = (value) => {
  const body = {
    action: 'filter',
    params: {brand: value},
  };
  const items = apiRequest(body);
  return items;
};

const getFilterPrice = (value) => {
  const body = {
    action: 'filter',
    params: {price: value},
  };
  const items = apiRequest(body);
  return items;
};

const getFilterProduct = (value) => {
  const body = {
    action: 'filter',
    params: {product: value},
  };
  const items = apiRequest(body);
  return items;
};


export { getIds, getItems, getFieldsBrand, getFieldsProduct, getFieldsPrice, getFilterProduct, getFilterPrice, getFilterBrand };