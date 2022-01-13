import { 
    checkAuth, 
    logout, 
    // createWorkshop,
    getWorkshops
} from '../fetch-utils.js';

checkAuth();

const form = document.querySelector('form');
const logoutButton = document.getElementById('logout');
const workshopButton = document.getElementById('workshops-page');
const participantButton = document.getElementById('add-participant');
const newWorkshopButton = document.getElementById('add-workshop');



logoutButton.addEventListener('click', () => {
    logout();
});

participantButton.addEventListener('click', () => {
    window.location.href = '../create';
});

newWorkshopButton.addEventListener('click', () => {
    window.location.href = './';
});

workshopButton.addEventListener('click', () => {
    window.location.href = '../workshops';
});


form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(form);

    const participantName = data.get('name');
    const workshopId = data.get('workshop-id');

    await createParticipant({
        name: participantName,
        workshop_id: workshopId
    });
    
    window.location.href = '../workshops';
});

window.addEventListener('load', async() => {

    const workshopDropdownEl = document.querySelector('select');

    const workshops = await getWorkshops();

    for (let workshop of workshops) {
        const optionEl = document.createElement('option');

        optionEl.value = workshop.id;

        optionEl.textContent = workshop.name;

        workshopDropdownEl.append(optionEl);
    }
});


checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});