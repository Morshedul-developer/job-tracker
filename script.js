let currentTab = "tab-all";

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");
const noJobs = document.getElementById("no-jobs");

const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const available = document.getElementById("available-jobs");

function switchTab(tab) {
  currentTab = tab;
  const tabs = ["tab-all", "tab-interview", "tab-rejected"];
  for (let t of tabs) {
    if (t === tab) {
      document.getElementById(t).classList.add("btn-primary");
    } else {
      document.getElementById(t).classList.remove("btn-primary");
    }
  }
  const containers = [allContainer, interviewContainer, rejectedContainer];

  for (const container of containers) {
    container.classList.add("hidden");
  }
  if (currentTab === "tab-all") {
    allContainer.classList.remove("hidden");
  } else if (currentTab === "tab-interview") {
    interviewContainer.classList.remove("hidden");
  } else {
    rejectedContainer.classList.remove("hidden");
  }
  updateCounts();
}
switchTab(currentTab);

document.getElementById("job-list").addEventListener("click", function (e) {
  const clickedElement = e.target;
  const card = clickedElement.closest(".card");
  const cardParent = card.parentNode;
  const status = card.querySelector(".not-applied");

  if (clickedElement.classList.contains("btn-interview")) {
    interviewContainer.appendChild(card);
    status.classList.remove("text-error");
    status.classList.add("text-success");
    status.innerText = "INTERVIEW";
  } else if (clickedElement.classList.contains("btn-rejected")) {
    rejectedContainer.appendChild(card);
    status.classList.remove("text-success");
    status.classList.add("text-error");
    status.innerText = "REJECTED";
  } else if (clickedElement.classList.contains("btn-delete")) {
    cardParent.removeChild(card);
  }
  updateCounts();
});

function updateCounts() {
  const counts = {
    "tab-all": allContainer.children.length,
    "tab-interview": interviewContainer.children.length,
    "tab-rejected": rejectedContainer.children.length,
  };
  totalCount.innerText = counts["tab-all"];
  interviewCount.innerText = counts["tab-interview"];
  rejectedCount.innerText = counts["tab-rejected"];
  available.innerText = counts[currentTab];
  if (counts[currentTab] < 1) {
    noJobs.classList.remove("hidden");
  } else {
    noJobs.classList.add("hidden");
  }
}
updateCounts();