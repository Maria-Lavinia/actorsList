fetch("actors.json")
  .then(function (res) {
      return res.json();
  })

  .then(function (data) {
handleActor(data);
  });

function handleActor(data){
    data.forEach(showActor);
}
function showActor(actor) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector("h2").textContent = actor.fullname;
  clone.querySelector("h2").addEventListener("click", function(){
      document.querySelector(".movie").classList.toggle("show");
      document.querySelector(".movie").textContent ="One of the movies this actor played in is: " + actor.movie;
  });
  clone.querySelector(".movie").textContent = actor.movie;
  const parent = document.querySelector("main");
  parent.appendChild(clone);
}

