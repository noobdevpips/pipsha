// script.js

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const productSection = document.querySelector(".products");

  // Dummy product data per tab (for demo purposes)
  const productData = {
    Women: [
      { name: "adidas X Pop Polo shirt", price: "$69.99" },
      { name: "adidas X Pop TRX Vintage", price: "$69.99" }
      { name: "adidas lovely Vintage", price: "$69.99" }
    ],
    Men: [
      { name: "Butter Yard Pullover", price: "$120.00" },
      { name: "Parra Rug Pull", price: "$60.00" }
    ],
    Shoes: [
      { name: "Urban Sneakers", price: "$90.00" },
      { name: "Street Runners", price: "$85.00" }
    ],
    Bags: [
      { name: "Canvas Tote Bag", price: "$30.00" },
      { name: "Leather Backpack", price: "$75.00" }
    ],
    Accessories: [
      { name: "Gold Chain Necklace", price: "$40.00" },
      { name: "Wool Beanie", price: "$20.00" }
    ]
  };

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const selected = tab.textContent.trim();
      updateProducts(selected);
    });
  });

  function updateProducts(category) {
    const items = productData[category] || [];
    productSection.innerHTML = items
      .map(
        item => `
      <div class="product-card">
        <img src="https://via.placeholder.com/200x200" alt="product" />
        <h3>${item.name}</h3>
        <p>${item.price}</p>
      </div>
    `
      )
      .join("");
  }

  // Load default tab content
  updateProducts("Women");
});
