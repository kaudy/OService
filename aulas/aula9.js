

  var hoje = new Date(2016,7,24);
  var data= document.getElementById('data');

  console.log(hoje);
  
  data.innerHTML = hoje.getDate()
		    +"/"
		    +(hoje.getMonth()+1)
		    +"/"
		    +hoje.getFullYear()
		    +" "
		    +hoje.getHours()
		    +":"
		    +hoje.getMinutes();
		    
  var ontem = new Date(2016,7,24);
  
  
  
  
  
  if(ontem.getTime()==hoje.getTime())
  {
    console.log('sim');
  }else
  {
    console.log('não');
  }
  
  