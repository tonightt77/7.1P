
document.addEventListener('DOMContentLoaded', function() {
    // Get all sensor items
    var sensorItems = document.querySelectorAll('.sensor-item');

    // Loop through each sensor item
    sensorItems.forEach(function(item) {
      // Get the status span, activate button, and deactivate button for the current sensor item
      var statusSpan = item.querySelector('.status');
      var activateBtn = item.querySelector('.activate-btn');
      var deactivateBtn = item.querySelector('.deactivate-btn');

      // Add click event listener to the activate button
      activateBtn.addEventListener('click', function() {
        // Update the status text and class
        statusSpan.textContent = 'Active';
        statusSpan.className = 'status text-success';
      });

      // Add click event listener to the deactivate button
      deactivateBtn.addEventListener('click', function() {
        // Update the status text and class
        statusSpan.textContent = 'Inactive';
        statusSpan.className = 'status text-danger';
      });
    });
  });

