
const body = document.querySelector('body');

export function toggleClass(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}

const toggleElementDisplay = function(hiddenElement, transitionDuration) {
    if (getComputedStyle(hiddenElement).display === 'none') {
        hiddenElement.style.display = 'block';
        setTimeout(() => {
            hiddenElement.style.opacity = '1';
        }, 100); // Delay the transition for 100 milliseconds for display change to take effect
    } else {
        hiddenElement.style.opacity = '0';
        setTimeout(() => {
            hiddenElement.style.display = 'none';
        }, transitionDuration); // Wait for the transition to complete before changing display back to none
    }
};


// Sticky header ************************
var header = document.querySelector('.header');


const onScroll = () => {
    var scrolledPage = Math.round(window.pageYOffset);
    if (scrolledPage > 60) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

document.addEventListener('scroll', onScroll);


// Dark/Light mode switch using a button ************************

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');
const htmlElement = document.querySelector('html');
const darkModeToggles = document.querySelectorAll('.dark-mode-toggle');

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    var preferredTheme = 'dark'
} else {
    var preferredTheme = 'light'
}

const enableDarkMode = () => {
    // 1. Add the class to the html tag
    htmlElement.classList.add('dark');
    // 2. Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    // 1. Remove the class from the html tag
    htmlElement.classList.remove('dark');
    // 2. Update darkMode in localStorage
    localStorage.setItem('darkMode', null);
}

// If the user already visited and enabled darkMode
// start things off with it on
if ((darkMode === 'enabled')) {
    enableDarkMode();
}

// When someone clicks the button
darkModeToggles.forEach(darkModeToggle => {
    darkModeToggle.addEventListener('click', () => {

        // get their darkMode setting
        darkMode = localStorage.getItem('darkMode');

        // if it not current enabled, enable it
        if (darkMode !== 'enabled') {
            enableDarkMode();
            // if it has been enabled, turn it off
        } else {
            disableDarkMode();
        }
    });
});


// an event listener for when preferred color scheme changes
window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (event) => {
        event.matches ? enableDarkMode() : disableDarkMode();
    });

// Search form show/hide toggle ************************************
const searchButtons = document.querySelectorAll('.search-form-toggle');
searchButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const searchBox = document.getElementById(btn.getAttribute('data-target-box'));
        toggleElementDisplay(searchBox, 300);

    });
});


// Mega menu show/hide toggle ************************************
const megaButton = document.querySelector('#mega-menu-toggle');
const megaMenu = document.querySelector('#mega-menu');

megaButton.addEventListener('click', () => {
    toggleElementDisplay(megaMenu, 300);
});

// Open modal to play trailer ************************************
// Get all open and close buttons
const openButtons = document.querySelectorAll('.open-modal-btn');
const closeButtons = document.querySelectorAll('.close-modal');
const pauseVideoBtns = document.querySelectorAll('.pauseVideoJs');

// Function to open the modal
function openModal(event) {
    const modalId = event.target.dataset.modalTarget;
    const modal = document.getElementById(modalId);

    modal.style.display = 'block';

}

// Function to close the modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);

    modal.style.display = 'none';
}

// Attach click event listeners to each open button
openButtons.forEach(button => {
    button.addEventListener('click', openModal);
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        closeModal(button.closest('.modal').id)
    });
});

pauseVideoBtns.forEach(button => {
    button.addEventListener('click', (event) => {
        const videoId = event.target.dataset.videoTarget;
        const vid = document.getElementById(videoId)
        vid.pause()
    });
});

// Open drawer ************************************

const drawer = document.querySelector('.drawer')
const headerMobile = document.querySelector('.header-mobile')
const drawerCloseBtn = document.querySelector('.drawer-close-btn');
const closeSide = document.querySelector('#drawer-close-side');
const drawerMenueHasChild = drawer.querySelectorAll('.menu-item-has-children');

function openCloseDrawer () {
    toggleClass(headerMobile, 'open')
    toggleClass(body, 'body-scroll-lock')
    toggleClass(closeSide, 'drawer-close-side-show')
}

document.querySelector('#jsbtnHamburgur').addEventListener('click', function () {
    openCloseDrawer()
})

drawerCloseBtn.addEventListener('click', function () {
    openCloseDrawer()
});


closeSide.addEventListener('click', function () {
    openCloseDrawer()
})


if(drawerMenueHasChild !==null){
    drawerMenueHasChild.forEach(function(item) {
        const firstLink = item.querySelector('a:first-child');
        firstLink.addEventListener('click', function(event) {
            event.preventDefault();
            item.classList.toggle('opened');
        });
    });
}



// In drawer: open list items ************************************
const listTitles = document.querySelectorAll('.drawer .list-title');

listTitles.forEach(title => {
    title.addEventListener('click', () => {
        const subMenu = title.nextElementSibling;

        if (subMenu.style.display === 'none') {
            subMenu.style.display = 'block';
        } else {
            subMenu.style.display = 'none';
        }
    });
});

// Copy to clipboard
function copyToClipboardFun() {
    // Get the text field
    var copyText = document.getElementById("copyToClipboard");

    if (copyText) {
        console.log(copyText)

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        window.navigator.clipboard.writeText(copyText.value);

        // Alert the copied text
        showToast('رمز کپی شد', '')
    }
}
const copyButton = document.querySelector('.copyToClipboardBtn');
if (copyButton) {
    copyButton.addEventListener('click', copyToClipboardFun);
}
