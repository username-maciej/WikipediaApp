//VARIABLES

const input = document.querySelector('.main-search');
const searchBtn = document.querySelector('.main-btn');




//EVENTS
searchBtn.addEventListener('click', searchWiki)

//FUNCTIONS

//searchWiki
function searchWiki(event) {
   event.preventDefault();
   showGif('show')

   let inputValue = input.value;
   const origin = 'https://pl.wikipedia.org';
   let apiURL = `${origin}/w/api.php?action=query&origin=*&format=json&list=search&srsearch=${inputValue}`;

   fetch(apiURL).then(function (data) {
      return data.json()
   }).then(displayData).catch(function(error){
       console.log(error);
   })

}

//displayData

function displayData(data) {
   showGif('hide')

   let result = data.query.search;
   let output = '';

   result.forEach(function (item) {

      output += `<li class="search-item">
                 <h2 class="search-item__title">${item.title}</h2>
                 <p class="search-item__text">${item.snippet}</p>
                 <a href="http://pl.wikipedia.org/?curid=${item.pageid}" class="search-item__link" target="_blank">Czytaj dalej...</a>
                 </li>`
   })

   document.querySelector('.results').innerHTML = output;
}



//show/hide gif

function showGif(value) {
   if (value === 'show') {
      document.querySelector('.wait-icon').classList.add('show')
   } else if (value === 'hide') {
      document.querySelector('.wait-icon').classList.remove('show')
   }
}

const elo = 10;

console.log(10 * elo);

