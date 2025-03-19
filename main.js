/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 300}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


// for download

document.addEventListener('DOMContentLoaded', function() {
    const resumeButton = document.querySelector('.button');
    
    resumeButton.addEventListener('click', function() {
        // Assuming your resume file is named 'resume.pdf'
        const resumeUrl = './As.pdf';
        
        // Create an anchor element
        const downloadLink = document.createElement('a');
        
        // Set the href attribute to the URL of your resume file
        downloadLink.href = resumeUrl;
        
        // Set the download attribute to specify the filename to be downloaded
        downloadLink.setAttribute('download', 'resume.pdf');
        
        // Optionally, set the target attribute to '_blank' to open the file in a new tab
        downloadLink.setAttribute('target', '_blank');
        
        // Append the anchor element to the body
        document.body.appendChild(downloadLink);
        
        // Trigger a click event on the anchor element
        downloadLink.click();
        
        // Remove the anchor element from the body
        document.body.removeChild(downloadLink);
    });
});


