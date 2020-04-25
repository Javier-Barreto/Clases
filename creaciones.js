class Triangulo{
  constructor(base,altura){
    this.base=base;
    this.altura=altura;
  }
  area(){
    return this.base*this.altura/2;
  }
}

class Rectangulo{
  constructor(base,altura){
      this.base=base;
      this.altura=altura;
  }
  area(){
      return this.base*this.altura;
  }
}

class Cuadrado{
  constructor(lado){
    this.lado=lado;
  }
  area(){
    return this.lado*this.lado;
  }
}

const btntri=document.getElementById("btnTriangulo");
const btnrec=document.getElementById("btnRectangulo");
const btncua=document.getElementById("btnCuadrado");

btntri.addEventListener('click',()=>{
  let base=document.getElementById("base").value;
  let altura=document.getElementById("altura").value;
  base=parseFloat(base);
  altura=parseFloat(altura);
  let altura2= parseFloat(document.getElementById("altura").value);
  let trian=new Triangulo (base,altura);
  let mostrar=document.getElementById("resultados");
  mostrar.innerHTML="<p>Triangulo con base "+ trian.base + " y altura "+ trian.altura +"</p>";
  mostrar.innerHTML+="<p>con un area de "+trian.area()+"</p>";
});

btnrec.addEventListener('click',()=>{
  let base=document.getElementById("base").value;
  let altura=document.getElementById("altura").value;
  base=parseFloat(base);
  altura=parseFloat(altura);
  let altura2=parseFloat(document.getElementById("altura").value);
  let rect=new Rectangulo (base,altura2);
  let mostrar=document.getElementById("resultados");
  mostrar.innerHTML="<p>Rectangulo con base " + rect.base + " y altura " + rect.altura + "</p>";
  mostrar.innerHTML+="<p>con un area de " + rect.area() + "</p>";
});

btncua.addEventListener('click',()=>{
  let lado=document.getElementById("base").value;
  base=parseFloat(base);
  let cua=new Cuadrado (lado);
  let mostrar=document.getElementById("resultados");
  mostrar.innerHTML="<p>Cuadrado que sus lados miden " + cua.base;
  mostrar.innerHTML+="<p>con un area de " + cua.area() + "</p>";
});
