class Storage {
  private nameStorage = "react_route_app";
  constructor() {}

  initStorage() {
    window.localStorage.setItem(this.nameStorage, "value");
  }
}

export default Storage;
