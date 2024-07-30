document.addEventListener('DOMContentLoaded', () => {
    const planForm = document.getElementById('planForm');

    planForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(planForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log('Submitting plan:', data); // Log data being submitted

        try {
            const response = await fetch('/api/plans', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log('Success:', responseData);
            alert('Plan submitted successfully');
            planForm.reset();
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting plan');
        }
    });
});
app.post('/api/plans', async (req, res) => {
    console.log('Received plan submission:', req.body); // Log received data
    const plan = new Plan(req.body);
    try {
        const newPlan = await plan.save();
        res.status(201).json(newPlan);
    } catch (err) {
        console.error('Error saving plan:', err);
        res.status(400).json({ message: err.message });
    }
});
