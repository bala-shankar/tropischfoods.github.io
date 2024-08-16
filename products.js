document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('product-select');
    const productInfo = document.getElementById('product-info');

    const productData = {
        product1: {
            section1: 'Product 1 - Overview',
            section2: 'Product 1 - Features',
            section3: 'Product 1 - Benefits'
        },
        product2: {
            section1: 'Product 2 - Overview',
            section2: 'Product 2 - Features',
            section3: 'Product 2 - Benefits'
        },
        product3: {
            section1: 'Product 3 - Overview',
            section2: 'Product 3 - Features',
            section3: 'Product 3 - Benefits'
        }
    };

    productSelect.addEventListener('change', (event) => {
        const selectedProduct = event.target.value;
        const sections = productInfo.getElementsByClassName('section');
        
        // Hide all sections
        Array.from(sections).forEach(section => section.classList.remove('active'));

        if (selectedProduct) {
            const data = productData[selectedProduct];
            productInfo.innerHTML = `
                <div class="section">${data.section1}</div>
                <div class="section">${data.section2}</div>
                <div class="section">${data.section3}</div>
            `;

            // Show the first section by default
            productInfo.querySelector('.section').classList.add('active');
            productInfo.style.display = 'flex';

            // Set up event listeners to switch between sections if needed
            let currentSectionIndex = 0;
            const sectionsArray = Array.from(productInfo.getElementsByClassName('section'));

            function showSection(index) {
                sectionsArray.forEach((section, i) => {
                    section.classList.toggle('active', i === index);
                });
            }

            // Show the first section by default
            showSection(currentSectionIndex);

            // Handle section switching logic (e.g., buttons or auto-slide) if needed
        } else {
            productInfo.style.display = 'none';
            productInfo.innerHTML = '';
        }
    });
});
