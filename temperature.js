class Temperature {
    get temp() {
        return this._temp;
    }

    set temp(value) {
        this._temp = value;
    }

    constructor(temp, code) {
        this._temp = temp;
        this._code = code;
    }


    get code() {
        return this._code;
    }

    set code(value) {
        this._code = value;
    }

    switchF() {
        return `value: ${1.8 * this._temp + 32} F`;
    }

    switchC(){
        return `value: ${(this._temp -32)/1.8} C`;
    }
}

let val = new Temperature(25,"f");
function getTemp(val) {
    switch (val._code.toUpperCase()) {
        case "F":
            console.log(val.switchF());
            break;
        case "C":
            console.log(val.switchC());
            break;
    }
}

getTemp(val);