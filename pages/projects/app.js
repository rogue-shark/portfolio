const goToProject = document.querySelectorAll('.clickable');

goToProject.forEach(project => {
  project.addEventListener('click', () => {
    const link = project.getAttribute('data-link');
    window.open(link, '_blank');
  });
});
