function hora(){
  
var reloj = Math.floor(Math.random() * 24);

console.log(reloj);

if (reloj < 8){
document.getElementById('mensaje').textContent = "Son las " + reloj + ", es hora de dormir";
}
else if (reloj < 13)
{
  document.getElementById('mensaje').textContent = "Son las " + reloj + ", es hora de estudiar";

}
else if (reloj < 15)
{
  document.getElementById('mensaje').textContent = "Son las " + reloj + ", es hora de comer";

}
else if (reloj < 20)
{
  document.getElementById('mensaje').textContent = "Son las " + reloj + ", es hora de estudiar";

}

else if (reloj <= 23)
{
  document.getElementById('mensaje').textContent = "Son las " + reloj + ", es hora de cenar";

}
else
{
  document.getElementById('mensaje').textContent = "Son las " + reloj;

}

}