

form=document.getElementById('form')
let workHouers = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
    '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
table=document.createElement('table')
let td=document.createElement('td')

form.addEventListener('submit',function submitHandler(e){
    e.preventDefault()
    let cityName=e.target.cityName.value
    let minCus=e.target.minCus.value
    let maxCus=e.target.maxCus.value
    let avg=e.target.maxCus.value
    let city=new City(cityName,minCus,maxCus,avg)
    city.cookiesPerHour()
    table.deleteRow(-1) 
    city.render()
    tablefooter()
    
 
     

})
function tableHeader(){
    let tr=document.createElement('tr')
    let th=document.createElement('th')
    th.textContent='workHouers'
    tr.appendChild(th)
    
    for (let i=0 ;i < workHouers.length ; i++){
        th=document.createElement('th')
        th.textContent=workHouers[i]
        tr.appendChild(th)
    }
    th=document.createElement('th')
    th.textContent='totals'
    tr.appendChild(th)
    table.appendChild(tr)
    result.appendChild(table)
}
function tablefooter(){
     tr=document.createElement('tr')
    let th=document.createElement('th')
    th.textContent='total/hour'
    tr.appendChild(th)
    
    for (let i=0 ;i < workHouers.length ; i++){
        th=document.createElement('th')
        let hourtOTAL=0
        for (let j=0;j<City.arr.length;j++){
            hourtOTAL+=City.arr[j].cookiesPerHourList[i]
        }
        th.textContent=hourtOTAL
        tr.appendChild(th)
    }

    th=document.createElement('th')
    th.textContent='totals'
    tr.appendChild(th)
    table.appendChild(tr)
    result.appendChild(table)
}


  function City (cityName,minCus,maxCus,avg){
      this.city=cityName;
      this.minCus=minCus;
      this.maxCus=maxCus;
      this.avg=avg;
      this.cookiesPerHourList=[]
      City.arr.push(this)
  }
  City.arr=[]


City.prototype.customersPerHour = function (min, max) {
    return Math.random() * (this.maxCus - this.minCus) + this.minCus;

}
City.prototype.cookiesPerHour = function () {
    for (let i = 0; i < workHouers.length; i++) {
        let cookie = Math.floor(this.customersPerHour() * this.avg);
        this.cookiesPerHourList.push(cookie);
        this.total = this.total + cookie;
    }
    return this.total;
};

City.prototype.render=function(){
    tr=document.createElement('tr')
    table.appendChild(tr)
    th=document.createElement('th')
    th.textContent=this.city
    tr.appendChild(th)
    let total=0
    for (let i=0;i<this.cookiesPerHourList.length;i++){
        total+=this.cookiesPerHourList[i]
        td=document.createElement('td')
        td.textContent=this.cookiesPerHourList[i]
        tr.appendChild(td)
    }
    td=document.createElement('td')
    td.textContent=total
    tr.appendChild(td)
}


let result=document.getElementById('result')




tableHeader()
tablefooter()
