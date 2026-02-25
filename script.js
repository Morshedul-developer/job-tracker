const currentTab = "all";

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");

const total = document.getElementById("total");
const available = document.getElementById("available-jobs");

function toggleButtons(tab) {
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

  if (tab === "all") {
    allContainer.classList.remove("hidden");
  } else if (tab === "interview") {
    interviewContainer.classList.remove("hidden");
  } else {
    rejectedContainer.classList.remove("hidden");
  }
}
toggleButtons(currentTab);
total.innerText = allContainer.children.length;
available.innerText = allContainer.children.length;

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
    total.innerText = allContainer.children.length;
    available.innerText = allContainer.children.length;
  }
});
