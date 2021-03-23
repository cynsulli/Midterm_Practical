var wrap = document.body.querySelector(".wrap");

var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];

for(var i=0; i<list.length; i++){
  var ele = document.createElement("div");
   var eleName = document.createElement("div");
  var eleAge = document.createElement("div");
  
  if(list[i].age>25){
    ele.style.color="green";
  }
   eleName.innerHTML=list[i].name
  eleAge.innerHTML="Age: "+list[i].age;
  ele.appendChild(eleName);
  ele.appendChild(eleAge);
  wrap.appendChild(ele);
}



var num = 5

  function count(number) {
   var numcount = number + 1;
   ele.innerHTML = numcount;
   wrap.appendChild(ele);
  }

document.body.querySelector(".counter").addEventListener("click", function(){
  count(num)})