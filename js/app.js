'use strict';

let mainSection = document.getElementById('mainSection');


let table = document.createElement('table');
mainSection.appendChild(table);

let workHouers = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
    '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];




// table header
function hoursHeader() {
    let workingHours = document.createElement('th');
    table.appendChild(workingHours);
    workingHours.textContent = '';


    for (let i = 0; i < workHouers.length; i++) {
        let workingHours = document.createElement('th');
        table.appendChild(workingHours);
        workingHours.textContent = workHouers[i];
    }
    workingHours = document.createElement('th');
    table.appendChild(workingHours);
    workingHours.textContent = 'totals';
}
///// table footer
function footer() {

    ///// total of all cites per hour
    let totalPerHourArray = [];
    for (let a = 0; a < 14; a++) {
        let totalPerHour = 0;
        totalPerHour += seattle.cookiesPerHourList[a]
        totalPerHour += tokyo.cookiesPerHourList[a]
        totalPerHour += dubai.cookiesPerHourList[a]
        totalPerHour += paris.cookiesPerHourList[a]
        totalPerHour += lima.cookiesPerHourList[a]
        totalPerHourArray.push(totalPerHour);
    }
    let tableFooter = document.createElement('tfoot');
    table.appendChild(tableFooter)
    tableFooter.id='totals';
    tableFooter.textContent = 'Totals';

    for (let i = 0; i < workHouers.length; i++) {
        let cityTotals = document.createElement('th');
        tableFooter.appendChild(cityTotals);
        cityTotals.textContent = `${totalPerHourArray[i]}`;
    }

    let allTotal=seattle.total;
    allTotal+=tokyo.total;
    allTotal+=dubai.total;
    allTotal+=paris.total;
    allTotal+=lima.total;


    let cityTotals = document.createElement('th');
    tableFooter.appendChild(cityTotals);
    cityTotals.textContent = `${allTotal}`;



}


///// object start

function City(name, minCustomers, maxCustomers) {
    this.cityName = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.average = 6.3,
        this.cookiesPerHourList = [];
    this.total = 0;
}

//// prototypes
City.prototype.customersPerHour = function (min, max) {
    return Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;

}
City.prototype.cookiesPerHour = function () {
    for (let i = 0; i < workHouers.length; i++) {
        let cookie = Math.floor(this.customersPerHour() * this.average);
        this.cookiesPerHourList.push(cookie);
        this.total = this.total + cookie;
    }
    ;
};



City.prototype.render = function () {
    let seattleSection = document.createElement('section');
    mainSection.appendChild(seattleSection);

    let workingHoursRow1 = document.createElement('tr');
    table.appendChild(workingHoursRow1);
    let workingHoursData = document.createElement('th');
    workingHoursData.textContent = ` ${this.cityName}`
    workingHoursRow1.appendChild(workingHoursData);

    for (let j = 0; j < this.cookiesPerHourList.length; j++) {
        let workingHoursData = document.createElement('td');
        workingHoursData.textContent = ` ${this.cookiesPerHourList[j]} cookies`
        workingHoursRow1.appendChild(workingHoursData);

    }
    workingHoursData = document.createElement('td');
    workingHoursData.textContent = ` ${this.total} cookies`
    workingHoursRow1.appendChild(workingHoursData);








}
// end of object and its prototypes 



// calling 


hoursHeader();


let seattle = new City('Seattle', 23, 65, 6.3, 0);
seattle.customersPerHour();
seattle.cookiesPerHour();
seattle.render();




let tokyo = new City('Tokyo', 3, 24, 1.2, 0);

tokyo.customersPerHour();
tokyo.cookiesPerHour();
tokyo.render();

let dubai = new City('Dubai', 11, 38, 3.7, 0);

dubai.customersPerHour();
dubai.cookiesPerHour();
dubai.render();


let paris = new City('Paris', 20, 38, 2.3, 0);

paris.customersPerHour();
paris.cookiesPerHour();
paris.render();


let lima = new City('Lima', 2, 16, 4.6, 0);

lima.customersPerHour();
lima.cookiesPerHour();
lima.render();



footer();

