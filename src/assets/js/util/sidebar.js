import '../../styles/util/sidebar.css'; 

// sidebar.js

console.log('test');
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.getElementById('sidebar-toggle');
        console.log('test2'); 
    toggleButton.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      sidebar.classList.toggle('expanded');
    });
  });
  