const questions = [
  {
    category: "Extraversion",
    question: "I see myself as someone who enjoys talking",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Agreeableness",
    question: "I see myself as someone who tends to notice mistakes made by others",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Conscientiousness",
    question: "I see myself as someone who is able to comprehensively complete demands of a task",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Neuroticism",
    question: "I see myself as someone who experiences significantly negative emotions",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Openness",
    question: "I see myself as someone who able to come up with new ideas",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Extraversion",
    question: "I see myself as someone who tends to maintain some distance from others",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Agreeableness",
    question: "I see myself as someone who is helping and aiding others more often than not",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Conscientiousness",
    question: "I see myself as someone who has a tendency to miss out on small details",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Neuroticism",
    question: "I see myself as someone who is able to handle stress well",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Openness",
    question: "I see myself as someone who wants to explore many new things",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Conscientiousness",
    question: "I see myself as someone who possesses a lot of energy",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Agreeableness",
    question: "I see myself as someone who prefers to confront others more than not",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Conscientiousness",
    question: "I see myself as someone who is a reliable worker",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Neuroticism",
    question: "I see myself as someone who can be tense",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Openness",
    question: "I see myself as someone who thinks deeply about topics",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Extraversion",
    question: "I see myself as someone who tends to make others more energetic and enthusiastic",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Agreeableness",
    question: "I see myself as someone who remembers other people’s mistakes",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Conscientiousness",
    question: "I see myself as someone who can be disorganised",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Neuroticism",
    question: "I see myself as someone who has a tendency to worry",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Openness",
    question: "I see myself as someone who has an active imagination",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Extraversion",
    question: "I see myself as someone who prefers to be quiet",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Agreeableness",
    question: "I see myself as someone who finds it easy to trust others",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Conscientiousness",
    question: "I see myself as someone who prefers minimal exertion",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Neuroticism",
    question: "I see myself as someone who does not get easily upset",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Openness",
    question: "I see myself as someone who comes up with new ideas and applications",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Extraversion",
    question: "I see myself as someone who finds it easy to assert oneself in front of others",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Agreeableness",
    question: "I see myself as someone who is perceived as distant or aloof",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Conscientiousness",
    question: "I see myself as someone who can continue to work on a task despite many difficulties",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Neuroticism",
    question: "I see myself as someone who is not affected by feelings or emotions",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Openness",
    question: "I see myself as someone who has a preference for visual aesthetics",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Extraversion",
    question: "I see myself as someone who can be shy sometimes",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Agreeableness",
    question: "I see myself as someone who finds it easy to consider everyone’s needs around them",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Conscientiousness",
    question: "I see myself as someone who can do tasks rapidly",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Neuroticism",
    question: "I see myself as someone who remains calm in tense situations more often than not",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Openness",
    question: "I see myself as someone who likes work that is step-by-step over unstructured and free-flowing tasks",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Extraversion",
    question: "I see myself as someone who likes going out and interacting with people",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Agreeableness",
    question: "I see myself as someone who finds it hard to filter their thoughts in front of others",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Conscientiousness",
    question: "I see myself as someone who makes plans and follows through with them",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Neuroticism",
    question: "I see myself as someone who is affected by nerves",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Openness",
    question: "I see myself as someone who likes to think a lot about ideas and play with them",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Openness",
    question: "I see myself as someone who does not enjoy artistic activities",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Agreeableness",
    question: "I see myself as someone who finds it easy to listen to and go along with others",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Conscientiousness",
    question: "I see myself as someone who tends to get distracted by other things",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Openness",
    question: "I see myself as someone who has extensive knowledge of art, music or literature",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  }
];


let currentQuestionIndex = 0;
const selectedOptions = new Array(questions.length).fill(null); // Track selected options

// const categoryPoints = {
//     Realistic: 0,
//     Artistic: 0,
//     Investigative: 0,
//     Social: 0,
//     Enterprising: 0,
//     Conventional: 0,
//     // Add other categories if any...
// };
const categoryPoints = {
  Extraversion: 0,
  Agreeableness: 0,
  Conscientiousness: 0,
  Neuroticism: 0,
  Openness: 0
};


function displayQuestions() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';


    // Check if currentQuestionIndex is 0 to hide "Previous" button
    if (currentQuestionIndex === 0) {
      document.getElementById('prev-btn').style.display = 'none';
  } else {
      document.getElementById('prev-btn').style.display = 'inline-block';
  }


    for (let i = 0; i < 5; i++) {
        if (currentQuestionIndex + i >= questions.length) break;
        const questionData = questions[currentQuestionIndex + i];
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <div>${questionData.question}</div>
            <div class="options">
                ${questionData.options.map((option, index) => {
                    let sizeClass = '';
                    if (index === 0 || index === 4) {
                        sizeClass = 'btn-large';
                    } else if (index === 1 || index === 3) {
                        sizeClass = 'btn-medium';
                    } else if (index === 2) {
                        sizeClass = 'btn-small';
                    }

                    return `
                        <div class="option-button ${sizeClass}" data-question-index="${currentQuestionIndex + i}" data-option-index="${index}">
                            ${option.value !== undefined ? `<span>${option.text}</span>` : ''}
                        </div>`;
                }).join('')}
            </div>
        `;
        container.appendChild(questionElement);

        // Add horizontal line after each question except the last one
        if (i < 6) {
            const separator = document.createElement('hr');
            separator.classList.add('question-separator');
            container.appendChild(separator);
        }
    }
    addEventListeners();
    highlightSelectedOptions();


}





function highlightSelectedOptions() {
    selectedOptions.forEach((selectedOptionIndex, questionIndex) => {
        if (selectedOptionIndex !== null) {
            const optionButton = document.querySelector(`.option-button[data-question-index="${questionIndex}"][data-option-index="${selectedOptionIndex}"]`);
            if (optionButton) {
                optionButton.classList.add('selected');
            }
        }
    });
}

function addEventListeners() {
    document.querySelectorAll('.option-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const questionIndex = button.getAttribute('data-question-index');
            const optionIndex = button.getAttribute('data-option-index');

            // Deselect previous option and select new one
            document.querySelectorAll(`.option-button[data-question-index="${questionIndex}"]`).forEach(b => b.classList.remove('selected'));
            button.classList.add('selected');

            selectedOptions[questionIndex] = optionIndex;

            // Scroll to the next question or to the "Next" button
            const nextQuestionIndex = parseInt(questionIndex) + 1;
            if (nextQuestionIndex < currentQuestionIndex + 5) {
                const nextQuestion = document.querySelector(`.question:nth-child(${(nextQuestionIndex % 5) * 2 + 1})`);
                if (nextQuestion) {
                    nextQuestion.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                document.getElementById('next-btn').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}


document.getElementById('next-btn').addEventListener('click', () => {
  document.querySelectorAll('.option-button.selected').forEach(selectedOption => {
      const questionIndex = selectedOption.getAttribute('data-question-index');
      const optionIndex = selectedOption.getAttribute('data-option-index');
      const questionData = questions[questionIndex];
      // Convert option value to integer before adding to categoryPoints
      categoryPoints[questionData.category] += parseInt(questionData.options[optionIndex].value);
  });

  currentQuestionIndex += 5;
  if (currentQuestionIndex < questions.length) {
      displayQuestions();
      // Scroll to the top of the questions container
      document.getElementById('questions-container').scrollTo(0, 0);
  } else {
       // Save results (for fetch score to dashboard results)
       const username = localStorage.getItem('username');
       const topCategories = calculateTopCategories();
       const topPersonality1 = topCategories[0];
       const topPersonality2 = topCategories[1];
       saveResult(username, topPersonality1, topPersonality2);

      localStorage.setItem('categoryPoints', JSON.stringify(categoryPoints));
      window.location.href = 'results.html';
  }
});


document.getElementById('prev-btn').addEventListener('click', () => {
    currentQuestionIndex -= 5;
    if (currentQuestionIndex < 0) currentQuestionIndex = 0;
    displayQuestions();
    // Scroll to the top of the questions container
    document.getElementById('questions-container').scrollTo(0, 0);
});

function calculateTopCategories() {
  const sortedCategories = Object.keys(categoryPoints).sort((a, b) => categoryPoints[b] - categoryPoints[a]);
  return [sortedCategories[0], sortedCategories[1]]; // Return top two categories
}



//code portion written in index.js
function saveResult(username, topPersonality1, topPersonality2) {
  fetch('/save-result', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, topPersonality1, topPersonality2 })
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Failed to save result.');
      }
      return response.json();
  })
  .then(data => {
      console.log('Result saved successfully:', data);
      // Optionally handle success message or redirect here
  })
  .catch(error => {
      console.error('Error saving result:', error);
      // Optionally handle error message here
  });
}


document.addEventListener('DOMContentLoaded', () => {
  displayQuestions();
});
