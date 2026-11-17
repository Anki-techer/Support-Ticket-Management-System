const tickets = [
  { title: 'Login redirect issue', status: 'open' },
  { title: 'Invoice download error', status: 'progress' },
  { title: 'Mobile checkout bug', status: 'resolved' },
  { title: 'Expired access token', status: 'closed' }
];

const ticketList = document.getElementById('ticket-list');

if (ticketList) {
  ticketList.innerHTML = tickets
    .map(
      ({ title, status }) => `
        <li class="ticket-item">
          <div class="ticket-info">
            <strong>${title}</strong>
            <span class="ticket-meta">Updated 12 min ago</span>
          </div>
          <span class="ticket-tag ${status}">${status.replace(/_/g, ' ')}</span>
        </li>
      `
    )
    .join('');
}
