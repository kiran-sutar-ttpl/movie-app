export const regexPatterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  passCode: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  text: /^[A-Za-z\s]+$/,
  number: /^\d{4}$/
};
