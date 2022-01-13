import { 
    checkAuth, 
    logout, 
    createWorkshop
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

    const workshopName = data.get('name');
    
    await createWorkshop(workshopName);
    
    window.location.href = '../workshops';
});

checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});