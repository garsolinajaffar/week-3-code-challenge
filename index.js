console.log('javascript loads');

const baseUrl = 'http://localhost:3000/films';

fetch(baseUrl)
  .then((res) => res.json())
  .then((data) => {
    console.log(data); 
    renderMovieDetails(data); 
  })
  .catch((err) => console.log('error', err)); 

function renderMovieDetails(data){
  let nowShowing = document.getElementById('nowshowing'); 
  console.log(nowShowing);

  for (let i = 0; i < data.length; i++) {
    let title = document.createElement('h2'); 
    title.textContent = data[i].title; 

    let description = document.createElement('p');
    description.textContent = data[i].description; 

    let remainingTickets = data[i].capacity_sold;
    let ticketsParagraph = document.createElement('p');
    ticketsParagraph.textContent = `Remaining Tickets: ${remainingTickets}`;

    nowShowing.appendChild(title);
    nowShowing.appendChild(description);
    nowShowing.appendChild(ticketsParagraph);
  }
}