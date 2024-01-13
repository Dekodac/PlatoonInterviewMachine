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

  
  
  const getQuestion = () => {
    const questions = interviewQuestions.behavioral_interview_questions;
    const randomIndex = Math.floor(Math.random() * questions.length);
    alert(questions[randomIndex].question);
  };


document.getElementById('questionButton').onclick = function() {
    getQuestion();  
  };
  

  