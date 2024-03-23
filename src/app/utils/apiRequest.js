// This file contains all the functions that make requests to the Capital One API
var request = require('superagent');
request.get('http://api.reimaginebanking.com/atms?key=bd9126609a861aad34434bd43a577aa2').end(function(res){
    foo(res.status);
    bar(res.body); //do something
});



//create a customer
export function createCustomer(first, last, streetNum, streetName, city, state, zip) {
    return new Promise((resolve, reject) => {
        request.post('http://api.reimaginebanking.com/customers?key=bd9126609a861aad34434bd43a577aa2')
        .send({
            first_name: first,
            last_name: last,
            address: {
                street_number: streetNum,
                street_name: streetName,
                city: city,
                state: state,
                zip: zip
            }
        })
        .end(function(res){
            if (res.status === 201) {
                resolve(res.body);
            } else {
                reject(new Error('Failed to create customer'));
            }
        });
    });
    
}

//create an account
export function createAccount(type, nickname, rewards, balance) {
    return new Promise((resolve, reject) => {
        request.post('http://api.reimaginebanking.com/accounts?key=bd9126609a861aad34434bd43a577aa2')
        .send({
            type: type,
            nickname: nickname,
            rewards: rewards,
            balance: balance
        })
        .end(function(res){
            if (res.status === 201) {
                resolve(res.body);
            } else {
                reject(new Error('Failed to create account'));
            }
        });
    });
    
}

export function createWidthdrawal(id, amount) {
    return new Promise((resolve, reject) => {
        request.post('http://api.reimaginebanking.com/accounts/' + id + '/withdrawals?key=bd9126609a861aad34434bd43a577aa2')
        .send({
            medium: 'balance',
            amount: amount
        })
        .end(function(res){
            if (res.status === 201) {
                resolve(res.body);
            } else {
                reject(new Error('Failed to create withdrawal'));
            }
        });
    });
}

export function getAccount(id) {
    return new Promise((resolve, reject) => {
        request.get('http://api.reimaginebanking.com/accounts/' + id + '?key=bd9126609a861aad34434bd43a577aa2')
            .end(function(res) {
                if (res.status === 200) {
                    resolve(res.body);
                } else {
                    reject(new Error('Failed to get account'));
                }
            });
    });
}

export function setDeposit(id, amount) {
    return new Promise((resolve, reject) => {
        request.post('http://api.reimaginebanking.com/accounts/' + id + '/deposits?key=bd9126609a861aad34434bd43a577aa2')
        .send({
            medium: 'balance',
            amount: amount
        })
        .end(function(res){
            if (res.status === 201) {
                resolve(res.body);
            } else {
                reject(new Error('Failed to deposit'));
            }
        });
    });
}

export function getCustomerValues(id) {
    return new Promise((resolve, reject) => {
        request.get('http://api.reimaginebanking.com/customers/' + id + '?key=bd9126609a861aad34434bd43a577aa2')
            .end(function(res) {
                if (res.status === 200) {
                    resolve(res.body);
                } else {
                    reject(new Error('Failed to get customer values'));
                }
            });
    });
}

export function getDepositValues(id) {
    return new Promise((resolve, reject) => {
        request.get('http://api.reimaginebanking.com/accounts/' + id + '/deposits?key=bd9126609a861aad34434bd43a577aa2')
            .end(function(res) {
                if (res.status === 200) {
                    resolve(res.body);
                } else {
                    reject(new Error('Failed to get deposit values'));
                }
            });
    });
}

export function getWithdrawalValues(id) {
    return new Promise((resolve, reject) => {
        request.get('http://api.reimaginebanking.com/accounts/' + id + '/withdrawals?key=bd9126609a861aad34434bd43a577aa2')
            .end(function(res) {
                if (res.status === 200) {
                    resolve(res.body);
                } else {
                    reject(new Error('Failed to get withdrawal values'));
                }
            });
    });
}