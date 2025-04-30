
import { Question } from './eligibilityQuestions';
import { ProgramRecommendation } from './eligibilityPrograms';

// Get current question based on steps and previous answers
export const getCurrentQuestion = (
  questions: Question[], 
  answers: Record<string, string | string[]>, 
  currentStep: number
): Question | undefined => {
  const filteredQuestions = questions.filter(question => {
    // Handle questions with dependencies
    if (question.dependsOn) {
      const { questionId, answerId } = question.dependsOn;
      return answers[questionId] === answerId;
    }
    // Handle first question (no dependencies)
    return !question.dependsOn;
  });

  return filteredQuestions[currentStep];
};

// Get recommended program based on answers
export const getRecommendedProgram = (
  programRecommendations: ProgramRecommendation[],
  answers: Record<string, string | string[]>
): ProgramRecommendation | undefined => {
  for (const program of programRecommendations) {
    let isMatch = true;

    for (const [criteriaKey, allowedValues] of Object.entries(program.criteria)) {
      if (answers[criteriaKey] !== undefined) {
        if (Array.isArray(allowedValues)) {
          const currentAnswer = answers[criteriaKey];
          // Check if the answer is an array or single string and handle accordingly
          if (Array.isArray(currentAnswer)) {
            // For multi-select answers
            const matchFound = currentAnswer.some(ans => 
              allowedValues.includes(ans)
            );
            if (!matchFound) {
              isMatch = false;
              break;
            }
          } else {
            // For single-value answers
            if (!allowedValues.includes(currentAnswer as string)) {
              isMatch = false;
              break;
            }
          }
        } else {
          // This is for boolean criteria
          const booleanValue = typeof allowedValues === 'boolean' ? allowedValues : false;
          let answerAsBool = false;
          
          const currentAnswer = answers[criteriaKey];
          if (typeof currentAnswer === 'string') {
            answerAsBool = currentAnswer === 'true';
          } else {
            // If it's an array, we can't compare with boolean
            isMatch = false;
            break;
          }
          
          if (booleanValue !== answerAsBool) {
            isMatch = false;
            break;
          }
        }
      }
    }

    if (isMatch) {
      return program;
    }
  }

  // Default to community membership if no specific match
  return programRecommendations.find(p => p.id === "community-membership");
};
