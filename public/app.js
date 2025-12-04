console.log("Full-Stack Playground loaded");

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded fired");
  const collapseToggle = document.getElementById("collapseToggle");
  const sidebar = document.querySelector(".sidebar");
  const sidebarItems = document.getElementById("sidebarItems");
  console.log("collapseToggle element:", collapseToggle);
  console.log("sidebar element:", sidebar);
  console.log("sidebarItems element:", sidebarItems);

  if (collapseToggle && sidebar) {
    console.log("Adding click event listener");
    collapseToggle.addEventListener("click", function () {
      console.log("Collapse button clicked");
      sidebar.classList.toggle("collapsed");
      console.log("Sidebar classes:", sidebar.className);

      if (sidebar.classList.contains("collapsed")) {
        collapseToggle.textContent = "▶";
        collapseToggle.style.transform = "rotate(0deg)";
        console.log("Sidebar collapsed");
      } else {
        collapseToggle.textContent = "▼";
        collapseToggle.style.transform = "rotate(0deg)";
        console.log("Sidebar expanded");
      }
    });
  } else {
    console.error("Could not find required elements:");
    console.error("collapseToggle found:", !!collapseToggle);
    console.error("sidebar found:", !!sidebar);
  }
});
