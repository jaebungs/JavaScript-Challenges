// JavaScript increase array size by itself unlike Java or other lower language.
// This is to show how it can be done under the hood.

class ArrayList extends Array{
    constructor(capacity =2){
        super(capacity);
        this.data = [];
        this._size = 0;
        this._capacity = capacity;
    }

    increaseCapcity(){
        this._capacity *= 2;
    }

    appendValue(value){
        if (this._size >= this._capacity){
            this.increaseCapcity()
        }

        this.data[this._size++] = value;
        // equalt to this.data[this._size] = value;
        // this._size++
        return this
    }

    remove(idx){
        for (let i = idx; i < this._size - 1; i++) {
            this.data[i] = this.data[i+1];
        }
        this.data[--this._size] = null;
        // equal to this._size --
        // this.data[this._size] = null
    }

    insert(idx = this._size, value) {
        if(this._size >= this._capacity ){
            this.increaseCapcity();
        }
        if (idx === this._size){
            this.data[idx] = value;
        }
        for (let i = this._size; i > idx; i--){
            this.data[i] = this.data[i-1];
        }
        this.data[idx] = value;
        this._size++;

    }

    get dataSize() {
        return this._size;
    }

    set dataSize(value) {
        this._size = value;
    }

    get dataCapacity() {
        return this._capacity;
    }

}

const array = new Array(10);
console.log(array);
console.log(array.length);
console.log(array.size);
console.log('-------------');

const testArrayList = new ArrayList();
console.log(testArrayList);
testArrayList.dataSize = 4
console.log(testArrayList.dataSize);

console.log('-------------');
const arrayList = new ArrayList();
arrayList.appendValue(3).appendValue(5).appendValue(20).appendValue(4).appendValue(1);
console.log(arrayList.data);
console.log(arrayList.dataSize);
console.log(arrayList.dataCapacity);
arrayList.remove(1);
console.log(arrayList.data);
arrayList.insert(5,7);
arrayList.insert(5,7);
arrayList.insert(5,7);
arrayList.insert(8,2);
arrayList.insert(6,14);

console.log(arrayList.data);
console.log(arrayList.dataSize);
console.log(arrayList.dataCapacity);