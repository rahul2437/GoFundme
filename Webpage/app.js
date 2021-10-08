async function getFunds(){
  let data = await (await fetch('../data.json')).json();
  showData(data.cardArray);
}
getFunds();

function showData(array){
  let mainShowcase = document.getElementById('showAll');
  console.log();
  array.forEach(e => {
    let FundsCard = document.createElement('div');
    let img = document.createElement('img');
    let city = document.createElement('h4');
    let title = document.createElement('h4');
    let desc = document.createElement('p');
    let donate = document.createElement('p');
    FundsCard.setAttribute('class','category-cont2')
    title.setAttribute('class','title');
    city.setAttribute('class','city-name');
    donate.setAttribute('class','last-donation');
    desc.setAttribute('class','update');
    img.src = e.image;
    city.innerText = e.place;
    title.innerText = e.title;
    desc.innerText = e.description;
    donate.innerText = 'Last Donation: 7m ago';
    FundsCard.append(img,city,title,desc,donate);
    mainShowcase.append(FundsCard);
    FundsCard.addEventListener('click',()=>{
      location.href = e.link;
    });
  });
}