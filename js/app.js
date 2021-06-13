'use strict';

console.log ('hi');

let mainSection=document.getElementById('mainSection');


let seattle={
    cityName: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    average:6.3,
    workHouers:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm',
    '3pm','4pm','5pm','6pm','7pm,'],
    cookiesPerHourList:[],

    customersPerHour:function(min, max) {
        return Math.random() * (seattle.maxCustomers - seattle.minCustomers) + seattle.minCustomers;
      },
      cookiesPerHour: function(){
          for(let i=0;i<this.workHouers.length;i++){
              this.cookiesPerHourList.push( Math.floor(seattle.customersPerHour()*this.average));   
          }
      },
      
    render:function(){
        let seattleSection = document.createElement('section');
        mainSection.appendChild(seattleSection);
        let cityBio=document.createElement('p');
        cityBio.textContent=`${this.cityName}`
        seattleSection.appendChild(cityBio);
        let salesList=document.createElement('ul');
        seattleSection.appendChild(salesList);
        for(let j=0;j<this.cookiesPerHourList.length;j++){
            let hourSales=document.createElement('li');
            hourSales.textContent= `${this.workHouers[j]} : ${this.cookiesPerHourList[j]} cookies`
        salesList.appendChild(hourSales);
        }
      
        




    }

  
}


let tokyo={
    cityName: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    average:1.2,
    workHouers:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm',
    '3pm','4pm','5pm','6pm','7pm,'],
    cookiesPerHourList:[],

    customersPerHour:function(min, max) {
        return Math.random() * (seattle.maxCustomers - seattle.minCustomers) + seattle.minCustomers;
      },
      cookiesPerHour: function(){
          for(let i=0;i<this.workHouers.length;i++){
              this.cookiesPerHourList.push(Math.floor(seattle.customersPerHour()*this.average));   
          }
      },
      
    render:function(){
        let seattleSection = document.createElement('section');
        mainSection.appendChild(seattleSection);
        let cityBio=document.createElement('p');
        cityBio.textContent=`${this.cityName}`
        seattleSection.appendChild(cityBio);
        let salesList=document.createElement('ul');
        seattleSection.appendChild(salesList);
        for(let j=0;j<this.cookiesPerHourList.length;j++){
            let hourSales=document.createElement('li');
            hourSales.textContent= `${this.workHouers[j]} : ${this.cookiesPerHourList[j]} cookies`
        salesList.appendChild(hourSales);
        }
      
        




    }

  
}
let dubai={
    cityName: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    average:3.7,
    workHouers:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm',
    '3pm','4pm','5pm','6pm','7pm,'],
    cookiesPerHourList:[],

    customersPerHour:function(min, max) {
        return Math.random() * (seattle.maxCustomers - seattle.minCustomers) + seattle.minCustomers;
      },
      cookiesPerHour: function(){
          for(let i=0;i<this.workHouers.length;i++){
              this.cookiesPerHourList.push(Math.floor(seattle.customersPerHour()*this.average));   
          }
      },
      
    render:function(){
        let seattleSection = document.createElement('section');
        mainSection.appendChild(seattleSection);
        let cityBio=document.createElement('p');
        cityBio.textContent=`${this.cityName}`
        seattleSection.appendChild(cityBio);
        let salesList=document.createElement('ul');
        seattleSection.appendChild(salesList);
        for(let j=0;j<this.cookiesPerHourList.length;j++){
            let hourSales=document.createElement('li');
            hourSales.textContent= `${this.workHouers[j]} : ${this.cookiesPerHourList[j]} cookies`
        salesList.appendChild(hourSales);
        }
      
        




    }

  
}
let paris={
    cityName: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    average:2.3,
    workHouers:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm',
    '3pm','4pm','5pm','6pm','7pm,'],
    cookiesPerHourList:[],

    customersPerHour:function(min, max) {
        return Math.random() * (seattle.maxCustomers - seattle.minCustomers) + seattle.minCustomers;
      },
      cookiesPerHour: function(){
          for(let i=0;i<this.workHouers.length;i++){
              this.cookiesPerHourList.push(Math.floor(seattle.customersPerHour()*this.average));   
          }
      },
      
    render:function(){
        let seattleSection = document.createElement('section');
        mainSection.appendChild(seattleSection);
        let cityBio=document.createElement('p');
        cityBio.textContent=`${this.cityName}`
        seattleSection.appendChild(cityBio);
        let salesList=document.createElement('ul');
        seattleSection.appendChild(salesList);
        for(let j=0;j<this.cookiesPerHourList.length;j++){
            let hourSales=document.createElement('li');
            hourSales.textContent= `${this.workHouers[j]} : ${this.cookiesPerHourList[j]} cookies`
        salesList.appendChild(hourSales);
        }
      
        




    }

  
}
let lima={
    cityName: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    average:4.6,
    workHouers:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm',
    '3pm','4pm','5pm','6pm','7pm,'],
    cookiesPerHourList:[],

    customersPerHour:function(min, max) {
        return Math.random() * (seattle.maxCustomers - seattle.minCustomers) + seattle.minCustomers;
      },
      cookiesPerHour: function(){
          for(let i=0;i<this.workHouers.length;i++){
              this.cookiesPerHourList.push(Math.floor(seattle.customersPerHour()*this.average));   
          }
      },
      
    render:function(){
        let seattleSection = document.createElement('section');
        mainSection.appendChild(seattleSection);
        let cityBio=document.createElement('p');
        cityBio.textContent=`${this.cityName}`
        seattleSection.appendChild(cityBio);
        let salesList=document.createElement('ul');
        seattleSection.appendChild(salesList);
        for(let j=0;j<this.cookiesPerHourList.length;j++){
            let hourSales=document.createElement('li');
            hourSales.textContent= `${this.workHouers[j]} : ${this.cookiesPerHourList[j]} cookies`
        salesList.appendChild(hourSales);
        }
      
        




    }

  
}



console.log(seattle.customersPerHour());
console.log(seattle.cookiesPerHour(seattle.customersPerHour()));
console.log(seattle.cookiesPerHourList);
seattle.render();
console.log(tokyo.customersPerHour());
console.log(tokyo.cookiesPerHour(tokyo.customersPerHour()));
console.log(tokyo.cookiesPerHourList);
tokyo.render();
console.log(dubai.customersPerHour());
console.log(dubai.cookiesPerHour(dubai.customersPerHour()));
console.log(dubai.cookiesPerHourList);
dubai.render();
console.log(paris.customersPerHour());
console.log(paris.cookiesPerHour(paris.customersPerHour()));
console.log(paris.cookiesPerHourList);
paris.render();
console.log(lima.customersPerHour());
console.log(lima.cookiesPerHour(lima.customersPerHour()));
console.log(lima.cookiesPerHourList);
lima.render();


