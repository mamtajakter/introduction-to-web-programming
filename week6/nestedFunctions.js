

/// NESTED FUCTIONs
function areaCalculation(a,b){
  let result="";
  function areaCylinder(p,q){
    let t;
    t=2 * Math.PI * p * q + 2 * Math.PI * p * p;//
    return t;
  }
  function areaSphere(p){
    let t;
    t=4 * Math.PI * p * p;
    return t;
  }
  function areaSquare(t) {
    let y;
    y = t * t;
    return y;
  }

  function areaCircle(p) {
    let z;
    z = Math.PI * p * p;
    return z;
  }

  function areaRect(p, q) {
    let z;
    z = p * q;
    return z;
  }

  function areaTri(p, q) {
    let z;
    z = 0.5 * p * q;
    return z;
  }

  result=result+ "The area of the clylinder is "+ areaCylinder(a,b);
  result=result+ "\nThe area of the Sphere is "+ areaSphere(a);
  result=result+ "\nThe area of the Triangle is "+ areaTri(a,b);
  result=result+ "\nThe area of the Rectangle is "+ areaRect(a,b);
  result=result+ "\nThe area of the Circle is "+ areaCircle(a,b);

  return result;

}
