var Collection = function() {
    this.collection = [];
};
Collection.prototype.length = function() {
    return this.collection.length;
};
Collection.prototype.push = function(item) {
    this.collection.push(item);
};
Collection.prototype.first = function() {
    if(!this.collection.length) return undefined;
    return this.collection[0];
};
Collection.prototype.pop = function() {
    if(!this.collection.length) return;
    this.collection.pop();
};
