// Sample data.
const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    name: 'Jen Smith',
    age: 22,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    name: 'William Johnson',
    age: 35,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/56.jpg',
  },
];

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next() {
      return nextIndex < profiles.length
        ? {
            value: profiles[nextIndex++],
            done: false,
          }
        : {
            done: true,
          };
    },
  };
}

// References
const profiles = profileIterator(data);
const profileImage = document.getElementById('imageDisplay');
const profileDetails = document.getElementById('profileDisplay');

// Display the next profile.
function nextProfile() {
  // Get the next profile.
  const currentProfile = profiles.next().value;
  // If we have a next profile.
  // Display it.
  if (currentProfile !== undefined) {
    profileDetails.innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
    </ul>
  `;
    // Update profile image.
    profileImage.innerHTML = `
    <img src="${currentProfile.image}" alt="profile image">
  `;
  } else {
    // If we don't have any more profiles
    // reload the page, like a total pro. :D
    window.location.reload();
  }
}

// Call first profile.
nextProfile();

// Name event
document.getElementById('next').addEventListener('click', nextProfile);
