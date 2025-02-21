document.addEventListener("DOMContentLoaded", function() {
    const form = document.forms["f1"];
    const submitButton = document.getElementById("submit-button");
    
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        
        let name = document.querySelector(".customer-name").value.trim();
        let phone = document.querySelector(".phone-number").value.trim();
        let email = document.querySelector(".email").value.trim();
        
        if (!name || !phone || !email) {
            alert("Please fill in all customer details.");
            return;
        }

        let products = [];
        let totalCost = 0;
        
        const items = [
            { name: "Apple", price: 10 },
            { name: "Banana", price: 5 },
            { name: "Avocado", price: 7 }
        ];
        
        const checkboxes = document.querySelectorAll("input[name='fruit']");
        const quantities = document.querySelectorAll(".fruit-qty");
        
        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                let quantity = parseFloat(quantities[index].value);
                if (!isNaN(quantity) && quantity > 0) {
                    products.push({ name: items[index].name, quantity, price: items[index].price });
                    totalCost += items[index].price * quantity;
                }
            }
        });
        
        if (products.length === 0) {
            alert("Please select at least one product and enter a valid quantity.");
            return;
        }
        
        localStorage.setItem("customerName", name);
        localStorage.setItem("customerPhone", phone);
        localStorage.setItem("customerEmail", email);
        localStorage.setItem("orderedProducts", JSON.stringify(products));
        localStorage.setItem("totalCost", totalCost);
        
        window.location.href = "receipt.html";
    });
});
