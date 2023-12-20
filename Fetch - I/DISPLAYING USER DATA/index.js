document.addEventListener('DOMContentLoaded', function () {
    const fetchUsersBtn = document.getElementById('fetchUsers');
    const userList = document.getElementById('userList');

    fetchUsersBtn.addEventListener('click', function () {
        // Fetch user data from Reqres API
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(data => {
                // Display user data on the webpage
                renderUsers(data.data);
            })
            .catch(error => console.error('Error fetching users:', error));
    });

    function renderUsers(users) {
        // Clear previous user data
        userList.innerHTML = '';

        // Display each user in a card
        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');

            const avatar = document.createElement('img');
            avatar.src = user.avatar;
            avatar.alt = 'User Avatar';
            avatar.classList.add('user-avatar');

            const name = document.createElement('div');
            name.textContent = user.first_name + ' ' + user.last_name;
            name.classList.add('user-name');

            const email = document.createElement('div');
            email.textContent = user.email;
            email.classList.add('user-email');

            userCard.appendChild(avatar);
            userCard.appendChild(name);
            userCard.appendChild(email);

            userList.appendChild(userCard);
        });
    }
});
