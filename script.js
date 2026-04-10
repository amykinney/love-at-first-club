const clubs = [
  {
    name: "Outdoor Adventure Club",
    category: "Recreation",
    description: "Explore hiking and outdoor fun.",
    time: "Thursdays 6PM",
    location: "Student Union",
    members: "45 members",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "AI & Tech Society",
    category: "Technology",
    description: "Build AI projects and learn coding.",
    time: "Wednesdays 7PM",
    location: "Engineering Hall",
    members: "60 members",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Art Collective",
    category: "Creative",
    description: "Paint and create art.",
    time: "Mondays 5PM",
    location: "Art Studio",
    members: "30 members",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80"
  }
];

let index = 0;
let liked = [];
let passed = [];
let currentFilter = "All";
let searchQuery = "";

/* FLOW START */
function startAnalysis() {
  document.getElementById("onboarding").style.display = "none";
  document.getElementById("loading").style.display = "flex";

  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("app").style.display = "block";
    loadClub();
    updatePanel();
  }, 2000);
}

/* AI */
function aiScore(club) {
  let score = 70;
  if (club.category === "Technology") score += 15;
  if (club.name.includes("AI")) score += 10;
  return Math.min(score, 99);
}

function aiReason(club) {
  return `Matches your schedule availability and interest in ${club.category}.`;
}

/* LOAD */
function loadClub() {
  let filtered = clubs.filter(c =>
    (currentFilter === "All" || c.category === currentFilter) &&
    c.name.toLowerCase().includes(searchQuery)
  );

  if (filtered.length === 0) return;

  if (index >= filtered.length) index = 0;

  const club = filtered[index];

  document.getElementById("club-name").innerText = club.name;
  document.getElementById("club-category").innerText = club.category;
  document.getElementById("club-description").innerText = club.description;
  document.getElementById("club-time").innerText = club.time;
  document.getElementById("club-location").innerText = club.location;
  document.getElementById("club-members").innerText = club.members;
  document.getElementById("club-image").src = club.image;

  document.getElementById("match").innerText = `AI Match: ${aiScore(club)}%`;
  document.getElementById("ai-reason").innerText = aiReason(club);
}

/* SWIPE */
function swipe(like) {
  const club = clubs[index];

  if (like) liked.push(club.name);
  else passed.push(club.name);

  index++;
  loadClub();
  updatePanel();
}

/* PANEL */
function updatePanel() {
  document.getElementById("liked-count").innerText = liked.length;
  document.getElementById("passed-count").innerText = passed.length;

  document.getElementById("saved-list").innerHTML =
    liked.map(c => `<li>${c}</li>`).join("");
}

/* FILTER */
function setFilter(filter) {
  currentFilter = filter;
  index = 0;
  loadClub();
}

function filterClubs() {
  searchQuery = document.getElementById("search").value.toLowerCase();
  index = 0;
  loadClub();
}
