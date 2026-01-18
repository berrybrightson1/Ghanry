# Master Dev Account - Manual Setup Instructions

## Quick Setup (2 minutes)

Since the automated script requires Firebase Admin credentials, here's the **fastest manual method**:

### Option 1: Firebase Console (Recommended)
1. Go to: https://console.firebase.google.com/project/ghanry-app/firestore
2. Click on `users` collection
3. Click "Add Document"
4. Set Document ID: `GH-0020-C`
5. Add these fields:

```
passportId: "GH-0020-C" (string)
nickname: "Berry (DEV)" (string)  
region: "Greater Accra" (string)
pin: "0020" (string)
xp: 100000 (number)
rank: "Legend" (string)
touristVisaUsed: false (boolean)
joinedAt: [Click "timestamp" and select current time]
verified: true (boolean) ✅
badges: ["Citizen", "Developer", "Legend", "Master"] (array of strings)
avatar: "icon:Crown" (string)
```

6. Click "Save"

### Option 2: Use the App's Sign Up (Then Manually Edit)
1. Sign up normally through the app
2. Note your Passport ID
3. Go to Firebase Console → Firestore → users → [your ID]
4. Edit these fields:
   - `passportId`: Change to `GH-0020-C`
   - `pin`: Change to `0020`
   - `xp`: Change to `100000`
   - `verified`: Add field, set to `true`

---

## Login Credentials
- **Passport ID**: `GH-0020-C`
- **PIN**: `0020`

You'll have:
- ✅ 100,000 XP (Legend rank)
- ✅ Verified badge (ONLY your account)
- ✅ All badges unlocked
- ✅ Special Crown avatar
