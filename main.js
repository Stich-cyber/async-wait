const userImage = document.getElementById("user-image");
const userName = document.getElementById("user-name");
const userJob = document.getElementById("user-job");
const userPhone = document.getElementById("user-phone");
const userAge = document.getElementById("user-age");
const userLocation = document.getElementById("user-location");
const userEmail = document.getElementById("user-email");
const changeUserButton = document.getElementById("change-user");
async function fetchRandomUser() {
  try {
    const response = await fetch(
      "https://random-data-api.com/api/users/random_user"
    );
    const user = await response.json();
    userImage.src = user.avatar;
    userName.textContent = `${user.first_name} ${user.last_name}`;
    userJob.textContent = user.employment.title;
    userPhone.textContent = user.phone_number;
    userAge.textContent = user.date_of_birth
      ? calculateAge(user.date_of_birth)
      : "N/A";
    userLocation.textContent = `${user.address.city}, ${user.address.country}`;
    userEmail.textContent = user.email;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
function calculateAge(dob) {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}
changeUserButton.addEventListener("click", fetchRandomUser);
fetchRandomUser();
