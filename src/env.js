const env = new (function () {
  this.inDevelopment =
    !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
  this.inProduction = this.inDevelopment === false;
  this.baseURL = process.env.REACT_APP_BACKEND_URL;
})();
console.log('env', env);

export default env;
