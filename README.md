# tiktok-dl
TT Downloader

Welcome to the TikTok Downloader project! Whether you're a seasoned dev or just here to vibe code on weekends — you're in the right place. 
Here's how to get started:

🔒 Permissions & Rules
- Repo is under the MIT License (See GitHub -> Repository -> MIT License)
- Only approved collaborators can push directly to main
- Keep .env keys private — don’t commit them!
- (.env files store environment variables - usually API Keys, tokens, or config values your app needs to work, but that shouldn’t be exposed publicly)

🚫 Never Do This:
"const apiKey = "my-secret-api-key";"
If you push secrets to GitHub:

- They're visible to the public if the repo is public
- Bots can steal and misuse them

  Step 1: Download Git and Node.js
Open Terminal and Copy

winget install --id Git.Git -e

Paste in Terminal -> Type 'Y' to Confirm
Then Copy 

winget install --id OpenJS.NodeJS.LTS -e

Paste in Terminal -> Confirm on prompt

After this, you're ready to clone the repository to your machine to edit it. Copy and paste this in terminal:

git clone https://github.com/tmckee09/tiktok-dl.git
cd tiktok-dl
npm install
npm run dev

(This will work once we add the starter code to the project, right now it is just a README.txt and a couple other files.)
- Need to add package.json inside tiktok-dl repository







  
  
