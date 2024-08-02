document.addEventListener('DOMContentLoaded', function() {
    displayTopCategories();
    displayCareerOptions();

    // Handle next category arrow click
    document.getElementById('next').addEventListener('click', function() {
        navigateCareerOptions(1);
    });

    // Handle previous category arrow click
    document.getElementById('prev').addEventListener('click', function() {
        navigateCareerOptions(-1);
    });

    // Handle all categories button click
    document.getElementById('allCategories').addEventListener('click', function() {
        window.location.href = 'viewCategory.html';
    });

    // Handle back button click
    document.getElementById('back').addEventListener('click', function() {
        window.location.href = 'results.html';
    });
});

let currentIndex = 0;
const topCategories = JSON.parse(localStorage.getItem('topCategories')) || [];
const careers = {
    Extraversion: [
        { 
            title: "Extraversion vs. Introversion", 
            definition: " Extraversion delineates an individual's proclivity for actively pursuing social interactions and stimulation, coupled with their degree of enthusiasm and assertiveness in social contexts.",
            description: "Those scoring high on extraversion exhibit traits marked by outgoing, sociable, and talkative tendencies, demonstrating a preference for social engagement. Characterized by elevated energy levels, enthusiasm, and assertiveness, individuals with high extraversion scores are often inclined towards dynamic and lively social situations. This trait may also manifest in a greater likelihood to partake in risk-taking behaviors, including but not limited to activities such as partying and drinking, indicative of a predisposition towards excitement-seeking endeavors", 
            image: "images/5Extraversion.png" 
        }
    ],
    Agreeableness: [
        { 
            title: "Agreeableness vs. Antagonism", 
            definition: " Agreeableness is associated with positive outcomes in interpersonal relationships, job performance, and mental health.", 
            description: "High scorers typically have supportive relationships, excel in teamwork-oriented careers, and experience better mental health. Excessive agreeableness,though, may lead to negative consequences such as over-compliance and a lack of assertiveness. The person is moderately agreeable. They demonstrate trust, fostering forgiving relationships. Their straightforward communication style is non-demanding, promoting clarity. Altruism is evident, reflecting warmth and care. Their compliance and non-stubborn nature contribute to harmonious interactions. Modesty is apparent, and they exhibit tender-mindedness, showing sympathy and emotional sensitivity.", 
          
            image: "images/5Agreeableness.png" 
        }
    ],
    Conscientiousness: [
        { 
            title: "Conscientiousness  vs. Lack of Direction", 
            definition: "Conscientiousness denotes an individual's degree of organization, dependability, and goal-oriented behavior. ",
            description: " Individuals with high conscientiousness scores are known for their reliability, strong work ethic, and efficiency. They demonstrate organizational skills, responsibility, and a motivated approach to achieving their goals. This personality trait is associated with self-discipline and perseverance. Extensive research indicates that conscientiousness correlates with positive outcomes across various domains, such as academic and professional performance, health-related behaviors, and longevity. High conscientious individuals typically exhibit superior academic and job performance, along with lower rates of absenteeism and turnover in the workplace.", 
       
            image: "images/5Concientiousness.png" 
        }
    ],
    Neuroticism: [
        { 
            title: "Neuroticism vs. Emotional Stability",
            definition: "Neuroticism refers to an individual's tendency to experience negative emotions such as anxiety, sadness, and irritability.",
            description: "Individuals scoring low on emotional stability often grapple with heightened susceptibility to negative emotions, including anxiety, depression, and anger. Their emotional responses tend to be more reactive, particularly in the face of stress, making it challenging for them to effectively cope with difficult situations. This heightened emotional reactivity may contribute to a predisposition for maladaptive behaviors, such as substance abuse or self-harm, as these individuals may resort to these strategies as coping mechanisms. The lack of emotional stability can impact various aspects of their lives, including relationships and professional endeavors, as they navigate the complexities of their emotional well-being. Developing effective stress management and coping mechanisms becomes crucial for individuals with lower emotional stability to enhance their overall resilience and well-being.", 
           
            image: "images/5Neuroticism.png" 
        }
    ],
    Openness: [
        { 
            title: "Openness  vs. Closedness to Experience",
            definition: "Openness characterizes an individual's openness to new experiences, intellectual curiosity, and appreciation for art, adventure, and unusual ideas. ", 
            description: "Individuals with high conscientiousness scores are known for their reliability, strong work ethic, and efficiency. They demonstrate organizational skills, responsibility, and a motivated approach to achieving their goals. This personality trait is associated with self-discipline and perseverance. Extensive research indicates that conscientiousness correlates with positive outcomes across various domains, such as academic and professional performance, health-related behaviors, and longevity. High conscientious individuals typically exhibit superior academic and job performance, along with lower rates of absenteeism and turnover in the workplace." ,
       
            image: "images/5Openness.png" 
        }
    ]
};


function displayTopCategories() {
    const topCategoriesContainer = document.getElementById('top-categories');
    const topCategoriesHTML = `<h2>Top Personalities</h2><p>${topCategories.join(", ")}</p>`;
    topCategoriesContainer.innerHTML = topCategoriesHTML;
}

function displayCareerOptions(index = 0) {
    if (topCategories.length === 0) return;
    
    const careerOptionsContainer = document.getElementById('career-options');
    const category = topCategories[index];
    const career = careers[category][0]; // Assuming one career per category for simplicity

    const careerOptionsHTML = `
        <div class="career-options">
            <h3>${career.title}</h3>
            <div class="image-container">
                <img src="${career.image}" alt="${career.title}">
            </div>
            <h5><b>${career.definition}</b></h5>
            <p><b>${career.description}</b></p>
        </div>
    `;
    
    careerOptionsContainer.innerHTML = careerOptionsHTML;
}

function navigateCareerOptions(direction) {
    currentIndex = (currentIndex + direction + topCategories.length) % topCategories.length;
    displayCareerOptions(currentIndex);
}

// Initial display
displayCareerOptions();
