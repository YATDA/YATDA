const LOCAL_STORAGE = window.localStorage;
const JSON = window.JSON;

const StorageUtils = {
  localStorageGet: function(key) {
    return JSON.parse(LOCAL_STORAGE.getItem(key));
  },

  localStorageSet: function(key, value) {
    LOCAL_STORAGE.setItem(key, JSON.stringify(value));
  },
};

export default StorageUtils;
