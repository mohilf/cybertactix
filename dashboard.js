// ===== Toggle Profile Dropdown =====
document.getElementById("profileIcon").addEventListener("click", () => {
  const dropdown = document.getElementById("dropdownMenu");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";

  const email = localStorage.getItem("userEmail") || "User";
  document.getElementById("dropdownEmail").textContent = email;
});

// ===== Logout Functionality =====
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "index.html";
});

// ===== Toggle Edit Profile Section =====
document.getElementById("editProfileBtn").addEventListener("click", () => {
  const section = document.getElementById("editProfileSection");
  section.style.display = section.style.display === "block" ? "none" : "block";

  document.getElementById("editId").value = localStorage.getItem("userId") || "";
  document.getElementById("editEmail").value = localStorage.getItem("userEmail") || "";
});

// ===== Save Edited Profile =====
document.getElementById("saveBtn").addEventListener("click", () => {
  const newId = document.getElementById("editId").value.trim();
  const newEmail = document.getElementById("editEmail").value.trim();

  if (newId && newEmail) {
    localStorage.setItem("userId", newId);
    localStorage.setItem("userEmail", newEmail);
    document.getElementById("saveMsg").textContent = "✅ Profile updated!";
    setTimeout(() => {
      document.getElementById("saveMsg").textContent = "";
    }, 3000);
  } else {
    document.getElementById("saveMsg").textContent = "❌ Fields cannot be empty.";
  }
});

// ===== Blacklink Projects List Toggle =====
document.getElementById("blacklinkLink").addEventListener("click", (e) => {
  e.preventDefault();
  showBlacklinkReports();
});

// ===== Function to Show Reports =====
function showBlacklinkReports() {
  const section = document.getElementById("blacklinkSection");
  const list = document.getElementById("blacklinkList");
  section.style.display = "block";

  const reports = [
    { date: "26 July 2025", time: "10:00 AM", URL: "https://docs.google.com/spreadsheets/d/1cMwE9wwVr1IRrAFhtmsIqXFhnuJMBXcT3_zAC_00UA4/edit?gid=0#gid=0" },
    { date: "25 July 2025", time: "11:30 AM", URL: "https://docs.google.com/spreadsheets/d/1YlDCB5MTx9UsLev0zObHp5TVy_l_qwM1GsYwFafUNJg/edit?gid=0#gid=0" },
    { date: "24 July 2025", time: "09:15 AM", file: "https://docs.google.com/spreadsheets/d/17PeenQ045ia9A5muagg1apVhSiUFmIO_Gerg9gXtmRU/edit?gid=0#gid=0" },
  ];

  list.innerHTML = "";

  reports.forEach((report) => {
    const row = document.createElement("div");
    row.classList.add("report-row");

    let actionButton = "";

    if (report.URL) {
      actionButton = `<a href="${report.URL}" target="_blank">
                        <button class="open-link-btn" type="button">Open Link</button>
                      </a>`;
    } else if (report.file) {
      actionButton = `<form action="${report.file}" method="get" target="_blank">
                        <button class="download-btn" type="submit">Download</button>
                      </form>`;
    }

    row.innerHTML = `
      <span>📅 ${report.date}</span>
      <span>⏰ ${report.time}</span>
      ${actionButton}
    `;

    list.appendChild(row);
  });
}

// ===== Auto-hide Dropdown When Clicking Outside =====
document.addEventListener("click", (e) => {
  const dropdown = document.getElementById("dropdownMenu");
  const profileIcon = document.getElementById("profileIcon");
  if (!dropdown.contains(e.target) && !profileIcon.contains(e.target)) {
    dropdown.style.display = "none";
  }
});

