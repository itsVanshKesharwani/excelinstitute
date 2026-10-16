# Deployment guide (Vercel + Render + MongoDB Atlas)

## 1. Keep secrets out of Git
- Do not commit `backend/.env` or `node_modules`.
- In GitHub, upload the `coaching/` and `backend/` folders plus this guide.

## 2. Deploy the API on Render
- Create a new **Web Service** from the GitHub repository.
- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`
- Add environment variables in Render (do not include quotes):
  - `MONGO_URI` = your MongoDB Atlas connection string
  - `JWT_SECRET` = a long random secret
  - `ADMIN_USER` = the admin username used by your seed script
  - `ADMIN_PASS` = a strong admin password used by your seed script
  - `CORS_ORIGINS` = your exact Vercel URL, e.g. `https://your-project.vercel.app` (comma-separated if multiple domains)
- Deploy and test `https://YOUR-RENDER-SERVICE.onrender.com/api/health`; it should return `{"ok":true}`.

## 3. Create the admin account
- After the Render service has its environment variables and MongoDB is reachable, run the backend seed script once from a trusted local terminal configured with the same `MONGO_URI`, `ADMIN_USER`, and `ADMIN_PASS`: `npm run seed` from the `backend` directory.
- Do not publish credentials or commit a `.env` file.

## 4. Deploy the frontend on Vercel
- Import the GitHub repository into Vercel.
- Root Directory: `coaching`
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Add Environment Variable:
  - `VITE_API_URL` = `https://YOUR-RENDER-SERVICE.onrender.com/api`
- Deploy. If you change environment variables later, redeploy the frontend.

## 5. Finish CORS setup
- Copy the actual Vercel production domain into Render's `CORS_ORIGINS` value exactly (no trailing slash).
- Save the Render variable and redeploy/restart the backend.
- Test home page, registration/login, admission submission, and admin login/dashboard.

## Notes
- Vercel hosts the React/Vite frontend. This Express backend is deployed as a separate Render Web Service; the MongoDB database is hosted separately (e.g. MongoDB Atlas).
- Vercel's `VITE_API_URL` is public browser configuration, not a place for secrets. Never put `MONGO_URI`, `JWT_SECRET`, or admin passwords in frontend environment variables.
