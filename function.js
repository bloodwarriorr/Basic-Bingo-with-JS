//כפתור טעינת דף-משחק חדש
function NewGame() {
    location.reload();
}
//הגרלת מספר רנדומלי בין 0-100
function ChoseNumber() {
    let number = Math.floor(Math.random() * 101)
    document.querySelector(`#shownumber`).innerHTML = number
}
//יצירת מערך מספרים רנדומלי בגודל 49
function createArrayRandom() {

    var randomnumber = 0
    for (let i = 0; i < array.length; i++) {

        randomnumber = Math.floor(Math.random() * 101)
        for (let j = 0; j < array.length; j++) {
            if (randomnumber == array[j] && array[j] != null || randomnumber == 0) {
                randomnumber = Math.floor(Math.random() * 101)
                j = 0
            }

        }
        array[i] = randomnumber

    }
    return array
}
//פונקציית בדיקת המספר המוגרל מול המספר אשר נבחר בעכבר/במקלדת-מקבלת אלמנט
function TdChoose(element) {
   
    
    //המספר שהוגרל
    let drawnNumber = document.querySelector(`h2`)
    let TdPosition = element.dataset.tds
    let TrPosition = element.parentNode.dataset.trs


    if (drawnNumber.innerHTML == element.innerHTML) {
        element.classList.add(`active`)
        array2d[TrPosition][TdPosition]=true
    }
    else {
        clickcounter--
        alert(`You have ${clickcounter} more chances`)
        if (clickcounter == 0)
            document.write(`you lost!!!!`)

    }

checkWin(array2d,TrPosition,TdPosition)
CheckTdWin(array2d,TrPosition,TdPosition)



}
//פונקציית עזר לשיוך לחיצת העכבר על הטבלה ושליחת האלמנט כפרמטר לפונקציית בדיקת המספרים
function NumberClicked(event)
{
    let element = event.target
    TdChoose(element)

}
//יצירת מערך דו מימדי(עמודות/שורות)
function ArrayTwoDemancial()
{
    
    var array2d=new Array([],[],[],[],[],[],[])
    for(let i=0;i<array2d.length;i++)
        for(let j=0;j<array2d.length;j++)
            array2d[i][j]=false
    return array2d

}
//בדיקת נצחון על פי שורה
function checkWin(array2d,TrPosition)
{
let flag=true
for (let col = 0; col < array2d[TrPosition].length; col++) {
   if(array2d[TrPosition][col] !=true){
       flag=false
       break
   }


    
}
if(flag==true)
{
alert(`You won`)
NewGame()
}

}
//בדיקת נצחון על פי עמודה
function CheckTdWin(array2d,TrPosition,TdPosition)
{
    let flag=true
for (let td = 0; td < array2d[TrPosition].length; td++) {
   if(array2d[td][TdPosition] !=true){
       flag=false
       break
   }


    
}
if(flag==true)
{
alert(`You won`)
NewGame()
}

}
//יצירת הטבלה הראשית של הבינגו
function TableCreate()
{
   
    var tablecreater=""
    tablecreater+=(`<table border='1' cellpadding='3'>`)
    for(let i=0; i<7; i++)
    {
      tablecreater+=(`<tr data-trs=${i}> `)
      
      for(let j=0;j<7;j++)
      {
    
        tablecreater+=(`<td class="columnsclass" data-num="${newarray[counter]}"  data-tds="${j}">`+newarray[counter]+`</td>`);
     counter++
      
      }
      tablecreater+=(`<br>`)
      tablecreater+=(`</tr>`);
    }
    tablecreater+=(`</table>`)
    document.querySelector(`#tablediv`).innerHTML+=tablecreater
}
//תפיסת אירוע לחיצה על מקש במקלדת(מספר), ושמירתו במשתנה, ושליחתו לפונקציה של בחירת מספר בטבלת בינגו
function KeyPressHandler(event)
{
let clickedNumber=event.key
if(clickedNumber>0&&clickedNumber<10)
{
let data=`[data-num="${clickedNumber}"]`
let NumberInTable=document.querySelector(data)
console.log(clickedNumber,data)
TdChoose(NumberInTable)
}
}

