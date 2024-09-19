function generatePassword() {
  const minLength = 8;
  const maxLength = 18;
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  const allChars = lowercaseChars + uppercaseChars + numbers + specialChars;

  // Ensure the password contains at least one character from each category
  let password = '';
  password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
  password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += specialChars[Math.floor(Math.random() * specialChars.length)];

  // Fill the rest of the password length with random characters from all categories
  for (let i = password.length; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Shuffle the password to ensure randomness
  return password.split('').sort(() => Math.random() - 0.5).join('');
}

// Example usage
const password = generatePassword();
console.log(password);
