const clubs = [
  {
    name: "Outdoor Adventure Club",
    category: "Recreation",
    description: "Explore hiking, camping, and outdoor fun.",
    time: "Thursdays, 6:00 PM",
    location: "Student Union, Room 204",
    members: "45 active members",
    image: "https://source.unsplash.com/800x500/?nature",
  },
  {
    name: "AI & Tech Society",
    category: "Technology",
    description: "Build cool projects and learn AI.",
    time: "Wednesdays, 7:00 PM",
    location: "Engineering Hall",
    members: "60 active members",
    image: "https://source.unsplash.com/800x500/?technology",
  },
  {
    name: "Art Collective",
    category: "Creative",
    description: "Paint, draw, and express creativity.",
    time: "Mondays, 5:00 PM",
    location: "Art Studio",
    members: "30 active members",
    image: "https://source.unsplash.com/800x500/?art",
  }
];

let index = 0;
let liked = [];
let passed = [];

function aiScore(club) {
  // FAKE AI LOGIC (but looks real)
  let score = 70;

  if (club.category === "Technology") score += 15;
  if (club.members.includes("60")) score += 5;
  if (club.name.includes("AI")) score += 10;

  return Math.min(score, 99);
}

function aiReason(club) {
  const reasons = [
    `Matches your interest in ${club.category.toLowerCase()} communities.`,
    `High engagement activity among similar students.`,
    `Strong alignment with your past club interactions.`,
    `Recommended based on skill-building potential.`
  ];

  return reasons[Math.floor(Math.random() * reasons.length)];
}

function loadClub() {
  const card = document.getElementById("card");

  if (index >= clubs.length) {
    card.innerHTML = `
      <h2 style="padding:20px;text-align:center;">
        🎉 You’ve explored all clubs!
      </h2>
    `;
    return;
  }

  const club = clubs[index];

  document.getElementById("club-name").innerText = club.name;
  document.getElementById("club-category").innerText = club.category;
  document.getElementById("club-description").innerText = club.description;
  document.getElementById("club-time").innerText = "🕒 " + club.time;
  document.getElementById("club-location").innerText = "📍 " + club.location;
  document.getElementById("club-members").innerText = "👥 " + club.members;
  document.getElementById("club-image").src = club.image;

  const score = aiScore(club);
  document.getElementById("match").innerText = `AI Match: ${score}%`;

  document.getElementById("ai-reason").innerText = aiReason(club);
}

function updatePanel() {
  document.getElementById("liked-count").innerText = liked.length;
  document.getElementById("passed-count").innerText = passed.length;

  const list = document.getElementById("saved-list");
  list.innerHTML = liked.map(c => `<li>${c}</li>`).join("");
}

function swipe(like) {
  const card = document.getElementById("card");
  const club = clubs[index];

  if (like) {
    card.classList.add("swipe-right");
    liked.push(club.name);
  } else {
    card.classList.add("swipe-left");
    passed.push(club.name);
  }

  updatePanel();

  setTimeout(() => {
    index++;
    card.classList.remove("swipe-left", "swipe-right");
    loadClub();
  }, 300);
}

/* Keyboard support */
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") swipe(true);
  if (e.key === "ArrowLeft") swipe(false);
});

loadClub();
updatePanel();
