async function loadMedicines() {
    try {
        const response = await fetch('http://localhost:8000/medicines');
        const data = await response.json();

        const list = document.getElementById('medicine-list');
        list.innerHTML = '';

        
        data.medicines.forEach(med => {
            list.innerHTML += `
                <div>
                    <strong>${med.name}</strong> - ${med.price ?? "No price available"}
                </div>`;
        });

    } catch (err) {
        console.error("Failed to fetch medicines:", err);
        document.getElementById("medicine-list").innerHTML =
            "<p style='color:red;'>Unable to load data.</p>";
    }
}

loadMedicines();