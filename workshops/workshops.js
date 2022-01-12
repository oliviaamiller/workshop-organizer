import { 
    checkAuth, 
    logout,
    getWorkshops
} from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const participantButton = document.getElementById('add-participant');
const workshopsEl = document.querySelector('.workshop-container');

logoutButton.addEventListener('click', () => {
    logout();
});

participantButton.addEventListener('click', () => {
    window.location.href = '../create';
});


window.addEventListener('load', async() => {
    const workshops = await getWorkshops();

    workshopsEl.textContent = '';

    for (let workshop of workshops) {
        
        const workshopDiv = document.createElement('div');
        const workshopNameEl = document.createElement('p');
        const participantsEl = document.createElement('div');
        
       
        participantsEl.classList.add('participants');
        workshopDiv.classList.add('workshops');

        workshopNameEl.textContent = workshop.name;

        // for each of this family's bunnies


        // make an element with the css class 'bunny', and put the bunny's name in the text content
        
        // add an event listener to the bunny el. On click, delete the bunny, then refetch and redisplay all families.


        // append this bunnyEl to the bunniesEl
    
    }

    // append the bunniesEl and nameEl to the familyEl

    // append the familyEl to the familiesEl
    
});


    
