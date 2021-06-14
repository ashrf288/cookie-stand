'use strict';

let mainSection = document.getElementById('mainSection');


let seattle = {
    cityName: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    average: 6.3,
    workHouers: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm',
        '3pm', '4pm', '5pm', '6pm', '7pm,'],
    cookiesPerHourList: [],

    customersPerHour: function (min, max) {
        return Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
    },
    cookiesPerHour: function () {
        for (let i = 0; i < this.workHouers.length; i++) {
            this.cookiesPerHourList.push(Math.floor(this.customersPerHour() * this.average));
        }
    },

    render: function () {
        let seattleSection = document.createElement('section');
        mainSection.appendChild(seattleSection);
        let cityBio = document.createElement('p');
        cityBio.textContent = `${this.cityName}`
        seattleSection.appendChild(cityBio);
        let salesList = document.createElement('ul');
        seattleSection.appendChild(salesList);
        for (let j = 0; j < this.cookiesPerHourList.length; j++) {
            let hourSales = document.createElement('li');
            hourSales.textContent = `${this.workHouers[j]} : ${this.cookiesPerHourList[j]} cookies`
            salesList.appendChild(hourSales);
        }






    }


}


let tokyo = {
    cityName: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    average: 1.2,
    workHouers: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm',
        '3pm', '4pm', '5pm', '6pm', '7pm,'],
    cookiesPerHourList: [],

    customersPerHour: function (min, max) {
        return Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
    },
    cookiesPerHour: function () {
        for (let i = 0; i < this.workHouers.length; i++) {
            this.cookiesPerHourList.push(Math.floor(seattle.customersPerHour() * this.average));
        }
    },

    render: function () {
        let tokyoSection = document.createElement('section');
        mainSection.appendChild(tokyoSection);
        let cityBio = document.createElement('p');
        cityBio.textContent = `${this.cityName}`
        tokyoSection.appendChild(cityBio);
        let salesList = document.createElement('ul');
        tokyoSection.appendChild(salesList);
        for (let j = 0; j < this.cookiesPerHourList.length; j++) {
            let hourSales = document.createElement('li');
            hourSales.textContent = `${this.workHouers[j]} : ${this.cookiesPerHourList[j]} cookies`
            salesList.appendChild(hourSales);
        }






    }


}
let dubai = {
    cityName: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    average: 3.7,
    workHouers: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm',
        '3pm', '4pm', '5pm', '6pm', '7pm,'],
    cookiesPerHourList: [],

    customersPerHour: function (min, max) {
        return Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
    },
    cookiesPerHour: function () {
        for (let i = 0; i < this.workHouers.length; i++) {
            this.cookiesPerHourList.push(Math.floor(this.customersPerHour() * this.average));
        }
    },

    render: function () {
        let dubaiSection = document.createElement('section');
        mainSection.appendChild(dubaiSection);
        let cityBio = document.createElement('p');
        cityBio.textContent = `${this.cityName}`
        dubaiSection.appendChild(cityBio);
        let salesList = document.createElement('ul');
        dubaiSection.appendChild(salesList);
        for (let j = 0; j < this.cookiesPerHourList.length; j++) {
            let hourSales = document.createElement('li');
            hourSales.textContent = `${this.workHouers[j]} : ${this.cookiesPerHourList[j]} cookies`
            salesList.appendChild(hourSales);
        }






    }


}
let paris = {
    cityName: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    average: 2.3,
    workHouers: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm',
        '3pm', '4pm', '5pm', '6pm', '7pm,'],
    cookiesPerHourList: [],

    customersPerHour: function (min, max) {
        return Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
    },
    cookiesPerHour: function () {
        for (let i = 0; i < this.workHouers.length; i++) {
            this.cookiesPerHourList.push(Math.floor(this.customersPerHour() * this.average));
        }
    },

    render: function () {
        let paris = document.createElement('section');
        mainSection.appendChild(paris);
        let cityBio = document.createElement('p');
        cityBio.textContent = `${this.cityName}`
        paris.appendChild(cityBio);
        let salesList = document.createElement('ul');
        paris.appendChild(salesList);
        for (let j = 0; j < this.cookiesPerHourList.length; j++) {
            let hourSales = document.createElement('li');
            hourSales.textContent = `${this.workHouers[j]} : ${this.cookiesPerHourList[j]} cookies`
            salesList.appendChild(hourSales);
        }






    }


}
let lima = {
    cityName: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    average: 4.6,
    workHouers: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm',
        '3pm', '4pm', '5pm', '6pm', '7pm,'],
    cookiesPerHourList: [],

    customersPerHour: function (min, max) {
        return Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
    },
    cookiesPerHour: function () {
        for (let i = 0; i < this.workHouers.length; i++) {
            this.cookiesPerHourList.push(Math.floor(this.customersPerHour() * this.average));
        }
    },

    render: function () {
        let limaSection = document.createElement('section');
        mainSection.appendChild(limaSection);
        let cityBio = document.createElement('p');
        cityBio.textContent = `${this.cityName}`
        limaSection.appendChild(cityBio);
        let salesList = document.createElement('ul');
        limaSection.appendChild(salesList);
        for (let j = 0; j < this.cookiesPerHourList.length; j++) {
            let hourSales = document.createElement('li');
            hourSales.textContent = `${this.workHouers[j]} : ${this.cookiesPerHourList[j]} cookies`
            salesList.appendChild(hourSales);
        }



    }


}



seattle.cookiesPerHour(seattle.customersPerHour());
seattle.render();


tokyo.cookiesPerHour(tokyo.customersPerHour());
tokyo.render();


dubai.cookiesPerHour(dubai.customersPerHour());
dubai.render();


paris.cookiesPerHour(paris.customersPerHour());
paris.render();


lima.cookiesPerHour(lima.customersPerHour());
lima.render();


