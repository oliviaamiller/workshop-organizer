import { 
    checkAuth, 
    logout,
    getWorkshops
} from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const participantButton = document.getElementById('add-participant');
const workshopsEl = document.querySelector('.workshops');

logoutButton.addEventListener('click', () => {
    logout();
});

participantButton.addEventListener('click', () => {
    window.location.href = '../create';
});


window.addEventListener('load', async() => {
    const workshops = await getWorkshops();
    displayWorkshops(workshops);
});
