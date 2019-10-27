class Init {
  constructor(port, host, url) {
    this.port = port;
    this.host = host;
    this.url = url;
  }

  getPort() {
    return this.port;
  }

  getHost() {
    return this.host;
  }

  getUrl() {
    return this.url;
  }
}

module.exports = Init
