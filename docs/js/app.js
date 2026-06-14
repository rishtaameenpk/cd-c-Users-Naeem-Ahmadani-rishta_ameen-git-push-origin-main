const STORAGE_KEY = 'rishta-ameen-profiles';
const MY_PROFILE_KEY = 'rishta-ameen-my-profile';

const demoProfiles = [
  {
    id: 'demo-1',
    name: 'Ayesha Khan',
    age: 26,
    city: 'Lahore',
    education: 'MBA',
    profession: 'Marketing Manager',
    about: 'Family-oriented, values faith and education.',
  },
  {
    id: 'demo-2',
    name: 'Hassan Ali',
    age: 29,
    city: 'Karachi',
    education: 'BSc Computer Science',
    profession: 'Software Engineer',
    about: 'Looking for a respectful partner with shared goals.',
  },
  {
    id: 'demo-3',
    name: 'Fatima Ahmed',
    age: 24,
    city: 'Islamabad',
    education: 'MBBS',
    profession: 'Medical Officer',
    about: 'Prefers a caring family environment and honest communication.',
  },
];

function loadProfiles() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveProfiles(profiles) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
}

function loadMyProfile() {
  try {
    return JSON.parse(localStorage.getItem(MY_PROFILE_KEY) || 'null');
  } catch {
    return null;
  }
}

function saveMyProfile(profile) {
  localStorage.setItem(MY_PROFILE_KEY, JSON.stringify(profile));
}

function allProfiles() {
  return [...demoProfiles, ...loadProfiles()];
}

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach((screen) => {
    screen.classList.toggle('active', screen.id === screenId);
  });
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.screen === screenId);
  });
}

function profileCard(profile) {
  return `
    <article class="profile-card">
      <div class="profile-card-header">
        <h3>${profile.name}</h3>
        <span class="badge">${profile.age} yrs</span>
      </div>
      <p class="profile-meta">${profile.city} · ${profile.education}</p>
      <p class="profile-meta">${profile.profession}</p>
      <p class="profile-about">${profile.about}</p>
      <button type="button" class="btn btn-small" data-interest="${profile.id}">Show Interest</button>
    </article>
  `;
}

function renderBrowse() {
  const list = document.getElementById('profile-list');
  const profiles = allProfiles();
  list.innerHTML = profiles.length
    ? profiles.map(profileCard).join('')
    : '<p class="empty-state">No profiles yet. Register your profile to start testing.</p>';

  list.querySelectorAll('[data-interest]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const profile = profiles.find((item) => item.id === btn.dataset.interest);
      showToast(`Interest sent to ${profile.name} (demo)`);
    });
  });
}

function renderMyProfile() {
  const container = document.getElementById('my-profile-content');
  const profile = loadMyProfile();

  if (!profile) {
    container.innerHTML = `
      <p class="empty-state">You have not created a profile yet.</p>
      <button type="button" class="btn btn-primary" data-go-register>Register Now</button>
    `;
    container.querySelector('[data-go-register]').addEventListener('click', () => {
      showScreen('screen-register');
    });
    return;
  }

  container.innerHTML = `
    <article class="profile-card profile-card-own">
      <div class="profile-card-header">
        <h3>${profile.name}</h3>
        <span class="badge">My Profile</span>
      </div>
      <p class="profile-meta">${profile.city} · ${profile.age} years</p>
      <p class="profile-meta">${profile.education} · ${profile.profession}</p>
      <p class="profile-about">${profile.about}</p>
      <p class="profile-phone">Phone: ${profile.phone}</p>
    </article>
  `;
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function handleRegister(event) {
  event.preventDefault();
  const form = event.target;
  const profile = {
    id: `user-${Date.now()}`,
    name: form.name.value.trim(),
    age: Number(form.age.value),
    city: form.city.value.trim(),
    education: form.education.value.trim(),
    profession: form.profession.value.trim(),
    phone: form.phone.value.trim(),
    about: form.about.value.trim(),
  };

  if (!profile.name || !profile.city || !profile.phone) {
    showToast('Please fill in name, city, and phone.');
    return;
  }

  saveMyProfile(profile);
  const profiles = loadProfiles().filter((item) => item.id !== profile.id);
  profiles.unshift(profile);
  saveProfiles(profiles);
  form.reset();
  showToast('Profile saved. You can browse and test now.');
  renderBrowse();
  renderMyProfile();
  showScreen('screen-browse');
}

document.querySelectorAll('.tab-btn').forEach((btn) => {
  btn.addEventListener('click', () => showScreen(btn.dataset.screen));
});

document.getElementById('register-form').addEventListener('submit', handleRegister);
document.getElementById('test-banner-dismiss').addEventListener('click', () => {
  document.getElementById('test-banner').hidden = true;
});

renderBrowse();
renderMyProfile();
showScreen('screen-home');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
