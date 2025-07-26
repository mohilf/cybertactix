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
    { date: "26 July 2025", time: "10:00 AM", file: "files/report-26jul.pdf" },
    { date: "25 July 2025", time: "11:30 AM", file: "files/report-25jul.pdf" },
    { date: "24 July 2025", time: "09:15 AM", file: "files/report-24jul.pdf" },
  ];

  list.innerHTML = "";

  reports.forEach((report) => {
    const row = document.createElement("div");
    row.classList.add("report-row");

    row.innerHTML = `
      <span>📅 ${report.date}</span>
      <span>⏰ ${report.time}</span>
      <form action="${report.file}" method="get">
        <button class="download-btn" type="submit">Download</button>
      </form>
    `;

    list.appendChild(row);
  });

  
}
