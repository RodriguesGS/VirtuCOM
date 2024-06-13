export function initDropdowns() {
    const dropdownCategories = document.querySelector('.dropDown');
    const dropdownContent = document.querySelector('.dropdown-content-categories');

    dropdownCategories.addEventListener('mouseover', function() {
        dropdownContent.style.display = 'block';
    });

    dropdownCategories.addEventListener('mouseout', function() {
        dropdownContent.style.display = 'none';
    });

    document.addEventListener('click', function(e) {
        const dropdown = document.querySelector('.drop-user .dropdown-content');
        if (!dropdown.contains(e.target) && !document.querySelector('.drop-user').contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });

    document.querySelector('.drop-user').addEventListener('click', function() {
        const dropdown = document.querySelector('.drop-user .dropdown-content');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
}
