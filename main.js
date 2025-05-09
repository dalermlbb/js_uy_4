


// let vaqt = new Date()

/*
let yil = vaqt.getFullYear().toString().padStart(2, "0")
let oy_olish = vaqt.getMonth().toString().padStart(2, "0")
let oy = Number(oy_olish) + 1
let kun = vaqt.getDate().toString().padStart(2, "0")

console.log(`${yil}-${oy}-${kun}`);
*/

/*
let soat = vaqt.getHours()
let minut = vaqt.getMinutes()
let sekund = vaqt.getSeconds()

console.log(soat, ':' ,minut, ':' ,sekund);

*/


// vaqt.setFullYear(2022)
// vaqt.setMonth(0)
// vaqt.setDate(7)

// console.log(vaqt.getFullYear());
// console.log(vaqt.getMonth());
// console.log(vaqt.getDay());


// let yil = vaqt.getFullYear().toString().padStart(2, "0")

// console.log(tgKun.getMonth());
// console.log(tgKun.getDate());


/*
let tgKun = new Date()
let vaqt = new Date();

// tgKun.setFullYear(tgKun.getFullYear())
let tk_oy = tgKun.setMonth(6)
let tk_sana = tgKun.setDate(12)

// let tugulganKun = tgKun.setMonth() + tgKun.setDate() 

let oy = vaqt.getMonth();
let kun = vaqt.getDate();

console.log(Math.ceil((tgKun - vaqt) / (1000 * 60 * 60 * 24)) );
*/




// console.log(Math.ceil((tgKun.getMonth() - vaqt.getMonth() && tgKun.getDate() - vaqt.getDate()) / (1000*60*60*24)));




// console.log( Math.floor((tgKun - vaqt) / (1000 * 60 * 60 * 24)));   



/*if (tgKun.getMonth() >= vaqt.getMonth()) {
    

}else{
    vaqt.setFullYear(vaqt.getFullYear()++)
}
 */
//


/*
let oy_olish = vaqt.getMonth().toString().padStart(2, "0")
let oy = Number(oy_olish) + 1;
let kun = vaqt.getDate().toString().padStart(2, "0") */










let tgKun = new Date()
let vaqt = new Date();

if (tgKun.setMonth() >= vaqt.getMonth()) {
    
}else{
    vaqt.setFullYear(yil++)
    let farq = tgKun + vaqt
    console.log('ajhusdufs');
    
}

tgKun.setMonth(3)
tgKun.setDate(12)

let farq = tgKun - vaqt

let yil = vaqt.getFullYear()

console.log(Math.ceil((farq) / (1000 * 60 * 60 * 24)) );



// console.log(yil);



// tgKun.setFullYear(tgKun.getFullYear())



/*
// let tugulganKun = tgKun.setMonth() + tgKun.setDate() 

// let birlashish = ((tgKun.getMonth(), tgKun.getDate()) - (vaqt.getMonth(), vaqt.getDate()))

let oy = vaqt.getMonth();
let kun = vaqt.getDate(); */