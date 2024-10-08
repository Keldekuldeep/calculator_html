		function keyP(a)
	{
         s=document.getElementById('t1').value;
         x=a.value;
         document.getElementById('t1').value=s+x;
    }
 
function equal()
{
	s=document.getElementById('t1').value;
	document.getElementById('t1').value=eval(s);
}


function clr()
{
	document.getElementById('t1').value="";
}

function rmvlstchr() 
{
    D= document.getElementById('t1');
    D.value = D.value.slice(0, -1); 
}

