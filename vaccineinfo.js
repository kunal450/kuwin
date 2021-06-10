    /* checking vaccine availability*/
    function check(){
        var d=new Date();
        var month= d.getMonth()+1;
        var year= d.getFullYear();
        var day=d.getDate();
        var pin= document.getElementById("pin").value;
         console.log(pin);
      var url= "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode="+pin+"&date="+day+"-0"+month+"-"+year;
      $.getJSON(url,function(data){
          var c, agelmt,address,link,sno,available_capacity;

        for(i=0;i<data.sessions.length;i++){
            
            sno=i+1;
            available_capacity=data.sessions[i].available_capacity;
            agelmt=data.sessions[i].min_age_limit;
            c=data.sessions[i].name;
            address=data.sessions[i].address;
            link="https://selfregistration.cowin.gov.in/";


         var temp=`
                   <tr>
                   <td>${sno}</td>
                   <td>${c}</td>
                   <td>${agelmt}</td>
                   <td>${available_capacity}</td>
                   <td>${address}</td>
                   <td><a href="${link}">link</a></td>
                   </tr>
                  `;
                  document.getElementById("vaccinetable").innerHTML +=temp;
        }  
    
      });
  }