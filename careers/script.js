document.addEventListener("DOMContentLoaded", function () {
    const jobOpenings = [
      {
        title: "Visual Media Interns",
        location: "Remote",
        type: "Internship",
        stipend: "3k - 8k",
        description: "We're looking for Visual Media Interns to join our creative team and bring fresh ideas to life.",
        applyLink: "http://bit.ly/visualmediaintern",
      },
    ];
  
    const jobListingsContainer = document.getElementById("job-listings");
  
    jobOpenings.forEach(job => {
      const jobCard = document.createElement("div");
      jobCard.classList.add("job-card");
    const compensationType = job.type.toLowerCase() === "internship" ? "Stipend" : "Salary";
    jobCard.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Type:</strong> ${job.type}</p>
      <p><strong>${compensationType}:</strong> ${job.stipend || job.salary}</p>
      <p>${job.description}</p>
      <a href="${job.applyLink}" class="apply-btn">Apply Now</a>
    `;
      jobListingsContainer.appendChild(jobCard);
    });
  });
  