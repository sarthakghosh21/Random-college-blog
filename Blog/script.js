document.addEventListener("DOMContentLoaded", function () {
    // Fetch blog posts from JSON
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const blogPosts = document.querySelector('.blog-posts');

            // Iterate through each blog post and create HTML elements to display them
            data.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('blog-post');
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                    <button class="read-more-btn">Read More</button>
                    <button class="share-btn">Share</button>
                `;
                blogPosts.appendChild(postElement);
            });

            // Add event listeners for dynamic buttons
            const readMoreButtons = document.querySelectorAll('.read-more-btn');
            readMoreButtons.forEach(button => {
                button.addEventListener('click', function () {
                    // Handle read more button click
                    console.log('Read more button clicked');
                });
            });

            const shareButtons = document.querySelectorAll('.share-btn');
            shareButtons.forEach(button => {
                button.addEventListener('click', function () {
                    // Handle share button click
                    console.log('Share button clicked');
                });
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
