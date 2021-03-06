exports.fix = function (node) {
    if (
        node.type === 'BinaryExpression'
        && (node.operator === '==' || node.operator === '!=')
        && node.right.value !== null
    ) {
        var util = require('../util');
        var token = node.left.endToken.next;
        while (token) {
            if (token.type === 'Punctuator' && token.value === node.operator) {
                break;
            }
            token = token.next;
        }
        token.value += '=';
    }
};
