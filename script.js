const currentTab = "all";

function toggleButtons(tab) {
  console.log(tab);
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
}
