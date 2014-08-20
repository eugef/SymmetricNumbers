function SymmetricNumber() {

    var number = 0;
    var symmetricExponent = -1;
    var symmetricPower = 0;
    var MAX_INT = Math.pow(2, 53);

    function reverse(value) {
        return parseInt(value.toString().split('').reverse().join(''), 10);
    }

    function summarize(value) {
        return value + reverse(value);
    }

    function isSymmetric(value) {
        return (value == reverse(value));
    }

    function calculateSymmetry() {
        symmetricExponent = number;
        symmetricPower = 0;
        while (!isSymmetric(symmetricExponent)) {
            symmetricExponent = summarize(symmetricExponent);
            symmetricPower ++;

            if (symmetricExponent >= MAX_INT) {
                symmetricPower = -1;
                return;
            }
        }
    }

    this.symmetricPower = function() {
        return symmetricPower;
    };

    this.symmetricExponent = function() {
        return symmetricExponent;
    };

    this.isSymmetric = function() {
        return isSymmetric(number);
    };

    this.setNumber = function(value) {
        number = value;

        calculateSymmetry()
    };
}
