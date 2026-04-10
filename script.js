const clubs = [
  {
    name: "Outdoor Adventure Club",
    category: "Recreation",
    description: "Explore hiking, camping, and outdoor fun.",
    time: "Thursdays, 6:00 PM",
    location: "Student Union, Room 204",
    members: "45 active members",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "AI & Tech Society",
    category: "Technology",
    description: "Build cool projects and learn AI.",
    time: "Wednesdays, 7:00 PM",
    location: "Engineering Hall",
    members: "60 active members",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Art Collective",
    category: "Creative",
    description: "Paint, draw, and express creativity.",
    time: "Mondays, 5:00 PM",
    location: "Art Studio",
    members: "30 active members",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80",
  }
];

let index = 0;
let liked = [];
let passed = [];
let currentFilter = "All";
let searchQuery = "";

function aiScore(club) {
  let score = 70;

  if (club.category === "Technology") score += 15;
  if (club.name.includes("AI")) score += 10;
  if (club.members.includes("60")) score += 5;

  return Math.min(score, 99);
}

function aiReason(club) {
  return `Based on behavioral clustering, users with similar interests in ${club.category} showed high engagement.`;
}

function loadClub() {
  let filtered = clubs.filter(c => {
    return (currentFilter === "All" || c.category === currentFilter) &&
      c.name.toLowerCase().includes(searchQuery);
  });

  if (filtered.length === 0) return;

  if (index >= filtered.length) index = 0;

  const club = filtered[index];

  document.getElementById("club-name").innerText = club.name;
  document.getElementById("club-category").innerText = club.category;
  document.getElementById("club-description").innerText = club.description;
  document.getElementById("club-time").innerText = "🕒 " + club.time;
  document.getElementById("club-location").innerText = "📍 " + club.location;
  document.getElementById("club-members").innerText = "👥 " + club.members;
  document.getElementById("club-image").src = club.image;

  document.getElementById("match").innerText = `AI Match: ${aiScore(club)}%`;
  document.getElementById("ai-reason").innerText = aiReason(club);

  updatePanel();
}

function swipe(like) {
  const club = clubs[index];

  if (like) liked.push(club.name);
  else passed.push(club.name);

  index++;
  loadClub();
}

function updatePanel() {
  document.getElementById("liked-count").innerText = liked.length;
  document.getElementById("passed-count").innerText = passed.length;

  document.getElementById("saved-list").innerHTML =
    liked.map(c => `<li>${c}</li>`).join("");
}

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

function explainMatch() {
  alert("AI Insight: This club matches your engagement history and category preferences.");
}

loadClub();
updatePanel();
