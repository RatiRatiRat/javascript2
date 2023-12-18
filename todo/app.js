//const addd =document.querySelector('addd');
//const ul=document.querySelector('ul');


//addd.addEventListener('click', () => {
  //  const input = document.getElementById('add');
 //   const li = document.createElement('li');
 //   ul.appendChild(li);
    
  //  li.innerText=input.value;

    //console.log(input.value);
 // });



 // const addd = document.querySelector('.addd'); const ul = document.querySelector('ul');  addd.addEventListener('click', () => {   const input = document.getElementById('add');   const li = document.createElement('li');   ul.appendChild(li);   li.innerText = input.value;   console.log(input.value); });






document.addEventListener('DOMContentLoaded', function() {
    const addd = document.querySelector('.addd');
    const ul = document.querySelector('ul');

    addd.addEventListener('click', () => {
      const input = document.getElementById('add');
        const li = document.createElement('li');
        li.innerText = input.value;
        ul.appendChild(li);
        input.value = ''; //asuftavebs inputis vels roca vamateb axal items
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';


        const img = document.createElement ('img')
        
        li.appendChild(checkbox);
        li.appendChild(img)
        ul.appendChild(li)

       img.src ='akar-icons_trash-can.svg'; 
        
        



        img.addEventListener('click', () => {
            ul.removeChild(li); //  acilebs li elements roca fotos daeklikeba imedi maqvs
          });

    });
 
    var currentTime = new Date();

    // Extract hours, minutes, and seconds
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    
    
    // Determine whether it's AM or PM
    var ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert 24-hour format to 12-hour format and add leading zeros
    hours = (hours % 12 || 12).toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    
    
    // Format the time as HH:MM:SS AM/PM
    var formattedTime = `${hours}:${minutes} ${ampm}`;
    
    // Display the time in the "clock" span
    document.querySelector('.time2').innerText = formattedTime;
    

    
    // Generate a random number (for demonstration purposes)
    var randomNumber = Math.floor(Math.random() * 100);
    
    // Display the number in the "number" span
    document.querySelector('.time') ;



    


    }
    
    
    
   





  



  );



  








