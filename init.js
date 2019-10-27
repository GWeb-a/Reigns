/*
* @Author: Gianni Giudice
* @Date:   2019-10-27 13:17:31
* @Last Modified by:   Gianni Giudice
* @Last Modified time: 2019-10-27 13:18:12
*/

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
