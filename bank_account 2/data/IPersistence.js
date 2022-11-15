module.exports = class IPersistence {
    constructor() {
        if (this.constructor === IPersistence) {
            throw new TypeError("Abstract class 'IPersistence' cannot be instantiated.");
        }
    }
    create(element) {}
    read() {}
    update(element) {}
    delete(element) {}
}