export function upcomingTaskList() {
 
  const content = document.getElementById("content");
  content.innerHTML = ''; // Clear previous content

  const contentWrapper = document.createElement("div");
  contentWrapper.classList.add("content-wrapper");

  const announcement = document.createElement("h2");
  announcement.className = "announcement";
  announcement.textContent = "Under construction🔧";

  contentWrapper.appendChild(announcement);

  return contentWrapper;
}