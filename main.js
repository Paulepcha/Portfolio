// Nav Bar

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

// /*=============== SHOW & CLOSE MENU ===============*/
// const navMenu = document.getElementById('nav-menu'),
//       navToggle = document.getElementById('nav-toggle'),
//       navClose = document.getElementById('nav-close')

// /* Show menu */
// if(navToggle){
//    navToggle.addEventListener('click', () =>{
//       navMenu.classList.add('show-menu')
//    })
// }

// /* Hide menu */
// if(navClose){
//    navClose.addEventListener('click', () =>{
//       navMenu.classList.remove('show-menu')
//    })
// }

// /*=============== REMOVE MOBILE MENU ===============*/
// const navLink = document.querySelectorAll('.nav__link, .nav__contact')

// const linkAction = () =>{
//    const navMenu = document.getElementById('nav-menu')
//    // When we click on each nav__link, we remove the show-menu class
//    navMenu.classList.remove('show-menu')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))



// tYPED jS

const typed = new Typed('.homeContent-span', {
    strings: ['Graphic Designer', 'Web Designer', 'Digital Marketer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

// ABOUT ME

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Email js

const contactForm = document.getElementById('contact-form')
contactMessage = document.getElementById('contact-message')

const sendEmail = async (e) => {
    // Prevent the page from reloading
    e.preventDefault()

    try{
        // serviceID - templateID - #form - publicKey
        await emailjs.sendForm('service_ip9ikww','template_fy5dfaj','#contact-form','2ECPNff3i8it-nm5K')

        // show message
        contactMessage.textContent = 'Message sent successfully'

        // clear input fields
        contactForm.reset()
    } catch (error){
        // show error message
        contactMessage.textContent = 'Message not sent (Service error)'
    } finally {
        // Remove Message after 5 seconds
        setTimeout(() => contactMessage.textContent = '', 5000)
    }
}

contactForm.addEventListener('submit', sendEmail)


// SCROLL UP 

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    :scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)



// CUSTOM CURSOR

const cursor = document.querySelector('.cursor')
let mouseX = 0, mouseY = 0 // Store mouse position

const cursorMove = () => {
    cursor.style.left = `${mouseX}px` // Horizontal position (X-axis)
    cursor.style.top = `${mouseY}px`  // Vertical position (y-axis)
    cursor.style.transform = 'translate(-50%, -50%)'  // Centers the element at the pointer

    // Repeats mouse movement and updates positions
    requestAnimationFrame(cursorMove)
    }

    // Detects mouse movement and updates positions
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX // Save postion X
        mouseY = e.clientY
    })

    cursorMove()

// HIDE THE CUSTOM CURSOR ON LINKS

const a = document.querySelectorAll('a')

a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hide-cursor')
    })

    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hide-cursor')
    })

})
