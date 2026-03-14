# unlockit-locksmith

אתר תדמית סטטי ופשוט עבור Unlockit, מנעולן בתל אביב, שנבנה עם React, TypeScript ו-Vite.

## דרישות

- Node.js 18 ומעלה

## הרצה מקומית

```bash
npm install
npm run dev
```

לאחר מכן פותחים את הכתובת שמוצגת בטרמינל, בדרך כלל:

```bash
http://localhost:5173
```

## בניית גרסת ייצור

```bash
npm run build
```

קבצי הבנייה יופיעו בתיקיית `dist`.

## העלאה ל-Render

הפרויקט כולל קובץ `render.yaml` שמגדיר Static Site עבור Render.

1. מעלים את תיקיית הפרויקט ל-GitHub, GitLab או Bitbucket.
2. נכנסים ל-Render ובוחרים `New` ואז `Static Site`.
3. מחברים את הריפו של הפרויקט.
4. אם Render מזהה את `render.yaml`, אפשר לאשר את ההגדרות כפי שהן.

אם מזינים ידנית, השתמשו בערכים הבאים:

- Build Command: `npm run build`
- Publish Directory: `dist`

לאחר יצירת השירות, Render יבנה את האתר וייתן כתובת `onrender.com`.

## העלאה ל-Netlify

הפרויקט כולל קובץ `netlify.toml` עם הגדרות הבנייה הבסיסיות.

1. מעלים את הפרויקט ל-GitHub.
2. נכנסים ל-Netlify ובוחרים `Add new project` ואז `Import an existing project`.
3. מחברים את הריפו.
4. Netlify יכול לזהות את ההגדרות מהקובץ `netlify.toml`.

אם מזינים ידנית, השתמשו בערכים הבאים:

- Build command: `npm run build`
- Publish directory: `dist`
- Root directory: להשאיר ריק
- Environment variables: אין צורך

לאחר מכן לוחצים על Deploy והאתר יקבל כתובת `netlify.app`.

## דומיין מותאם ב-Netlify

אפשר לרכוש דומיין ישירות דרך Netlify או לחבר דומיין קיים דרך `Domain management`.
