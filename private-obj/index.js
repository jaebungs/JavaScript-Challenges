class User{
    constructor(username, password, age){
        let _username = '';
        let _password = '';
        let _age = 0;
        
    }

    get userName(){
        return 'Hidden';
    }

    set userName(username){
        this._userName = username;
    }
    
}

let username = Symbol('privateId');
let password = Symbol('hiddenPWD');
let age = Symbol(23);

const user2 = {
    [username]: 'user2',
    [password]: '12345',
    [age]: 40
}

// class private
let user1 = new User('classHidden Id', 'classHidden PWD', 30);
console.log(user1.userName);
console.log(user1._username);

// symbol private
console.log(user2.username, user2.password, user2.age);