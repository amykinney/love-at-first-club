function aiScore(club) {
  let score = 70;

  if (club.category === "Technology") score += 15;
  if (club.name.includes("AI")) score += 10;
  if (club.members.includes("60")) score += 5;

  return Math.min(score, 99);
}

function aiReason(club) {
  return `Based on your profile behavior, this club aligns with ${club.category.toLowerCase()} interests and similar student engagement patterns.`;
}
