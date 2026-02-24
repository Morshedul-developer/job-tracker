const interviewList = [];
const rejectedList = [];

const jobList = document.getElementById("job-list");
const interviewJobs = document.getElementById("interview");
const rejectedJobs = document.getElementById("rejected");
const availableJobs = document.getElementById("available-jobs");
const totalJobs = document.getElementById("total");
const interviewCount = document.getElementById("interview");
const rejectedCount = document.getElementById("rejected");
const noJobs = document.getElementById("no-jobs");

const mainContainer = document.querySelector("main");
const filterSection = document.getElementById("filter-section");

const allBtn = document.getElementById("btn-all");
const interviewBtn = document.getElementById("filter-btn-interview");
const rejectedBtn = document.getElementById("filter-btn-rejected");

// count the jobs
function jobCounts() {
  totalJobs.innerText = jobList.children.length;
  availableJobs.innerText = jobList.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
jobCounts();

// toggling the buttons
function toggleButtons(id) {
  allBtn.classList.add("btn-outline-gray-500");
  interviewBtn.classList.add("btn-outline-gray-500");
  rejectedBtn.classList.add("btn-outline-gray-500");

  allBtn.classList.remove("btn-primary");
  interviewBtn.classList.remove("btn-primary");
  rejectedBtn.classList.remove("btn-primary");

  const selected = document.getElementById(id);
  selected.classList.add("btn-primary");
  selected.classList.remove("btn-outline-gray-500");

  if (id == "btn-all") {
    jobList.classList.remove("hidden");
    noJobs.classList.remove("block");
    noJobs.classList.add("hidden");
    filterSection.classList.add("hidden");
  } else if (id == "filter-btn-interview") {
    noJobs.classList.remove("hidden");
    noJobs.classList.add("block");
    jobList.classList.add("hidden");
    filterSection.classList.remove("hidden");
    if (interviewList.length !== 0) {
      noJobs.classList.add("hidden");
      noJobs.classList.remove("block");
    }
  } else if (id == "filter-btn-rejected") {
    noJobs.classList.remove("hidden");
    noJobs.classList.add("block");
    jobList.classList.add("hidden");
    filterSection.classList.remove("hidden");
    if (rejectedList.length !== 0) {
      noJobs.classList.add("hidden");
      noJobs.classList.remove("block");
    }
  }
}

// main functionality
mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-interview")) {
    const parentNode = event.target.parentNode.parentNode;

    const company = parentNode.querySelector(".company").innerText;
    const position = parentNode.querySelector(".position").innerText;
    const location = parentNode.querySelector(".location").innerText;
    const type = parentNode.querySelector(".type").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const description = parentNode.querySelector(".description").innerText;
    const status = parentNode.querySelector(".not-applied");
    status.classList.add("text-info");

    parentNode.querySelector(".not-applied").innerText = "Applied";

    const cardInfo = {
      company,
      position,
      location,
      type,
      salary,
      status: "Applied",
      description,
    };

    const companyExist = interviewList.find(
      (item) => item.company == cardInfo.company,
    );

    if (!companyExist) {
      interviewList.push(cardInfo);
    }
    jobCounts();
    renderInterviewJobs();
  } else if (event.target.classList.contains("btn-rejected")) {
    const parentNode = event.target.parentNode.parentNode;

    const company = parentNode.querySelector(".company").innerText;
    const position = parentNode.querySelector(".position").innerText;
    const location = parentNode.querySelector(".location").innerText;
    const type = parentNode.querySelector(".type").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const description = parentNode.querySelector(".description").innerText;
    const status = parentNode.querySelector(".not-applied");
    status.classList.add("text-info");

    parentNode.querySelector(".not-applied").innerText = "Rejected";

    const cardInfo = {
      company,
      position,
      location,
      type,
      salary,
      status: "Rejected",
      description,
    };

    const companyExist = interviewList.find(
      (item) => item.company == cardInfo.company,
    );

    if (!companyExist) {
      rejectedList.push(cardInfo);
    }
    jobCounts();
    renderRejectedJobs();
  } 
  else if (event.target.closest(".btn-delete")) {
    const btn = event.target.closest(".btn-delete");
    const card = btn.closest(".space-y-5");

    card.remove();
    jobCounts();
  }
});

function renderInterviewJobs() {
  filterSection.innerHTML = "";

  for (let item of interviewList) {
    const div = document.createElement("div");
    div.className = "space-y-5 bg-white p-6 border border-gray-200 rounded-lg";
    div.innerHTML = `
    <div class="flex justify-between items-center">
              <div>
                <h2 class="company text-[18px] font-semibold leading-[26px] mb-1">
                  ${item.company}
                </h2>
                <h3 class="position leading-[22px] text-gray-500">
                  ${item.position}
                </h3>
              </div>
              <button
                class="w-10 h-10 flex items-center justify-center border rounded-full btn btn-outline btn-error"
              >
                <i class="fa-regular fa-trash-can text-[14px]"></i>
              </button>
            </div>
            <div class="flex gap-7 text-gray-500 text-[14px]">
              <p class="location">${item.location}</p>
              <ul class="flex gap-7">
                <li class="type list-disc">${item.type}</li>
                <li class="salary list-disc">${item.salary}</li>
              </ul>
            </div>
            <div>
              <p
                class="not-applied bg-[#EEF4FF] inline-block text-[14px] font-medium leading-5 px-3 py-2 mb-2 text-success"
              >
                ${item.status}
              </p>
              <p class="description leading-5 text-[14px] text-[#323B49]">
                ${item.description}
              </p>
            </div>
            <div class="flex gap-2">
              <button class="btn-interview btn btn-outline btn-success">INTERVIEW</button>
              <button class="btn-rejected btn btn-outline btn-error">REJECTED</button>
            </div>
    `;
    filterSection.appendChild(div);
  }
}

function renderRejectedJobs() {
  filterSection.innerHTML = "";

  for (let item of rejectedList) {
    const div = document.createElement("div");
    div.className = "space-y-5 bg-white p-6 border border-gray-200 rounded-lg";
    div.innerHTML = `
    <div class="flex justify-between items-center">
              <div>
                <h2 class="company text-[18px] font-semibold leading-[26px] mb-1">
                  ${item.company}
                </h2>
                <h3 class="position leading-[22px] text-gray-500">
                  ${item.position}
                </h3>
              </div>
              <button
                class="w-10 h-10 flex items-center justify-center border rounded-full btn btn-outline btn-error"
              >
                <i class="fa-regular fa-trash-can text-[14px]"></i>
              </button>
            </div>
            <div class="flex gap-7 text-gray-500 text-[14px]">
              <p class="location">${item.location}</p>
              <ul class="flex gap-7">
                <li class="type list-disc">${item.type}</li>
                <li class="salary list-disc">${item.salary}</li>
              </ul>
            </div>
            <div>
              <p
                class="not-applied bg-[#EEF4FF] inline-block text-[14px] font-medium leading-5 px-3 py-2 mb-2 text-error"
              >
                ${item.status}
              </p>
              <p class="description leading-5 text-[14px] text-[#323B49]">
                ${item.description}
              </p>
            </div>
            <div class="flex gap-2">
              <button class="btn-interview btn btn-outline btn-success">INTERVIEW</button>
              <button class="btn-rejected btn btn-outline btn-error">REJECTED</button>
            </div>
    `;
    filterSection.appendChild(div);
  }
}
