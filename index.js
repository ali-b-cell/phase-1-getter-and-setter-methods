// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }


  get diameter() {
    return this.radius * 2;
  }

  
  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  
  get circumference() {
    return Math.PI * this.diameter;
  }

  
  set circumference(circumference) {
    this.radius = circumference / (Math.PI * 2);
  }

  
  get area() {
    return Math.PI * this.radius ** 2;
  }

  
  set area(area) {
    this.radius = Math.sqrt(area / Math.PI);
  }
}


const circle = new Circle(5);

console.log(circle.diameter); 
console.log(circle.circumference); 
console.log(circle.area); 

circle.diameter = 20;
console.log(circle.radius); 

circle.circumference = 62.83;
console.log(circle.radius); 

circle.area = 314.16;
console.log(circle.radius); 
