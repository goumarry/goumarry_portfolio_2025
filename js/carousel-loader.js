
document.addEventListener("DOMContentLoaded", function () {
  const loadCarousel = (containerId, projectFiles) => {
    const carouselContent = document.getElementById(containerId);
    projectFiles.forEach((file, index) => {
      fetch(file.path)
        .then(response => response.text())
        .then(html => {
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = html.trim();
          const carouselItem = tempDiv.firstChild;
          if (index === 0) {
            carouselItem.classList.add("active");
          }
          carouselContent.appendChild(carouselItem);
        });
    });
  };

  const allProjects = [
    { path: "projets/projet1.html", category: "BUT1" },
    { path: "projets/projet2.html", category: "BUT1" },
    { path: "projets/projet3.html", category: "BUT1" },
    { path: "projets/projet4.html", category: "BUT2" },
    { path: "projets/projet5.html", category: "BUT2" },
    { path: "projets/projet6.html", category: "BUT2" },
    { path: "projets/projet7.html", category: "BUT3" },
    { path: "projets/projet8.html", category: "BUT3" },
    { path: "projets/projet9.html", category: "BUT3" }
  ];

  const groupedProjects = {
    BUT1: [],
    BUT2: [],
    BUT3: []
  };

  allProjects.forEach(project => {
    if (groupedProjects[project.category]) {
      groupedProjects[project.category].push(project);
    }
  });

  loadCarousel("carouselBUT1", groupedProjects.BUT1);
  loadCarousel("carouselBUT2", groupedProjects.BUT2);
  loadCarousel("carouselBUT3", groupedProjects.BUT3);
});
