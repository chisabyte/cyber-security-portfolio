/**
 * Shared utility for skill level styling and validation
 */

/**
 * Get the CSS classes for a skill level badge
 * @param {string} level - Skill level (Beginner, Intermediate, Advanced, Proficient)
 * @returns {string} Tailwind CSS classes
 */
export const getLevelColor = (level) => {
  if (!level) return 'bg-gray-200 text-gray-700';
  
  const normalizedLevel = level.toLowerCase();
  
  switch (normalizedLevel) {
    case 'beginner':
      return 'bg-gray-300 text-gray-800';
    case 'intermediate':
      return 'bg-cyber-blue text-white';
    case 'advanced':
    case 'proficient':
      return 'bg-cyber-green text-white';
    default:
      return 'bg-gray-200 text-gray-700';
  }
};

/**
 * Get human-readable skill level label
 * @param {string} level - Skill level
 * @returns {string} Formatted label
 */
export const getLevelLabel = (level) => {
  if (!level) return 'Not Specified';
  
  const normalizedLevel = level.toLowerCase();
  
  switch (normalizedLevel) {
    case 'beginner':
      return 'Beginner';
    case 'intermediate':
      return 'Intermediate';
    case 'advanced':
      return 'Advanced';
    case 'proficient':
      return 'Proficient';
    default:
      return level;
  }
};

/**
 * Validate skill level
 * @param {string} level - Skill level to validate
 * @returns {boolean} True if valid
 */
export const isValidSkillLevel = (level) => {
  const validLevels = ['beginner', 'intermediate', 'advanced', 'proficient'];
  return validLevels.includes(level?.toLowerCase());
};

