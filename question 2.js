let cons = function(version, channel, keyField) {
    this._version = version
    this._channel = channel
    this._keyField = keyField

    this.getVersion = function() {
        return this._version
    }
    this.setVersion = function(val) {
        this._version = val
    }
    this.getChannel = function() {
        return this._channel
    }
    this.setChannel = function(val) {
        this._channel = val
    }
    this.getKey_fields = function() {
        return this._keyField
    }
    this.setKey_fields = function(val) {
        this._keyField = val
    }
    this.getKeyFields = function(arr) {
        let res = []
        arr.forEach((element) => {
            this.setKey_fields(element.keyField)
            res.push(this.getKey_fields())
        })
        return res;
    }
}

const obj = [
    {version : 0, channel: 'A', keyField : 'key-1'}, 
    {version : 6, channel: 'B', keyField : 'key-2'}, 
    {version : 7, channel: 'C', keyField : 'key-3'}
]

let MetadataParser = new cons()
let res = MetadataParser.getKeyFields(obj)
console.log(res)
