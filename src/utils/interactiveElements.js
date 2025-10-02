/**
 * Interactive Elements Utilities
 * Examples of how to add interactive functionality to your SPA pages
 */

/**
 * Initialize character cards with hover effects and click handlers
 */
export const initializeCharacterCards = () => {
    const characterCards = document.querySelectorAll('.Characters-item');
    
    characterCards.forEach(card => {
        // Add hover effect
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.2s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
        
        // Add click analytics or other functionality
        card.addEventListener('click', (e) => {
            console.log('Character card clicked:', e.target.closest('a').href);
            // Add analytics, tracking, or other interactive features here
        });
    });
};

/**
 * Initialize search functionality
 */
export const initializeSearchFunctionality = () => {
    // Create search input if it doesn't exist
    const searchContainer = document.querySelector('.Characters');
    if (searchContainer && !document.querySelector('.search-input')) {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.className = 'search-input';
        searchInput.placeholder = 'Search characters...';
        searchInput.style.cssText = `
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
        `;
        
        searchContainer.parentNode.insertBefore(searchInput, searchContainer);
        
        // Add search functionality
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.Characters-item');
            
            cards.forEach(card => {
                const characterName = card.querySelector('h2').textContent.toLowerCase();
                if (characterName.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
};

/**
 * Initialize modal functionality for character details
 */
export const initializeModalFunctionality = () => {
    // This would be called when you want to add modal functionality
    // Example implementation for future use
    console.log('Modal functionality initialized');
};

/**
 * Initialize lazy loading for images
 */
export const initializeLazyLoading = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
};

