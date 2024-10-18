// Search functionality
const searchInput = document.getElementById('search-input');
const tableRows = document.querySelectorAll('#workTable tbody tr');

searchInput.addEventListener('input', function () {
    const filter = searchInput.value.toLowerCase();
    tableRows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const rowText = Array.from(cells).map(cell => cell.textContent.toLowerCase()).join(' ');
        row.style.display = rowText.includes(filter) ? '' : 'none';
    });
});

// Load more jobs functionality
const loadMoreBtn = document.getElementById('loadMoreBtn');
const workTableBody = document.getElementById('workTableBody');

// Additional jobs to load
const moreJobs = [
    { type: 'Job', title: 'Railway RRB NTPC 2024', date: '01-12-2024', link: '#' },
    { type: 'Job', title: 'Bank PO Recruitment 2024', date: '25-11-2024', link: '#' },
    { type: 'Result', title: 'RRB Group D Result 2024', date: '15-12-2024', link: '#' },
    { type: 'Result', title: 'IBPS PO 2024 Result', date: '20-12-2024', link: '#' },
    { type: 'Admit Card', title: 'SSC CHSL 2024 Admit Card', date: '10-12-2024', link: '#' }
];

// Add new jobs when 'View More Jobs' is clicked
loadMoreBtn.addEventListener('click', function () {
    moreJobs.forEach(job => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${job.type}</td>
            <td>${job.title}</td>
            <td>${job.date}</td>
            <td><a href="${job.link}">View</a></td>
        `;
        workTableBody.appendChild(newRow);
    });

    // Hide the button after loading more jobs
    loadMoreBtn.style.display = 'none';
});
