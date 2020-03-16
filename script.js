$( "#projectTab" ).click(function() {
  let projectTab = renderProjectsTab();
 $('#active-view').html(projectTab);
 scrollToActiveView();
});
$( "#contactsTab" ).click(function() {
  let contactsTab = renderContactTab();
 $('#active-view').html(contactsTab);
 scrollToActiveView();
});
$("#bioTab").click(function(){
  let bioTab = renderBioTab();
  $('#active-view').html(bioTab);
  scrollToActiveView();
});
function renderBioTab(){
  return`
  <h2 class="section-header">About Me!</h2>
   <section id="bio">
      <p>Hi, I'm Teddy. I'm a fullstack developer, and a UX/UI fanatic.</p>
      <p>I'm a recent graduate from Bloc's web developer track, and prior to Bloc I've been doing web design in some form or another since I was a teenager. I love programming because it affords me the opportunity to bring beautiful ideas to the people, and I love solving problems. </p>
      <p>When I'm not coding, or trying to find new, innovative ways to breathe life to my projects, I am a lifelong musician, I love biking, skating, hiking, and enjoying the outdoors in general. My current learning projects (aside from programming!) are learning to knit, and teaching myself to play the drums.</p>
    </section>
  `
}
function renderProjectsTab(){
      return` 
      <h2 class="section-header">Projects</h2>
    <section>
      <div class="api-hack"></div>
      <h2>FindMySound</h2>
      <p>FindMySound is a Spotify playlist generator that takes your top artists and and returns a list of new artists and their most listened to tracks. </p>
      <h3>Technologies used:</h3>
      <p> HTML5, CSS, JS,Express, Node.js</p>       
      <a href="https://findmysound.herokuapp.com/" target="_blank"> Check it out!</a>
      <br>
     <a href="https://github.com/teddygallion/api-hack" target="_blank"><i class="fab fa-github"></i></a>
    </section>
    <section>
      <div class="keyboard"></div>
      <h2>MyMelody</h2>
      <p>MyMelody is a simple, lightweight web keyboard. </p>
      <h3>Technologies used:</h3>
      <p> HTML5, CSS, JS, Jquery, Tone(JS sound library)</p>
      <a href="projects/myMelody/index.html" target="_blank">Check it out!</a>
      <br>
      <a href="https://github.com/teddygallion/myMelody" target="_blank"><i class="fab fa-github"></i></a>
    </main>
  </section>
    <section id="project-3">
    <div class ="quiz-app"></div>
    <h2>Early Punk Rock Quiz</h2>
    <p>Test your knowledge of early punk rock!</p>
    <h3>Technologies used:</h3>
    <p>HTML, CSS, JS, Jquery</p>
    <a href="projects/QuizApp/index.html" target="_blank"> Check it out! </a>
    <br/>
    <a href="https://github.com/teddygallion/quiz-app" target="_blank"><i class="fab fa-github"></i></a>
  </section>
    `
}
function renderContactTab(){
  return`
  <h2 class = "section-header">Contact Me</h2>
  <section id="contact-info">
    <p>Lets keep in touch!</p>
    <a href ="https://linkedin.com/in/teddygallion" target="_blank"><i class="fab fa-linkedin"></i></a>
     <br/>
    <a href="https://github.com/teddygallion" target="_blank"><i class="fab fa-github"></i></a>
     <br/>
    <p>teddygallion@gmail.com</p>
  </section>
  `
}
function scrollToActiveView(){
   $('html, body').animate({
        scrollTop: $("#active-view").offset().top
    }, 300);
}