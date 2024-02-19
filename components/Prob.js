import React, { useState } from 'react';

export default function Decode(message_file) {
  // Create a state variable to store the decoded message
  const [decodedMessage, setDecodedMessage] = useState('');

  // Fetch the contents of the input file
  fetch('/input.txt')
    .then(response => response.text())
    .then(text => {
      // Split the text content into an array of lines
      const lines = text.split('\n');

      // Extract the words corresponding to the numbers at the end of each pyramid line
      const message = lines
        .filter((_, i) => i % 2 === 1)
        .map(line => line.split(' ')[1])
        .reverse()
        .join(' ');

      // Set the decoded message state variable
      setDecodedMessage(message);
    });

  // Return a React component that displays the decoded message
  return (
    <div>
      <p>Decoded message:</p>
      <p><strong>{decodedMessage}</strong></p>
    </div>
  );
}
