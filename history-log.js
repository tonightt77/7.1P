const logData = [
  { timestamp: '2023-09-26T12:00:00', eventType: 'Motion Detected', description: 'Motion detected at the front door.' },
  { timestamp: '2023-09-26T11:45:00', eventType: 'System Disarmed', description: 'The security system was disarmed.' },
  { timestamp: '2023-09-26T11:30:00', eventType: 'System Armed', description: 'The security system was successfully armed.' },
  { timestamp: '2023-09-26T11:00:00', eventType: 'Device Offline', description: 'Living room camera is currently offline.' },
  { timestamp: '2023-09-26T10:45:00', eventType: 'Door Opened', description: 'Front door was opened.' },
  { timestamp: '2023-09-26T10:30:00', eventType: 'Window Broken', description: 'A window was broken in the living room.' },
  { timestamp: '2023-09-26T10:15:00', eventType: 'Smoke Detected', description: 'Smoke detected in the kitchen.' },
  { timestamp: '2023-09-26T10:00:00', eventType: 'Temperature Change', description: 'Temperature increased in the bedroom.' },
  { timestamp: '2023-09-26T09:45:00', eventType: 'Camera Disconnected', description: 'Camera 1 is disconnected.' },
  { timestamp: '2023-09-26T09:30:00', eventType: 'User Login', description: 'User logged in from a new device.' },
  // Add more log entries as needed
];

// Format and append log entries to the list
logData.forEach(entry => {
  const listItem = document.createElement('li');
  listItem.className = 'list-group-item';
  
  const timestamp = new Date(entry.timestamp).toLocaleString();
  listItem.innerHTML = `<strong>${timestamp}</strong> - ${entry.eventType}: ${entry.description}`;
  
  document.getElementById('historyLogList').appendChild(listItem);
});
