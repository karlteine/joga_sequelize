// helpers/helpers.js
module.exports = {
    ifCond: function (v1, operator, v2, options) {
        let result = false;

        switch (operator) {
            case '==':
                result = (v1 == v2);
                break;
            case '===':
                result = (v1 === v2);
                break;
            case '!=':
                result = (v1 != v2);
                break;
            case '!==':
                result = (v1 !== v2);
                break;
            case '<':
                result = (v1 < v2);
                break;
            case '<=':
                result = (v1 <= v2);
                break;
            case '>':
                result = (v1 > v2);
                break;
            case '>=':
                result = (v1 >= v2);
                break;
            default:
                result = false;
                break;
        }

        if (result) {
            return options.fn(this);
        } else {
            return options.inverse ? options.inverse(this) : '';
        }
    }
};
