import { 
    checkAuth, 
    logout, 
    createParticipant,
    getWorkshops
} from '../fetch-utils.js';

checkAuth();

const form = document.querySelector('form');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(form);

    const participantName = data.get('name');
    const workshopId = data.get('workshop-id');

    await createParticipant({
        name: participantName,
        workshop_id: workshopId
    });
    
    form.reset();
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