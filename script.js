const clubs = [
  {
    name: "AI & Tech Society",
    desc: "Build AI projects and learn together.",
    time: "Wed 7PM",
    location: "Engineering Hall",
    img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Outdoor Adventure Club",
    desc: "Hiking, camping, and outdoor trips.",
    time: "Thu 6PM",
    location: "Student Union",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Art Collective",
    desc: "Creative expression through art.",
    time: "Mon 5PM",
    location: "Art Studio",
    img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80"
  }
];

let i = 0;
let likes = 0;
let passes = 0;

function load() {
  const c = clubs[i];

  document.getElementById("name").innerText = c.name;
  document.getElementById("desc").innerText = c.desc;
  document.getElementById("time").innerText = c.time;
  document.getElementById("location").innerText = c.location;
  document.getElementById("img").src = c.img;
  document.getElementById("match").innerText = "AI Match: " + (70 + i * 10) + "%";
}

function swipe(like) {
  const c = clubs[i];

  let saved = JSON.parse(localStorage.getItem("saved") || "[]");

  if (like) {
    likes++;
    saved.push(c.name);
  } else {
    passes++;
  }

  localStorage.setItem("saved", JSON.stringify(saved));

  i++;
  if (i >= clubs.length) i = 0;

  document.getElementById("likes").innerText = likes;
  document.getElementById("passes").innerText = passes;

  load();
}

/* SIMPLE CHAT AI */
function sendChat() {
  const input = document.getElementById("chatInput").value;
  const box = document.getElementById("chatBox");

  box.innerHTML += `<p><b>You:</b> ${input}</p>`;
  box.innerHTML += `<p><b>AI:</b> This match is based on your interests and schedule alignment.</p>`;

  document.getElementById("chatInput").value = "";
}

/* DRAG SWIPE */
let card = document.getElementById("card");
let startX = 0;

card?.addEventListener("mousedown", e => startX = e.clientX);

card?.addEventListener("mouseup", e => {
  let diff = e.clientX - startX;
  if (diff > 100) swipe(true);
  if (diff < -100) swipe(false);
});

load();
