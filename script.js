const interview = [];
const rejected = [];

const jobList = document.getElementById("job-list");
const interviewJobs = document.getElementById("interview");
const rejectedJobs = document.getElementById("rejected");
const availableJobs = document.getElementById("available-jobs");

function jobCounts() {
    const totalJobs = document.getElementById('total');
    totalJobs.innerText = jobList.children.length;
    availableJobs.innerText = jobList.children.length;

    interviewJobs.innerText = interview.length;
    rejectedJobs.innerText = rejected.length;
}
jobCounts();