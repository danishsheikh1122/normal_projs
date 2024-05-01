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

const commitDate = '2024-05-01T12:00:00Z';
const commitMessage = 'Demo commit';

gitAutoCommit(commitDate, commitMessage);
