function loadArticle(articleId) {
    // Example content for each article
    const articles = {
        article1: {
            title: "Top Remodeling Tips for 2024",
            content: `
                <img src="images/remodeling-tips.jpg" alt="Remodeling Tips">
                <p>Remodeling can be a great way to breathe new life into your home. In 2024, consider focusing on open floor plans, sustainable materials, and multi-functional spaces. Utilizing energy-efficient windows and upgrading to smart home systems can also provide both aesthetic and practical benefits. Our expert team is here to help you choose the best options for your home.</p>
                <p>From minor changes to major renovations, planning is key. Make sure to set a realistic budget, find a reliable contractor, and invest in high-quality materials for a long-lasting impact.</p>
            `,
            link: "#"
        },
        article2: {
            title: "Modern Kitchen Remodel Ideas",
            content: `
                <img src="images/kitchen-remodel.jpg" alt="Kitchen Remodel">
                <p>The kitchen is the heart of the home, and a modern update can transform the way you cook, entertain, and live. Consider integrating kitchen islands with additional storage, installing energy-efficient appliances, and opting for sleek, minimalist cabinetry. Open shelving can add a touch of modern flair, while natural light enhances the space's overall ambiance.</p>
                <p>If you're planning a kitchen remodel, don't forget to maximize functionality by considering the layout carefully. A well-designed kitchen can be both beautiful and highly practical.</p>
            `,
            link: "#"
        },
        article3: {
            title: "Bathroom Upgrades That Add Value",
            content: `
                <img src="images/bathroom-upgrade.jpg" alt="Bathroom Upgrade">
                <p>Bathrooms are one of the most important areas to upgrade if you want to increase your home's value. Start by replacing old fixtures with modern, water-saving options, and consider adding luxurious touches like heated floors or a rainfall showerhead. Upgrading the lighting to include dimmers can create a spa-like atmosphere.</p>
                <p>Even small changes, like updating tile or adding a fresh coat of paint, can make a significant difference. Focus on clean lines and a cohesive color palette for a timeless look.</p>
            `,
            link: "#"
        }
    };

    // Hide the news grid
    document.getElementById('newsGrid').style.display = 'none';

    // Get the selected article data
    const article = articles[articleId];

    // Display the article content
    const articleDetail = document.getElementById('articleDetail');
    articleDetail.innerHTML = `
        <h2>${article.title}</h2>
        ${article.content}
        <a href="${article.link}">Read more</a>
    `;
    articleDetail.style.display = 'block';
}

function goBack() {
    // Hide the article detail and show the news grid
    document.getElementById('articleDetail').style.display = 'none';
    document.getElementById('newsGrid').style.display = 'grid';
}
