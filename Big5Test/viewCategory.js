document.addEventListener("DOMContentLoaded", function() {
    // Retrieve top categories from localStorage
    const topCategories = JSON.parse(localStorage.getItem('topCategories')) || [];
    const username = localStorage.getItem('username');
    
    // Define all available categories and their details
    const allCategories = {
        Extraversion: {
            title: " Extraversion vs. Introversion", 
        definition: " Extraversion delineates an individual's proclivity for actively pursuing social interactions and stimulation, coupled with their degree of enthusiasm and assertiveness in social contexts.",
        description: "ndividuals with low extraversion scores tend to exhibit introverted and reserved tendencies. They typically prefer solitude or small group settings over large social gatherings, often feeling discomfort in expansive social environments. Additionally, those scoring low on extraversion are generally less assertive and approach interactions with a more cautious demeanor.", 
        image: "images/5Extraversion.png" 
        },
        Agreeableness: {
            title: " Agreeableness vs. Antagonism", 
            definition: " Agreeableness is associated with positive outcomes in interpersonal relationships, job performance, and mental health.", 
            description: "Individuals with low scores in agreeableness often display a more competitive and skeptical nature. They are inclined towards prioritizing personal interests over maintaining social harmony, leading them to be less motivated to seek consensus. In interpersonal interactions, they are more likely to express their opinions forcefully, even in the face of conflicting viewpoints. This assertiveness can sometimes be perceived as confrontational, as they may prioritize their individual perspectives over maintaining smooth social relationships. This trait may also make them less prone to conforming to societal expectations or readily accepting others' ideas without scrutiny.", 
          
            image: "images/5Agreeableness.png" 
        },
        Conscientiousness: {
            title: "  Conscientiousness  vs. Lack of Direction", 
            definition: "Conscientiousness denotes an individual's degree of organization, dependability, and goal-oriented behavior. ",
            description: "Individuals with low conscientiousness scores often exhibit a more impulsive and disorganized demeanor. They struggle with setting and achieving goals, encountering difficulties in maintaining a structured and organized approach to tasks. Their impulsivity may lead them to engage in behaviors that are not conducive to their long-term well-being, as they may act without thorough consideration of the consequences. This lack of conscientiousness can manifest in challenges with time management, planning, and follow-through on commitments. Consequently, these individuals may face difficulties in both personal and professional spheres, where a high level of conscientiousness is often associated with success and reliability.", 
       
            image: "images/5Concientiousness.png" 
        },
        Neuroticism: {
            title: " Neuroticism vs. Emotional Stability",
            definition: "Neuroticism refers to an individual's tendency to experience negative emotions such as anxiety, sadness, and irritability.",
            description: "The person demonstrates low neuroticism and high emotional stability. They maintain a calm and composed demeanor, showing minimal tendencies toward anxiety, anger, or depression. With low self-consciousness and impulsiveness, they exhibit a confident and stable temperament, contributing to a resilient and emotionally balanced profile .", 
           
            image: "images/5Neuroticism.png" 
        },
        Openness: {
            title: " Openness  vs. Closedness to Experience",
            definition: "Openness characterizes an individual's openness to new experiences, intellectual curiosity, and appreciation for art, adventure, and unusual ideas. ", 
            description: "People with high levels of openness tend to be imaginative, creative, and open-minded. They are often curious about the world around them and are eager to explore novel ideas and unconventional paths. This trait can be seen in real-world behaviors such as seeking out new experiences, embracing diversity and cultural differences, and showing a keen interest in artistic and intellectual pursuits. Individuals with high openness might pursue careers that allow for creativity and innovation, engage in lifelong learning, and often enjoy hobbies that involve exploring new concepts and perspectives.", 
       
            image: "images/5Openness.png" 
        
        }
        
    };

    // Filter out top categories from all categories
    const remainingCategories = Object.keys(allCategories).filter(category => !topCategories.includes(category));

    // Generate HTML for remaining categories
    let remainingCategoriesHTML = '';
    remainingCategories.forEach(category => {
        const details = allCategories[category];
        remainingCategoriesHTML += `
            <div class="result-page">
                <div class="results-content">
                    <h1>${details.title}</h1>
                    <img src="${details.image}" alt="${details.title}">
                    <h5><b>${details.definition}</b></h5>
                    <p><b>${details.description}</b></p>
                </div>
            </div>
        `;
    });

    // Insert remaining categories into the results container
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = remainingCategoriesHTML;

    // Show the results container
    resultsContainer.style.display = 'block';

    // Initialize the result pages navigation
    let currentPage = 0;
    const pages = document.querySelectorAll('.result-page');
    const prevButton = document.querySelector('.prev-result-button');
    const nextButton = document.querySelector('.next-result-button');
    const backButton = document.querySelector('.back-result-button');
    const backToDashboardButton = document.getElementById('back-to-dashboard-button');

    const colors = ['#c3bade']; // Add more colors as needed

    function showPage(index) {
        pages.forEach((page, i) => {
            page.style.display = (i === index) ? 'block' : 'none';
        });
        prevButton.style.display = (index === 0) ? 'none' : 'block';
        nextButton.style.display = (index === pages.length - 1) ? 'none' : 'block';
        backButton.style.display = (index === 0) ? 'block' : 'none'; // Show back button only on first page

        document.body.style.backgroundColor = colors[index % colors.length];
    }

    prevButton.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });

    backButton.addEventListener('click', function() {
        window.location.href = 'topCategories.html';
    });

    backToDashboardButton.addEventListener('click', function() {
        window.location.href = `/dashboard?username=${username}`;
    });


    showPage(currentPage); // Show initial page

});
