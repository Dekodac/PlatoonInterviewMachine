const interviewQuestions = {
    "behavioral_interview_questions": [
        {
            "question": "Tell me about a time when you had to deal with a difficult team member. How did you handle the situation?",
            "category": "Teamwork"
          },
          {
            "question": "Describe a situation where you had to meet a tight deadline. How did you prioritize tasks and ensure timely completion?",
            "category": "Time Management"
          },
          {
            "question": "Share an example of a challenging project you worked on. What obstacles did you face, and how did you overcome them?",
            "category": "Problem Solving"
          },
          {
            "question": "Discuss a time when you had to adapt to a significant change at work. How did you handle the transition?",
            "category": "Adaptability"
          },
          {
            "question": "Tell me about a successful collaboration with a colleague. How did you contribute to the team's success?",
            "category": "Collaboration"
          },
          {
            "question": "Describe a situation where you had to take the lead on a project. What was the outcome, and what did you learn from the experience?",
            "category": "Leadership"
          },
          {
            "question": "Share an example of when you had to resolve a conflict within your team. How did you approach the resolution?",
            "category": "Conflict Resolution"
          },
          {
            "question": "Discuss a time when you had to prioritize multiple tasks with competing deadlines. How did you manage your time effectively?",
            "category": "Time Management"
          },
          {
            "question": "Tell me about a situation where you identified an opportunity for process improvement. How did you implement the changes?",
            "category": "Continuous Improvement"
          },
          {
            "question": "Describe a time when you had to deliver difficult feedback to a colleague. How did you handle the conversation?",
            "category": "Communication"
          },
          {
            "question": "Share an example of when you had to deal with a dissatisfied customer. How did you address their concerns and ensure customer satisfaction?",
            "category": "Customer Service"
          },
          {
            "question": "Discuss a project where you had to work under tight budget constraints. How did you manage resources to achieve the desired outcome?",
            "category": "Budget Management"
          },
          {
            "question": "Tell me about a time when you demonstrated creativity in solving a work-related problem.",
            "category": "Creativity"
          },
          {
            "question": "Describe a situation where you had to learn a new skill or technology quickly. How did you approach the learning process?",
            "category": "Learning Agility"
          },
          {
            "question": "Share an example of when you had to lead a team through a period of change. How did you ensure a smooth transition?",
            "category": "Change Management"
          },
          {
            "question": "Discuss a time when you had to handle a high-pressure situation at work. How did you stay calm and focused?",
            "category": "Stress Management"
          },
          {
            "question": "Tell me about a project where you had to work with limited resources. How did you maximize efficiency and results?",
            "category": "Resourcefulness"
          },
          {
            "question": "Describe a situation where you had to meet a challenging goal. How did you set targets and achieve success?",
            "category": "Goal Setting"
          },
          {
            "question": "Share an example of when you had to persuade a team to adopt a new idea or strategy. How did you approach the persuasion?",
            "category": "Influence"
          },
          {
            "question": "Discuss a time when you had to handle competing priorities. How did you balance and manage your workload?",
            "category": "Prioritization"
          }
    ]
  };

  const moreQuestions = {
    "Programming Basics": [
      "What is the difference between a variable and a constant?",
      "Explain the difference between '==' and '===' in JavaScript.",
      "Describe the concept of a pointer in C++."
    ],
    "Algorithms and Data Structures": [
      "Implement a binary search algorithm.",
      "Explain the difference between a stack and a queue.",
      "Discuss the time complexity of quicksort and mergesort."
    ],
    "Object-Oriented Programming (OOP)": [
      "What is encapsulation in OOP?",
      "Explain the concept of inheritance and provide an example.",
      "Describe the difference between abstract classes and interfaces."
    ],
    "Web Development": [
      "What is the Document Object Model (DOM)?",
      "Explain the difference between HTTP and HTTPS.",
      "Discuss the purpose of AJAX in web development."
    ],
    "Database and SQL": [
      "What is normalization in the context of databases?",
      "Write a SQL query to retrieve data from two related tables.",
      "Explain the differences between SQL and NoSQL databases."
    ],
    "Problem Solving": [
      "Solve the FizzBuzz problem.",
      "Implement an algorithm to check if a string is a palindrome.",
      "Write a function to find the factorial of a number."
    ],
    "Software Design": [
      "Explain the SOLID principles in software design.",
      "Discuss the benefits of using design patterns.",
      "Describe the MVC (Model-View-Controller) architecture."
    ],
    "Version Control": [
      "What is the purpose of version control, and why is it important?",
      "Explain the difference between Git and SVN.",
      "How does branching work in Git?"
    ],
    "Testing": [
      "What is unit testing, and why is it valuable in software development?",
      "Describe the difference between white-box and black-box testing.",
      "How do you handle exceptions in your code?"
    ],
    "Software Development Process": [
      "Explain the Agile development methodology.",
      "Discuss the importance of code reviews.",
      "How do you handle changes in requirements during a project?"
    ]
  }
  
//_____________________________________________________________________________________________________

              //WARNING LOTS OF LEARNING .. LOTS OF COMMENTS AND OHHHS. LOL


let voices = [];
let voiceSelect = document.querySelector("select");

// A function to populate the voices in the select dropdown, because even voices need options
const populateVoices = () => {
  voices = window.speechSynthesis.getVoices();

  // Populate voice options in the select element
  voices.forEach((voice, index) => {
    voiceSelect.options[index] = new Option(voice.name, index);
  });
};

// A function to ask a random question and make you ponder the mysteries of life
const getQuestion = () => {
  // create questions variable to hold all my questions by accessing the object with dot notation and using the questions key
  // const questions = interviewQuestions.behavioral_interview_questions;

  // THIS IS FOR TECH QUESTIONS --> HARDCODED, WILL NEED TO MAKE CATEGORY OR SOME SORT OF SELECTOR. 
  // TODO: `
  const randomNum = Math.floor(Math.random() * moreQuestions["Version Control"].length);
  const questions = moreQuestions["Version Control"][randomNum];

  /* create randomIndex variable to give me a random number between Math.random() generates a floating-point number between 0
   (inclusive) and 1 (exclusive). When you multiply it by questions.length, you get a floating-point number in the range 
   [0, questions.length). The Math.floor() function then rounds this number down to the nearest integer, resulting in an
   integer in the range [0, questions.length - 1].*/
   console.log(questions)
  const randomIndex = Math.floor(Math.random() * questions.length);

  /* create aQuestion varaiable to grav the random question out of the object,  */
  // const aQuestion = questions[randomIndex]["question"];

  const aQuestion = questions;
  console.log("line 174 and 175 here:")
  console.log(aQuestion)

  /* The line of code let utterance = new SpeechSynthesisUtterance(aQuestion); is creating a new instance of the
   SpeechSynthesisUtterance class in JavaScript. This instance is named utterance, and it is used to represent a speech
    request that can be sent to the browser's text-to-speech engine. */
  let utterance = new SpeechSynthesisUtterance(aQuestion);


/*setting the voice property of the SpeechSynthesisUtterance instance (utterance) to a specific voice from the array of
 available voices (voices) */
  utterance.voice = voices[0]; // You may need to handle cases where voices are as elusive as good interview answers

  window.speechSynthesis.speak(utterance);

  // alert(questions[randomIndex].question);
  alert(String(aQuestion));

};
/// KINDA LOST IN THE SAUCE AT 2AM 


document.getElementById('questionButton').onclick = function () {
  getQuestion();
};

// Check for available voices immediately after the page loads
window.onload = () => {
  populateVoices();
};

// setting an event handler function (populateVoices) to be executed 
// when the onvoiceschanged event occurs within the speechSynthesis object in the global window
window.speechSynthesis.onvoiceschanged = populateVoices;