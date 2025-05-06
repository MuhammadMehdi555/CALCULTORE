var result= document.getElementById('result')
var buttons = document.querySelectorAll('button');

var a = "";

buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        var btn=button.innerText;
        if(btn=="="){
           try{
            const val=a.replace(/X/g,"*");
            a = eval(val).toString();
        }
        catch{
            a="Error"
        }
        }
        else if(btn=="AC"){
            a="0";
        }
        else{
            a+=btn;
        }
        end(a)
    })
})

function end(val){
    result.innerText =val;
    result.scrollLeft=result.scrollWidth;
}