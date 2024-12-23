document.addEventListener('DOMContentLoaded', () => {
  const ledgerTableBody = document.querySelector('#ledgerTable tbody');

  // Simulate data fetch
  const ledgerData = [
    { date: '2024-12-01', description: 'Medicine Purchase', debit: 0, credit: 500, balance: 500 },
    { date: '2024-12-10', description: 'Payment', debit: 500, credit: 0, balance: 0 },
    // Add more rows as needed
  ];

  ledgerData.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${row.date}</td>
      <td>${row.description}</td>
      <td>${row.debit}</td>
      <td>${row.credit}</td>
      <td>${row.balance}</td>
    `;
    ledgerTableBody.appendChild(tr);
  });

  paginateTable('ledgerTable', 10); // Apply pagination
});
