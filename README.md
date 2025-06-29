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

(After, it should say 'Starting' and then you can go to "http://localhost:3000" in your browser to view what changes you are making to the code in real-time before we push it to Vercel to be shown publicly. Vercel is the host - PM on Discord for access)
- Need to add breadth to the page now
  - An area to Paste a TikTok link
  - Separation of the top half where the downloader is and the bottom half where the information and how it works goes
  - Black Colors // TikTok themed as much as we can
  - SEO wording within the pages to attract lurking Google searchers
  - Pages, Pages, Pages - as many relatable pages about downloading TikTok videos, etc as we can create to drive the search optimization
 
  Apps to Access
 - Github Repository (Need to be added as contributor to see this)
 - Vercel (Website Hosting - Push final code to this FROM GitHub - when you 'commit' on the project it will automatically upload this to the Live site.)
 - Node.js
 - Discord
 - ChatGPT Plus
 - VisualCode for better interface while editing locally







  
  
