const menu=[
    {
        title: "Avocado Toast",
        description: "A delicious and healthy breakfast option with mashed avocado on toasted bread.",
        image:"avocado toast.jpg",
        price:'7d'
    },
    {
        title: "Pasta Aglio e Olio",
        description: "A simple and flavorful pasta dish made with garlic, olive oil, and chili flakes.",
        image:"pasta.jpg" ,
        price:'12d'
    },
    {
        title: "Banana Pancakes",
        description: "Fluffy pancakes made with ripe bananas for a naturally sweet flavor.",
        image:"banana.jpg" ,
        price:'8d'
    },
    {
        title: "Caesar Salad",
        description: "A classic salad with crispy lettuce, croutons, Parmesan cheese, and creamy Caesar dressing.",
        image:"salad.jpg",
        price:'10d'
    }
    
]

const menuElement=document.getElementById('menuitems');

function Display(){
    menu.forEach(function(item){
        const menuItem=document.createElement('li');
        menuItem.innerHTML=`<h3>Title: ${item.title}</h3>
                            <img src="${item.image}">
                            <p>Description: ${item.description}</p>
                            <p>Price: ${item.price}</p>`;
        menuElement.appendChild(menuItem);
    })
}
Display();

const dateElement=document.getElementById('date');
const timeElement=document.getElementById('time');
const guestsElement=document.getElementById('guests');
const phoneElement=document.getElementById('phone');
const confirmElement=document.getElementById('confirm');
const cancelElement=document.getElementById('cancel');
const displayElement=document.getElementById('displayDetails');

confirmElement.addEventListener('click',reservationSystem);
cancelElement.addEventListener('click',cancel);

function reservationSystem(){
    
        const date = dateElement.value;
        const time = timeElement.value;
        const guests = guestsElement.value;
        const phone = phoneElement.value;
    
        if (!date || !time || !guests || !phone) {
            alert("Please fill out all the fields before submitting the reservation.");
            return; 
        }
        displayElement.innerHTML = '';
        const dateItem = document.createElement('li');
        dateItem.textContent = `Reservation Date: ${date}`;
        const timeItem = document.createElement('li');
        timeItem.textContent = `Reservation Time: ${time}`;
        const guestsItem = document.createElement('li');
        guestsItem.textContent = `Number of Guests: ${guests}`;
        const phoneItem = document.createElement('li');
        phoneItem.textContent = `Your Phone Number: ${phone}`;
    
        displayElement.appendChild(dateItem);
        displayElement.appendChild(timeItem);
        displayElement.appendChild(guestsItem);
        displayElement.appendChild(phoneItem);
    }


function cancel(){
    dateElement.value='';
    timeElement.value='',
    guestsElement.value='';
    phoneElement.value='';
}