//הגדרת מערך בגודל 49
const array=new Array(49)
//הגדרת מערך חדש של מספרים רנדומלים,ערך מוחזר מפונקציה
var newarray=createArrayRandom()
// כמות נסיונות למשחק
var clickcounter=3
//הגדרת מיקומי המספרים בטבלת המספרים
var counter=0
//יצירת מערך דו מימדי מערך מוחזר מהפונקציה
var array2d=ArrayTwoDemancial()
//יצירת טבלת בינגו על ידי קריאה לפונקציה
TableCreate()
// האזנה לאירוע לחיצה על כפתור משחק חדש-קריאה לפונקציה
document.querySelector(`#StartGame`).addEventListener(`click`,NewGame)
// האזנה לאירוע לחיצה על כפתור הגרלת מספר-קריאה לפונקציה
document.querySelector(`#RollNumber`).addEventListener(`click`, ChoseNumber)
//תפיסת כל התאים בטבלה עם הקלאס המצויין, והאזנה לאירוע לחיצה על כל תא, והפעלת הפונקציה אשר מייחסת קלאס של לחיצה על מספר מסויים.
const columns=document.querySelectorAll(`.columnsclass`)
for (let i = 0; i < columns.length; i++) {
  columns[i].addEventListener(`click`,NumberClicked)
  
}
//האזנה לאירוע לחיצה על המקלדת-הפעלת פונקציה אשר משייכת את אירוע הלחיצה לכפתור המתאים על ידי קריאה לפונקציה נוספת
document.querySelector(`body`).addEventListener(`keypress`,KeyPressHandler)

