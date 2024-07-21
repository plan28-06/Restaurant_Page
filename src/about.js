export function loadAboutPage(){
    if (container.classList[0]=='homepage'){
        container.classList.toggle('homepage');
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.innerHTML=
    `
    <h2>About Sona</h2>
    <br>
    <p>Welcome to Sona NYC, where culinary excellence meets a warm, inviting ambiance. 
    Located in the heart of New York City, 
    Sona NYC is dedicated to providing a memorable dining experience that combines traditional flavors with modern creativity.</p>
    <br>
    <h3>Our Story</h3>
    <br>
    <p>Established in 1890, Sona NYC has quickly become a beloved destination for food enthusiasts and connoisseurs alike. 
    Our journey began with a passion for crafting dishes that celebrate 
    the richness of Indian cuisine while embracing contemporary culinary techniques.</p>
    <br>
    <h3>Our Philosophy</h3>
    <br>
    <p>At Sona NYC, we believe in sourcing the finest ingredients locally and globally to ensure every dish tells a story of quality and authenticity. 
    Our chefs meticulously curate each menu item, 
    blending traditional Indian spices with innovative presentations to delight your senses.</p>
    <br>
    <h3>Contact Us</h3>
    <br>
    <p>For reservations, private events, or any inquiries, please contact us at +1 111784321 or email us at Sona.operations@gmail.com. 
    Follow us on social media @SonaNYC for updates, specials, and behind-the-scenes moments from our kitchen.</p>
    <br>
    <h3>Hours of Operation</h3>
    <br>
    <ul class='timings'>
    <li>Monday - Thursday: 9AM - 9PM</li>
    <li>Friday - Saturday: 10AM - 11PM</li>
    <li>Sunday: 12AM - 8PM</li>
    </ul>
    `
}