import { 
    checkAuth, 
    logout,
    getWorkshops,
    deleteParticipant
} from '../fetch-utils.js';

import { renderParticipant } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const participantButton = document.getElementById('add-participant');
const workshopsEl = document.querySelector('.workshop-container');
const workshopButton = document.getElementById('workshops-page');
const newWorkshopButton = document.getElementById('add-workshop');

logoutButton.addEventListener('click', () => {
    logout();
});

participantButton.addEventListener('click', () => {
    window.location.href = '../create';
});

newWorkshopButton.addEventListener('click', () => {
    window.location.href = '../newworkshop';
});

workshopButton.addEventListener('click', () => {
    window.location.href = './';
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
        workshopNameEl.classList.add('workshop-name');

        workshopNameEl.textContent = workshop.name;

        for (let participant of workshop.participants) {

            const participantEl = renderParticipant(participant);

            participantEl.addEventListener('click', async() => {
                await deleteParticipant(participant.id);

                await getWorkshops();
            });
            participantsEl.append(participantEl);
        }
        
        workshopDiv.append(workshopNameEl, participantsEl);
        
        workshopsEl.append(workshopDiv);
    
    }
    
});


    
