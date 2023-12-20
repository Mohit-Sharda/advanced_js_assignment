document.addEventListener('DOMContentLoaded', function () {
    const userDataForm = document.getElementById('userDataForm');
    const retrieveDataBtn = document.getElementById('retrieveData');
    const displayArea = document.getElementById('displayArea');

    userDataForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;

        // Store data in Local Storage
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);

        // Clear form fields
        userDataForm.reset();
    });

    retrieveDataBtn.addEventListener('click', function () {
        // Retrieve data from Local Storage
        const storedName = localStorage.getItem('name');
        const storedAge = localStorage.getItem('age');

        // Display data in a table
        if (storedName && storedAge) {
            displayArea.innerHTML = `
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <td>${storedName}</td>
                        <td>${storedAge}</td>
                    </tr>
                </table>
            `;
        } else {
            displayArea.innerHTML = 'No data available.';
        }
    });
});