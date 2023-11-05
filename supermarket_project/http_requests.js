import axios from 'axios';

axios.post('http://localhost/supermarket-backend/register.php', {
  username,
  password,
  email,
})
.then(response => {
  // Handle the response here, e.g., show a success message.
})
.catch(error => {
  // Handle errors, e.g., show an error message.
});
