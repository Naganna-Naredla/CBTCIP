document.addEventListener('DOMContentLoaded', () => {
    const plansContainer = document.getElementById('plans');
    const queriesContainer = document.getElementById('queries');

    function fetchPlans() {
        fetch('/api/plans')
            .then(response => response.json())
            .then(plans => {
                plansContainer.innerHTML = '<h2>Plans:</h2>';
                if (plans.length === 0) {
                    plansContainer.innerHTML += '<p>No plans available.</p>';
                } else {
                    plans.forEach(plan => {
                        const planItem = document.createElement('div');
                        planItem.classList.add('flex-item');
                        planItem.innerHTML = `
                            <h3>${plan.name}</h3>
                            <p><span>Event Type:</span> ${plan.eventType}</p>
                            <p><span>Food:</span> ${plan.food}</p>
                            <p><span>Venue:</span> ${plan.venue}</p>
                            <p><span>Email:</span> ${plan.email}</p>
                            <p><span>Phone:</span> ${plan.phone}</p>
                            <p><span>Event Date:</span> ${new Date(plan.eventDate).toLocaleDateString()}</p>
                            <p><span>Message:</span> ${plan.message || 'N/A'}</p>
                        `;
                        plansContainer.appendChild(planItem);
                    });
                }
            })
            .catch(err => {
                console.error('Error fetching plans:', err);
                plansContainer.innerHTML = '<p>Error fetching plans.</p>';
            });
    }

    function fetchQueries() {
        fetch('/api/contact')
            .then(response => response.json())
            .then(queries => {
                queriesContainer.innerHTML = '<h2>Queries:</h2>';
                if (queries.length === 0) {
                    queriesContainer.innerHTML += '<p>No queries available.</p>';
                } else {
                    queries.forEach(query => {
                        const queryItem = document.createElement('div');
                        queryItem.classList.add('flex-item');
                        queryItem.innerHTML = `
                            <h3>${query.name}</h3>
                            <p><span>Email:</span> ${query.email}</p>
                            <p><span>Message:</span> ${query.message}</p>
                        `;
                        queriesContainer.appendChild(queryItem);
                    });
                }
            })
            .catch(err => {
                console.error('Error fetching queries:', err);
                queriesContainer.innerHTML = '<p>Error fetching queries.</p>';
            });
    }

    fetchPlans();
    fetchQueries();
});
