var Vec2 = /** @class */ (function () {
    function Vec2(x, y) {
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Vec2.prototype, "magnitude", {
        get: function () {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        },
        enumerable: false,
        configurable: true
    });
    Vec2.prototype.add = function (vec) {
        var x = this.x + vec.x;
        var y = this.y + vec.y;
        return new Vec2(x, y);
    };
    Vec2.prototype.subtract = function (vec) {
        var x = this.x - vec.x;
        var y = this.y - vec.y;
        return new Vec2(x, y);
    };
    Vec2.prototype.mul = function (scalar) {
        var x = this.x * scalar;
        var y = this.y * scalar;
        return new Vec2(x, y);
    };
    Vec2.prototype.dot = function (vec) {
        return this.x * vec.x + this.y * vec.y;
    };
    return Vec2;
}());
var Vec3 = /** @class */ (function () {
    function Vec3(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Object.defineProperty(Vec3.prototype, "magnitude", {
        get: function () {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
        },
        enumerable: false,
        configurable: true
    });
    Vec3.prototype.add = function (vec) {
        var x = this.x + vec.x;
        var y = this.y + vec.y;
        var z = this.z + vec.z;
        return new Vec3(x, y, z);
    };
    Vec3.prototype.subtract = function (vec) {
        var x = this.x - vec.x;
        var y = this.y - vec.y;
        var z = this.z - vec.z;
        return new Vec3(x, y, z);
    };
    Vec3.prototype.mul = function (scalar) {
        var x = this.x * scalar;
        var y = this.y * scalar;
        var z = this.z * scalar;
        return new Vec3(x, y, z);
    };
    Vec3.prototype.dot = function (vec) {
        return this.x * vec.x + this.y * vec.y + this.z * vec.z;
    };
    Vec3.prototype.cross = function (vec) {
        var x = this.y * vec.z - this.z * vec.y;
        var y = this.z * vec.x - this.x * vec.z;
        var z = this.z * vec.y - this.y * vec.x;
        return new Vec3(x, y, z);
    };
    return Vec3;
}());
