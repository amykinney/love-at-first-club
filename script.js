const clubs = [
  {
    name: "Outdoor Adventure Club",
    category: "Recreation",
    description: "Explore hiking, camping, and outdoor fun.",
    time: "Thursdays, 6:00 PM",
    location: "Student Union, Room 204",
    members: "45 active members",
    image: "https://source.unsplash.com/400x300/?nature",
    match: "95% Match"
  },
  {
    name: "AI & Tech Society",
    category: "Technology",
    description: "Build cool projects and learn AI.",
    time: "Wednesdays, 7:00 PM",
    location: "Engineering Hall",
    members: "60 active members",
    image: "https://source.unsplash.com/400x300/?technology",
    match: "92% Match"
  },
  {
    name: "Art Collective",
    category: "Creative",
    description: "Paint, draw, and express creativity.",
    time: "Mondays, 5:00 PM",
    location: "Art Studio",
    members: "30 active members",
    image: "https://source.unsplash.com/400x300/?art",
    match: "89% Match"
  }
];

let index = 0;

function loadClub() {
  if (index >= clubs.length) {
    document.getElementById("card").innerHTML =
      "<h2 style='padding:20px;text-align:center;'>No more clubs 🎉</h2>";
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
  document.getElementById("match").innerText = club.match;
}

function swipe(liked) {
  if (liked) {
    console.log("Liked:", clubs[index].name);
  } else {
    console.log("Skipped:", clubs[index].name);
  }

  index++;
  loadClub();
}

loadClub();
