// import { execSync } from 'child_process';

// function gitAutoCommit(date, message) {
//   try {
//     execSync(`git -c user.name="Your Name" -c user.email="your.email@example.com" add .`);
    
//     const formattedDate = new Date(date).toISOString();
//     execSync(`GIT_AUTHOR_DATE="${formattedDate}" GIT_COMMITTER_DATE="${formattedDate}" git commit --date="${formattedDate}" -m "${message}"`);

//     execSync(`git push origin main`);
    
//     console.log(`Changes committed on ${formattedDate} with message: "${message}" and pushed successfully.`);
//   } catch (error) {
//     console.error('Error occurred:', error);
//     console.error('Stdout:', error.stdout ? error.stdout.toString() : '');
//     console.error('Stderr:', error.stderr ? error.stderr.toString() : '');
//   }
// }

// function getCurrentTime() {
//   const now = new Date();
//   const hours = now.getHours().toString().padStart(2, '0');
//   const minutes = now.getMinutes().toString().padStart(2, '0');
//   const seconds = now.getSeconds().toString().padStart(2, '0');
//   return `${hours}:${minutes}:${seconds}`;
// }

// const currentTime = getCurrentTime();
// const commitDate = `2024-11-11T14:30:45Z`;
// const commitMessage = 'Demo commit';
// gitAutoCommit(commitDate, commitMessage)


import { execSync } from 'child_process';

function gitAutoCommit(date, message) {
  try {
    // Stage all changes
    execSync(`git -c user.name="Your Name" -c user.email="your.email@example.com" add .`);
    
    // Format the date in ISO format
    const formattedDate = new Date(date).toISOString();
    
    // Commit with the custom date
    execSync(`GIT_AUTHOR_DATE="${formattedDate}" GIT_COMMITTER_DATE="${formattedDate}" git commit --date="${formattedDate}" -m "${message}"`);

    // Push changes
    execSync(`git push origin main`);
    
    console.log(`Changes committed on ${formattedDate} with message: "${message}" and pushed successfully.`);
  } catch (error) {
    console.error('Error occurred:', error);
    console.error('Stdout:', error.stdout ? error.stdout.toString() : '');
    console.error('Stderr:', error.stderr ? error.stderr.toString() : '');
  }
}

// Get today's date in the ISO format
const today = new Date();
const hardcodedDate = '2024-09-15T14:30:09Z'; // Fixed time of day
console.log(hardcodedDate)
const commitMessage = 'Demo commit';

// Call the function with today's date hardcoded
gitAutoCommit(hardcodedDate, commitMessage);
// 15 22 29