document.addEventListener('DOMContentLoaded', () => {
  const pendingTableBody = document.querySelector('#pendingPaymentsTable tbody');

  // Simulate data fetch
  const pendingPayments = [
    { customer: 'Pharmacy A', invoice: 'INV123', dueDate: '2024-12-15', amount: 1200, status: 'Pending' },
    { customer: 'Pharmacy B', invoice: 'INV124', dueDate: '2024-12-18', amount: 800, status: 'Pending' },
    // Add more rows as needed
  ];

  pendingPayments.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${row.customer}</td>
      <td>${row.invoice}</td>
      <td>${row.dueDate}</td>
      <td>${row.amount}</td>
      <td><span class="badge bg-warning">${row.status}</span></td>
    `;
    pendingTableBody.appendChild(tr);
  });

  paginateTable('pendingPaymentsTable', 10); // Apply pagination
});
