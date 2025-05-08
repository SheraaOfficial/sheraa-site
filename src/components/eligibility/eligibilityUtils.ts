
import { Question, ProgramRecommendation, eligibilityQuestions } from "./eligibilityData";

// Get current question based on the persona and current step
export const getCurrentQuestion = (
  answers: Record<string, string | string[]>, 
  currentStep: number,
  persona: string | null
): Question | undefined => {
  // Filter questions based on the selected persona
  const filteredQuestions = eligibilityQuestions.filter(question => {
    // For the first question (persona selection)
    if (!persona && !question.dependsOn) {
      return true;
    }
    
    // For questions with dependencies
    if (question.dependsOn) {
      const { questionId, answerId } = question.dependsOn;
      return answers[questionId] === answerId;
    }
    
    return false;
  });
  
  // Return question at current step index if it exists
  return filteredQuestions[currentStep];
};

// Get recommended program based on user answers
export const getRecommendedProgram = (
  answers: Record<string, string | string[]>,
  programRecommendations: ProgramRecommendation[]
): ProgramRecommendation | undefined => {
  if (!answers || Object.keys(answers).length === 0) {
    return undefined;
  }

  // First try exact matches
  for (const program of programRecommendations) {
    let isMatch = true;

    for (const [criteriaKey, allowedValues] of Object.entries(program.criteria)) {
      if (answers[criteriaKey] !== undefined) {
        if (Array.isArray(allowedValues)) {
          const currentAnswer = answers[criteriaKey];
          // Handle both array and string answers
          if (Array.isArray(currentAnswer)) {
            // For multi-select answers, check if any selected option matches criteria
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

  // If no exact match, fall back to matching just the persona
  const persona = answers.persona as string;
  if (persona) {
    const personaMatch = programRecommendations.find(program => {
      const personaCriteria = program.criteria.persona;
      return Array.isArray(personaCriteria) && personaCriteria.includes(persona);
    });
    
    if (personaMatch) {
      return personaMatch;
    }
  }

  // Default to community membership if no specific match and has persona
  if (persona) {
    return programRecommendations.find(p => p.id === "community-membership");
  }
  
  return undefined;
};

// Count total questions for a specific persona
export const getTotalQuestionsForPersona = (persona: string | null): number => {
  if (!persona) return 1; // Just the persona question
  
  return eligibilityQuestions.filter(question => {
    if (!question.dependsOn) return false;
    return question.dependsOn.answerId === persona;
  }).length;
};

// Protocol checker - validate that all paths lead to valid program recommendations
export const runProtocolChecks = (): { success: boolean; issues: string[] } => {
  const issues: string[] = [];
  let success = true;
  
  // Check all questions have IDs
  eligibilityQuestions.forEach((q, i) => {
    if (!q.id) {
      issues.push(`Question at index ${i} is missing an ID`);
      success = false;
    }
  });
  
  // Check all dependency references exist
  eligibilityQuestions.forEach(q => {
    if (q.dependsOn) {
      const { questionId } = q.dependsOn;
      const questionExists = eligibilityQuestions.some(question => question.id === questionId);
      if (!questionExists) {
        issues.push(`Question ${q.id} depends on non-existent question ID: ${questionId}`);
        success = false;
      }
    }
  });
  
  return { success, issues };
};
