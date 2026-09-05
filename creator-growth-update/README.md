# Creator Growth — site update

Everything needed to update **github.com/Bamechi/creatorgrowth**.
All code is typechecked (`tsc --noEmit`, zero errors) and both pages render without error.

---

## 1. What is in this folder

```
creator-growth-update/
├── README.md                      <- you are here
├── app/                           <- COPY THIS INTO THE REPO
│   ├── page.tsx                   Home — the Creator Growth Challenge funnel
│   ├── program/page.tsx           /program — the Creator Growth Program
│   ├── layout.tsx                 Page metadata
│   ├── globals.css                Full stylesheet
│   ├── config.ts                  Endpoints, Stripe links, prices  (LIVE VALUES SET)
│   ├── ApplyForm.tsx              Program application + discovery payment modal
│   └── components/
│       ├── ChallengeSignup.tsx    Signup form -> sheet -> Stripe checkout
│       ├── ChallengeModal.tsx     Popup (auto-opens once per session)
│       ├── PackageBuilder.tsx     A la carte $19K builder
│       ├── SiteChrome.tsx         Shared header + footer
│       ├── ChapterNav.tsx         Fixed chapter index
│       ├── Counter.tsx            Count-up stats
│       ├── Cursor.tsx             Custom cursor
│       └── OpenChallenge.tsx      Button that opens the popup
└── apps-script/                   REFERENCE ONLY — not part of the repo
    ├── challenge-intake.gs        Already deployed and live
    └── program-applicants.gs      Paste + redeploy if not already done
```

Files replaced: `page.tsx`, `layout.tsx`, `globals.css`, `ApplyForm.tsx`.
Files added: `config.ts`, `program/page.tsx`, and all eight components.
Nothing else in the repo is touched.

---

## 2. Publish to GitHub

```bash
cd ~/Desktop/creatorgrowth
git pull origin main
cp -R ~/Downloads/creator-growth-update/app/. app/
git add app/
git commit -m "Creator Growth v5.3: Challenge funnel, Program page, a la carte builder, discovery credit"
git push origin main
```

Vercel builds automatically on push. Confirm the deployment turns green.

---

## 3. Apps Script

**Challenge intake — DONE.** Deployed, live, and already wired into `config.ts`.

**Program applicants — check this one.** If you have not yet pasted the version with
the `Package` column: open the "Creator Growth Applicants" project, paste
`apps-script/program-applicants.gs` over `Code.gs`, run `setupHeaders` once, then
Deploy > Manage deployments > pencil > Version: **New version** > Deploy.
The `/exec` URL stays the same, so no site change is needed.

---

## 4. Live connections already wired

| What | Where it goes |
|---|---|
| Challenge signup | Creator Growth Intake Form sheet -> Stripe $99 / $55 |
| Program application | Creator Growth Applicants sheet -> discovery modal |
| Filmed discovery $333 | Stripe -> Cal.com booking |
| Private discovery $555 | Stripe -> Cal.com booking |

---

## 5. Test after deploying (10 minutes)

1. Home page: wait 7 seconds, popup opens. Fill every field + pick an interest — the button stays disabled until complete.
2. Submit -> check the **Creator Growth Intake Form** sheet for the row -> confirm Stripe checkout opens.
3. Go to `/program`. Open the builder, select items, watch the total climb to $19,000.
4. Click "Apply with this package" -> the application form shows your package in a gold chip.
5. Submit -> check the **Creator Growth Applicants** sheet -> the discovery modal opens -> Stripe -> Cal.com.

---

## 6. Still open

- Real prices for **Private Consultation** ($2,500 placeholder) and **Virtual Appearance** ($1,500 placeholder) in `components/PackageBuilder.tsx`.
- Feature on High Level Conversations is on the page but locked as "Pending" until approval.
