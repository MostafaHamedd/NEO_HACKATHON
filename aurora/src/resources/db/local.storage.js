class LocalStorage {
    constructor() {
        localStorage.setItem("classes", null);
    }

    setStorage(object) {
        localStorage.setItem("classes", JSON.stringify(object) );
    } 

    getStorage() {
        localStorage.getItem("classes");
    }
}