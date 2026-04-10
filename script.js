<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ClubMatch AI</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- NAVBAR -->
<div class="navbar">
  <div class="logo">ClubMatch AI</div>

  <div class="nav-links">
    <a href="#">Discover</a>
    <a href="#">Matches</a>
    <a href="#">Saved</a>
  </div>

  <div class="nav-right">
    <button class="login-btn">Log In</button>
    <div class="avatar">A</div>
  </div>
</div>

<!-- LAYOUT -->
<div class="layout">

  <!-- SIDEBAR -->
  <div class="sidebar">
    <h3>Dashboard</h3>

    <ul>
      <li>🏠 Home</li>
      <li>🔥 Trending</li>
      <li>❤️ Matches</li>
      <li>📌 Saved</li>
      <li>⚙️ Settings</li>
    </ul>

    <div class="sidebar-box">
      <h4>AI Status</h4>
      <p>Learning your preferences...</p>
      <div class="fake-bar"></div>
    </div>
  </div>

  <!-- MAIN -->
  <div class="main">

    <div class="header">
      <h1>Find Your Next Club Match</h1>
      <p>AI-powered recommendations (wireframe demo)</p>
    </div>

    <div class="controls">
      <input type="text" id="search" placeholder="Search clubs..." oninput="filterClubs()">

      <div class="filters">
        <button onclick="setFilter('All')">All</button>
        <button onclick="setFilter('Technology')">Tech</button>
        <button onclick="setFilter('Recreation')">Recreation</button>
        <button onclick="setFilter('Creative')">Creative</button>
      </div>
    </div>

    <div class="card" id="card">
      <img id="club-image" src="" />

      <div class="match-badge" id="match">AI Match</div>

      <div class="card-content">
        <h2 id="club-name"></h2>
        <p class="category" id="club-category"></p>
        <p id="club-description"></p>

        <div class="info">
          <p id="club-time"></p>
          <p id="club-location"></p>
          <p id="club-members"></p>
        </div>

        <div class="ai-box">
          <h4>AI Insight</h4>
          <p id="ai-reason"></p>
        </div>

        <button class="ai-btn" onclick="explainMatch()">
          Ask AI: Why this match?
        </button>
      </div>
    </div>

    <div class="buttons">
      <button class="no" onclick="swipe(false)">✖</button>
      <button class="yes" onclick="swipe(true)">❤</button>
    </div>

  </div>

  <!-- RIGHT PANEL -->
  <div class="panel">
    <h3>Your Activity</h3>

    <p>❤️ Liked: <span id="liked-count">0</span></p>
    <p>❌ Passed: <span id="passed-count">0</span></p>

    <div class="saved">
      <h4>Saved Clubs</h4>
      <ul id="saved-list"></ul>
    </div>

    <div class="panel-box">
      <h4>🔥 Trending AI Insight</h4>
      <p>AI Clubs are trending among students this week.</p>
    </div>
  </div>

</div>

<script src="script.js"></script>
</body>
</html>
