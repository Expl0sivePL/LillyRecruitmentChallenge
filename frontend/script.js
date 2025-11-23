function validateMedicineName(med) {
    if (!med || typeof med !== 'object') {
        return {
            name: "Invalid medicine data",
            price: "N/A"
        }
    }

    let name; 
    if (typeof med.name === 'string' && med.name.trim().length > 0) {
        name = med.name.trim();
    } else {
        name = "Unnamed Medicine";
    }

    let price;
    if (typeof med.price === 'number' && med.price >= 0) {
        price = `$${med.price.toFixed(2)}`;
    } else {
        price = "No price available"
    }

    return { name, price };
}


async function loadMedicines() {
    try {
        const response = await fetch('http://localhost:8000/medicines');
        const data = await response.json();

        const medicines = [];

        const list = document.getElementById('medicine-list');
        list.innerHTML = '';

        
        data.medicines.forEach(rawMed => {
            const med = validateMedicineName(rawMed);
            medicines.push(med);
            list.innerHTML += `
                <div>
                    <strong>${med.name}</strong> - ${med.price}"}
                </di>`;
        });

    } catch (err) {
        console.error("Failed to fetch medicines:", err);
        document.getElementById("medicine-list").innerHTML =
            "<p style='color:red;'>Unable to load data.</p>";
    }
}

loadMedicines();

function addMedicine() {
    const form = document.getElementById('medicine-form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('medicine-name').value;
        const price = parseFloat(document.getElementById('medicine-price').value);

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);

        try {
            const response = await fetch('http://localhost:8000/create', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
            console.log(result);
            loadMedicines();
            form.reset();

        } catch (err) {
            console.error("Failed to add medicine:", err);
            alert("Error adding medicine. Please try again.");
        };
    });
}
addMedicine();

async function displayAverage() {
    const avgDiv = document.getElementById('average-price');
    avgDiv.innerHTML = '';

   try {
        const response = await fetch('http://localhost:8000/average')
        const data = await response.json();
        
        const average = document.createElement('p');
        average.textContent = `Average Price: $${data.average.toFixed(2)}`;
        avgDiv.appendChild(average);

   } catch (err) {
        console.error("Failed to fetch average price:", err);
        avgDiv.innerHTML = "<p style='color:red;'>Unable to load average price.</p>";
   }
};
displayAverage();