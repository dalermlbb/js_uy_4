/*1
let interval = setInterval(() => {
  let vaqt = new Date();

  let soat = vaqt.getHours().toString().padStart(2, "0");
  let minut = vaqt.getMinutes().toString().padStart(2, "0");
  let sekund = vaqt.getSeconds().toString().padStart(2, "0");

  console.log(`${soat} : ${minut} : ${sekund}`);
}, 1000);

setTimeout(() => {
  clearInterval(interval);
  console.log('Vaqt tugadi!');
},10000);
*/




/* 3
let i = 1

let app = setInterval(()=>{
    console.log(i);
    i++
},1000)

setTimeout(()=>{
    clearInterval(app)
},5000)

*/
