const currentTab = "all";

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");


function toggleButtons(tab) {
  const tabs = ["all", "interview", "rejected"];

  for (const t of tabs) {
    const tabName = document.getElementById(`tab-${t}`);
    if (t === tab) {
      tabName.classList.add("btn-primary");
    } 
    else {
      tabName.classList.remove("btn-primary");
    }
  }

  const containers = [allContainer, interviewContainer, rejectedContainer];

  for(const container of containers) {
    container.classList.add("hidden");
  }

  if(tab === "all") {
    allContainer.classList.remove("hidden");
  }
  else if(tab === "interview") {
    interviewContainer.classList.remove("hidden");
  }
  else {
    rejectedContainer.classList.remove("hidden");
  }
}
toggleButtons(currentTab);