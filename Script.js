document.addEventListener("DOMContentLoaded", function () {
    // Dummy data for employment history
    const employmentData = [
        { position: "Web Developer", company: "ABC Company", year: "2018-2020" },
        { position: "Software Engineer", company: "XYZ Corp", year: "2020-present" },
    ];

    // Dummy data for skills/certifications
    const skillsData = ["JavaScript", "HTML", "CSS", "React", "Node.js"];

    // Update name and contact information
    document.getElementById("name").innerText = "Your Full Name";
    document.getElementById("contact").innerText = "Your Email | Your Phone Number";

    // Populate employment history
    const employmentList = document.getElementById("employment-list");
    employmentData.forEach((job) => {
        const listItem = document.createElement("li");
        listItem.innerText = `${job.position} at ${job.company} (${job.year})`;
        employmentList.appendChild(listItem);
    });

    // Populate skills/certifications
    const skillsList = document.getElementById("skills-list");
    skillsData.forEach((skill) => {
        const listItem = document.createElement("li");
        listItem.innerText = skill;
        skillsList.appendChild(listItem);
    });
});
