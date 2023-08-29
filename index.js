
//  0 // null
//  1 // X
// 2 // O


var draw = 1;
var arr  = [0,0,0,0,0,0,0,0,0]

var able = true



function play()
{
    document.getElementById('footer').firstElementChild.style.color = "red";

    able = true;
    document.getElementsByClassName('container')[0].style.opacity= "100%"
    arr  = [0,0,0,0,0,0,0,0,0]
    document.getElementById('entery').style.zIndex = 0;
    draw = 1;
    var check = document.querySelectorAll('.box');
    
    check.forEach(each => {
    
        each.innerHTML = ""
            
       
    })
    document.getElementById('footer').firstElementChild.innerHTML = "X";

    document.getElementById('footer').lastElementChild.innerHTML = "restart";
}

function isfull()
{
   
    for (var c = 0; c < 9; c++)
    {
        if (arr[c] == 0)
            return false;
    }
    return true;

}

function fill(e)
{
    var check = document.querySelectorAll('.box');
    var send;
   var k = 0 
    check.forEach(each => {
        if (e == each) {
            send = k;
           
        }
        k++;
    })
    return send;
    
}


function show(num)
{


    
    able = false;

    if (num == 0)
    {
        document.getElementById('footer').firstElementChild.style.color = "white";

        document.getElementById('footer').firstElementChild.innerHTML = "--DRAW--";
     
        }
    else if(num == 1)
    {
        document.getElementById('footer').firstElementChild.innerHTML = "--X WON--";
        document.getElementById('footer').firstElementChild.style.color = "red";
    }
    else
    {
        document.getElementById('footer').firstElementChild.style.color = "blue";

        document.getElementById('footer').firstElementChild.innerHTML = "--O WON--";

        
    }
    document.getElementById('footer').lastElementChild.innerHTML = "play again";
    document.getElementsByClassName('container')[0].style.opacity= "30%"
    
}



function grow(n1, n2, n3)
{
    var grow = document.querySelectorAll('.box');
    grow[n1].firstElementChild.style.color = "white";
    grow[n1].firstElementChild.style.fontSize = "85px";
    grow[n2].firstElementChild.style.color = "white";
    grow[n2].firstElementChild.style.fontSize = "85px";
    grow[n3].firstElementChild.style.color = "white";
    grow[n3].firstElementChild.style.fontSize = "85px";

}

function checker() {
  
    if (arr[0]!=0 && (arr[0] == arr[1] && arr[1] == arr[2]) )
    {
        grow(0,1,2)
        return arr[0];
    }
    
    else if (  arr[0]!=0 &&   (arr[0] == arr[3] && arr[3] == arr[6]))
    {
        grow(0,3,6)
        return arr[0];
        }
    else if ( arr[0]!=0 && (arr[0] == arr[4] && arr[4] == arr[8]))
    {
        grow(0,4,8)
        return arr[0];
        
        }
    else if ( arr[1]!=0 && (arr[1] == arr[4] && arr[4] == arr[7]))
    {
        grow(4,1,7)
        return arr[1];

        
        }
    else if (   arr[2]!=0 &&( arr[2] == arr[5] && arr[5] == arr[8]))
    {
        grow(2,5,8)
        return arr[2]
        
        }
    else if ( arr[2]!=0 && (arr[2] == arr[4] && arr[4] == arr[6]))
    {
        grow(6,4,2)
        return arr[2];
        
        }
    else if (arr[3]!=0 && (arr[3] == arr[4] && arr[4] == arr[5]))
    {
        grow(5,4,3)
        return arr[3]
        
        }
    else if (arr[6]!=0 && (arr[6] == arr[7] && arr[7] == arr[8]))
    {
        grow(8,7,6)
        return arr[6]
        
        }
    else
    {
        
        return 0;
        
        }
}

// main ====================>

var box = document.querySelectorAll('.box');

box.forEach(each => {
    each.addEventListener('click', ()=> {
  
        if (each.innerHTML == "" && able == true)
        {
            console.log(fill(each))
            arr[fill(each)] = draw;
            if (draw == 1) {
                each.innerHTML = "<p>X</P>";
                each.style.color = "red"
                draw = 2;
                document.getElementById('footer').firstElementChild.innerHTML = "O";
        document.getElementById('footer').firstElementChild.style.color = "blue";


                
            }
            else
            {
                each.innerHTML = "<p>O</p>"
                each.style.color = "blue"
                draw = 1;
                document.getElementById('footer').firstElementChild.innerHTML = "X";
        document.getElementById('footer').firstElementChild.style.color = "red";


            }

           

       
        }
     var checker_result = checker()

        if (checker_result == 1)
        {
            show(1)
            
            }
        else if (checker_result == 2)
        {
            show(2);  
            }

        else if (isfull())
        {
            show(0);
        
            
            }
      
      
    });
  });