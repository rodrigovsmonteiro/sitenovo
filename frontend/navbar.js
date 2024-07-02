document.addEventListener('DOMContentLoaded', function () {
    const servicesButton = document.getElementById('services-button');
    const dropdownIcon = document.getElementById('dropdown-icon');
    const servicesDropdown = document.getElementById('services-dropdown');

    servicesButton.addEventListener('click', function (e) {
        e.preventDefault();
        servicesDropdown.classList.toggle('hidden');
        dropdownIcon.classList.toggle('rotate-180');
    });

    document.addEventListener('click', function (e) {
        if (!servicesButton.contains(e.target) && !servicesDropdown.contains(e.target)) {
            servicesDropdown.classList.add('hidden');
            dropdownIcon.classList.remove('rotate-180');
        }
    });
});
