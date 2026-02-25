let currentTab = "all";

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");

const noJobs = document.getElementById("no-jobs");

const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const available = document.getElementById("available-jobs");

// toggle buttons
function toggleButtons(tab) {
  currentTab = tab;
  const tabs = ["all", "interview", "rejected"];

  for (const t of tabs) {
    const tabName = document.getElementById(`tab-${t}`);
    if (t === tab) {
      tabName.classList.add("btn-primary");
    } else {
      tabName.classList.remove("btn-primary");
    }
  }

  const containers = [allContainer, interviewContainer, rejectedContainer];

  for (const container of containers) {
    container.classList.add("hidden");
  }

  noJobs.classList.add("hidden");

  if (tab === "all") {
    allContainer.classList.remove("hidden");
    // if(allContainer.children.length < 1) {
    //   noJobs.classList.remove("hidden");
    // }
  } else if (tab === "interview") {
    interviewContainer.classList.remove("hidden");
    // if(interviewContainer.children.length < 1) {
    //   noJobs.classList.remove("hidden");
    // }
  } else {
    rejectedContainer.classList.remove("hidden");
    // if(rejectedContainer.children.length < 1) {
    //   noJobs.classList.remove("hidden");
    // }
  }
  updateCounts();
}
toggleButtons(currentTab);

// main functionality
document.getElementById("job-list").addEventListener("click", function (event) {
  const clickedElement = event.target;
  const card = clickedElement.closest(".card");
  const cardParent = card.parentNode;
  const status = card.querySelector(".not-applied");

  if (clickedElement.classList.contains("btn-interview")) {
    status.innerText = "INTERVIEWED";
    interviewContainer.appendChild(card);
  }
  if (clickedElement.classList.contains("btn-rejected")) {
    status.innerText = "REJECTED";
    rejectedContainer.appendChild(card);
  }
  if (clickedElement.classList.contains("btn-delete")) {
    cardParent.removeChild(card);
  }
  updateCounts();
});

function updateCounts() {
  const counts = {
    all: allContainer.children.length,
    interview: interviewContainer.children.length,
    rejected: rejectedContainer.children.length
  };
  totalCount.innerText = counts.all;
  interviewCount.innerText = counts.interview;
  rejectedCount.innerText = counts.rejected;

  available.innerText = counts[currentTab];

  if(counts[currentTab] < 1) {
    noJobs.classList.remove("hidden");
  } else {
    noJobs.classList.add("hidden");
  }
}
updateCounts();
