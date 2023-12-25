async function fetchRacers() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        console.log(data);

        // Process the data or use it as needed
        // For example, you could display it on the page or perform other actions

    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
}

// Call the function to fetch the data
fetchRacers();
const racersData = {
    "racers": [
        {
            "name": "Lewis",
            "lastname": "Hamilton",
            "age": 36,
            "career_wins": 100
        },
        {
            "name": "Max",
            "lastname": "Verstappen",
            "age": 24,
            "career_wins": 54
          },
          {
            "name": "Valtteri",
            "lastname": "Bottas",
            "age": 32,
            "career_wins": 10
          },
          {
            "name": "Charles",
            "lastname": "Leclerc",
            "age": 24,
            "career_wins": 5
          },
          {
            "name": "Sebastian",
            "lastname": "Vettel",
            "age": 34,
            "career_wins": 53
          },
          {
            "name": "Alain",
            "lastname": "Prost",
            "age": 68,
            "career_wins": 51
          },
          {
            "name": "Kimi",
            "lastname": "Raikkonen",
            "age": 44,
            "career_wins": 21
          },
          {
            "name": "Michael",
            "lastname": "Schumacher",
            "age": 54,
            "career_wins": 91
          },
          {
            "name": "Fernando",
            "lastname": "Alonso",
            "age": 40,
            "career_wins": 32
          },
          {
            "name": "Ayrton",
            "lastname": "Senna",
            "age": 34,
            "career_wins": 41
          }
        
      
        // Add more racer objects as needed
    ]
};

// Function to add Lewis Hamilton's data to the "lewis" row
function addLewisData(data) {
    // Get the "lewis" row element
    const lewisRow = document.querySelector('.hamilton');

    // Update the cells with Lewis Hamilton's information
    if (lewisRow) {
        lewisRow.cells[0].textContent = data.racers[0].name;
        lewisRow.cells[1].textContent = data.racers[0].lastname;
        lewisRow.cells[2].textContent = data.racers[0].age;
        lewisRow.cells[3].textContent = data.racers[0].career_wins;
    }

   

}

// Call the function to add Lewis Hamilton's data to the "lewis" row
addLewisData(racersData);



function addmaxData(data) {

    const maxrow = document.querySelector('.max')

    if(maxrow){
    
        maxrow.cells[0].textContent = data.racers[1].name;
        maxrow.cells[1].textContent = data.racers[1].lastname;
        maxrow.cells[2].textContent = data.racers[1].age;
        maxrow.cells[3].textContent = data.racers[1].career_wins;


}

}


addmaxData(racersData)




function addValtteriData(data) {

    const valtrow = document.querySelector('.bottas')

    if(valtrow){
    
        valtrow.cells[0].textContent = data.racers[2].name;
        valtrow.cells[1].textContent = data.racers[2].lastname;
        valtrow.cells[2].textContent = data.racers[2].age;
        valtrow.cells[3].textContent = data.racers[2].career_wins;


}

}

addValtteriData(racersData)




function addLecData(data) {

    const Lecrow = document.querySelector('.leclerc')

    if(Lecrow){
    
        Lecrow.cells[0].textContent = data.racers[3].name;
        Lecrow.cells[1].textContent = data.racers[3].lastname;
        Lecrow.cells[2].textContent = data.racers[3].age;
        Lecrow.cells[3].textContent = data.racers[3].career_wins;


}

}

addLecData(racersData)




function addsebData(data) {

    const sebrow = document.querySelector('.vettel')

    if(sebrow){
    
        sebrow.cells[0].textContent = data.racers[4].name;
        sebrow.cells[1].textContent = data.racers[4].lastname;
        sebrow.cells[2].textContent = data.racers[4].age;
        sebrow.cells[3].textContent = data.racers[4].career_wins;


}

}

addsebData(racersData)






function addalainData(data) {

    const alrow = document.querySelector('.prost')

    if(alrow){
    
        alrow.cells[0].textContent = data.racers[5].name;
        alrow.cells[1].textContent = data.racers[5].lastname;
        alrow.cells[2].textContent = data.racers[5].age;
        alrow.cells[3].textContent = data.racers[5].career_wins;


}

}

addalainData(racersData)




function addkimiData(data) {

    const kimrow = document.querySelector('.kimi')

    if(kimrow){
    
        kimrow.cells[0].textContent = data.racers[6].name;
        kimrow.cells[1].textContent = data.racers[6].lastname;
        kimrow.cells[2].textContent = data.racers[6].age;
        kimrow.cells[3].textContent = data.racers[6].career_wins;


}

}

addkimiData(racersData)


function addschumiData(data) {

    const shrow = document.querySelector('.schumacher')

    if(shrow){
    
        shrow.cells[0].textContent = data.racers[7].name;
        shrow.cells[1].textContent = data.racers[7].lastname;
        shrow.cells[2].textContent = data.racers[7].age;
        shrow.cells[3].textContent = data.racers[7].career_wins;


}

}

addschumiData(racersData)


function addalonsoData(data) {

    const alonrow = document.querySelector('.alonso')

    if(alonrow){
    
        alonrow.cells[0].textContent = data.racers[8].name;
        alonrow.cells[1].textContent = data.racers[8].lastname;
        alonrow.cells[2].textContent = data.racers[8].age;
        alonrow.cells[3].textContent = data.racers[8].career_wins;


}

}

addalonsoData(racersData)





function addsennaData(data) {

    const sennrow = document.querySelector('.senna')

    if(sennrow){
    
        sennrow.cells[0].textContent = data.racers[9].name;
        sennrow.cells[1].textContent = data.racers[9].lastname;
        sennrow.cells[2].textContent = data.racers[9].age;
        sennrow.cells[3].textContent = data.racers[9].career_wins;


}

}

addsennaData(racersData)

function sortTable(columnIndex) {
    const table = document.querySelector('table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.getElementsByTagName('tr'));

    // Sort the rows based on the content of the selected column
    rows.sort((a, b) => {
        const textA = a.cells[columnIndex].textContent.trim().toLowerCase();
        const textB = b.cells[columnIndex].textContent.trim().toLowerCase();
        return textA.localeCompare(textB);
    });

    // Remove existing rows from the table
   tbody.innerHTML = '';

    // Append the sorted rows back to the table
    rows.forEach(row => {
        tbody.appendChild(row);
    });

 // Determine the sorting order
 sortOrder = (columnIndex === lastSortedColumn && sortOrder === 'asc') ? 'desc' : 'asc';
 return sortOrder === 'asc' ? textA.localeCompare(textB) : textB.localeCompare(textA);

}



