# Show customer feedback on the website (one-time setup, about 10 minutes)

1. Go to sheets.google.com and create a new blank sheet. Name it "Sai Xerox Feedback".
2. Rename the tab at the bottom from "Sheet1" to `Feedback`.
3. In row 1 type these headings, one per column (A to F):
   Time | Name | Rating | About | Message | Approved
4. Click Extensions > Apps Script. Delete the sample code, paste everything from `feedback-script.gs`, and click Save.
5. Click Deploy > New deployment. Click the gear icon and choose "Web app".
   - Execute as: Me
   - Who has access: Anyone
   Click Deploy and allow the permissions when Google asks.
6. Copy the "Web app URL" (it ends with /exec).
7. Open `index.html`, find `var SHEET_URL="";` and paste the URL between the quotes. Upload the file to GitHub.

## How it works afterwards
- A customer sends feedback on the website. A new row appears in your sheet with Approved = No.
- Read it. If you want it on the website, change Approved to Yes. It shows within a minute.
- Feedback you leave as No never appears on the site, so rude or spam messages stay hidden.
