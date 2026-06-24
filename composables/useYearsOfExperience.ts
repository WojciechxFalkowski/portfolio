const CAREER_START_YEAR = 2021;

export const useYearsOfExperience = () => {
  const yearsOfExperience = computed(() =>
    Math.max(1, new Date().getFullYear() - CAREER_START_YEAR)
  );

  const polishExperienceAdjective = computed(() => {
    const years = yearsOfExperience.value;
    return years === 1 ? "rocznym" : `${years}-letnim`;
  });

  return {
    yearsOfExperience,
    polishExperienceAdjective,
  };
};
