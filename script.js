const interview = [];
const rejected = [];

const jobList = document.getElementById("job-list");
const interviewJobs = document.getElementById("interview");
const rejectedJobs = document.getElementById("rejected");
const availableJobs = document.getElementById("available-jobs");
const noJobs = document.getElementById("no-jobs");

const allBtn = document.getElementById("btn-all");
const interviewBtn = document.getElementById("btn-interview");
const rejectedBtn = document.getElementById("btn-rejected");

// count the jobs
function jobCounts() {
    const totalJobs = document.getElementById('total');
    totalJobs.innerText = jobList.children.length;
    availableJobs.innerText = jobList.children.length;
}
jobCounts();

// toggling the buttons
function toggleButtons(id) {
    allBtn.classList.add('btn-outline-gray-500')
    interviewBtn.classList.add('btn-outline-gray-500')
    rejectedBtn.classList.add('btn-outline-gray-500')

    allBtn.classList.remove('btn-primary')
    interviewBtn.classList.remove('btn-primary')
    rejectedBtn.classList.remove('btn-primary')

    const selected = document.getElementById(id);
    selected.classList.add('btn-primary');
    selected.classList.remove('btn-outline-gray-500')
}

allBtn.addEventListener('click', function(){
    jobList.classList.remove('hidden');
    noJobs.classList.remove('block');
    noJobs.classList.add('hidden');
})
interviewBtn.addEventListener('click', function(){
    noJobs.classList.remove('hidden');
    noJobs.classList.add('block');
    jobList.classList.add('hidden');
})
rejectedBtn.addEventListener('click', function(){
    noJobs.classList.remove('hidden');
    noJobs.classList.add('block');
    jobList.classList.add('hidden');
})