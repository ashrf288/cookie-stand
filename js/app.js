


let mainSection = document.getElementById('mainSection');
let addStand=document.getElementById('addStand');

let table = document.createElement('table');
mainSection.appendChild(table);

let workHouers = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
    '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];




function formSubmtion(event){
    event.preventDefault();
  let newName=event.target.city.value;
  let newMinCustomer=event.target.minCustomers.value;
  let newMaxCustomer=event.target.maxCustomers.value;
  let newAverage=event.target.average.value;
  let newCity = new City(newName, newMinCustomer, newMaxCustomer, newAverage, 0);
  newCity.cookiesPerHour();
newCity.render();

 
  
     

}


addStand.addEventListener("submit",formSubmtion);








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
function makeTableFooter() {
   
    let tr = document.createElement('tr');
    table.appendChild(tr);
  
    let th1 = document.createElement('th');
    tr.appendChild(th1);
    th1.textContent = 'Totals';

    let theTotal = 0;
    let totalPerHour = 0;
    
    for(let i = 0; i < workHouers.length; i++) {
      totalPerHour = 0;
      for(let j = 0; j < City.allCookies.length; j++) {

        let total = City.allCookies[j].cookiesPerHourList[i];
        totalPerHour += total;
        theTotal += total;
      }
      let tableHead2 = document.createElement('th');
      tr.appendChild(tableHead2);
      tableHead2.textContent = totalPerHour;
    }
  
    let tableHead3 = document.createElement('th');
    tr.appendChild(tableHead3);
    tableHead3.textContent = theTotal;
  }
  


    


///// object start

function City(name, minCustomers, maxCustomers,avg) {
    this.cityName = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.average = avg,
    this.cookiesPerHourList = [];
    this.total = 0;

    City.allCookies.push(this)


    
}
City.allCookies = [];

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
    return this.total;
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
    makeTableFooter();







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













  
  
  
  