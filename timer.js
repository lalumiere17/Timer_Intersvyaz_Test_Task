var timeend= new Date(2018, 9, 10, 18, 0, 0);

function Timer()
{
	today = new Date();
    today = Math.floor((timeend-today)/1000);
    if (today<=0)
    {
        document.getElementById('day').innerHTML=0;
        document.getElementById('hour').innerHTML=0;
        document.getElementById('min').innerHTML=0;
        document.getElementById('sec').innerHTML=0;
    }
    else
    {
        tsec=today%60;
        today=Math.floor(today/60); 

        if(tsec<10)tsec='0'+tsec;
        tmin=today%60;
        today=Math.floor(today/60);

        if(tmin<10)tmin='0'+tmin;
        thour=today%24; 
        today=Math.floor(today/24);
    
        document.getElementById('day').innerHTML=today;
        document.getElementById('hour').innerHTML=thour;
        document.getElementById('min').innerHTML=tmin;
        document.getElementById('sec').innerHTML=tsec;
    }

    window.setTimeout("Timer()",1000);
}



