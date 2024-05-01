import { execSync } from 'child_process'; // This won't work directly as of Node.js 16.x

function gitAutoCommit(date, message) {
  try {
    execSync(`git add .`);
    
    const formattedDate = new Date(date).toISOString();
    execSync(`GIT_COMMITTER_DATE="${formattedDate}" git commit --date="${formattedDate}" -m "${message}"`);

    execSync(`git push origin main`);
    
    console.log(`Changes committed on ${formattedDate} with message: "${message}" and pushed successfully.`);
  } catch (error) {
    console.error('Error occurred:', error);
  }
}
function getCurrentTime() {
  const now = new Date();
  
  // Get hours, minutes, and seconds from the Date object
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  // Construct the time string in HH:mm:ss format
  const currentTime = `${hours}:${minutes}:${seconds}`;
  
  return currentTime;
}

// Example usage
const currentTime = getCurrentTime();
console.log(currentTime); // Outputs something like "15:30:45"



const commitDate = `2024-05-01T${currentTime}Z`;
const commitMessage = 'Demo commit';

gitAutoCommit(commitDate, commitMessage);
