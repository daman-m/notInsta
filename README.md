# notInsta

A simple photo-sharing social app built with React and Firebase. Create an account, share images, and interact with other users through likes, comments, and profiles.

## Features

- Email and password registration, login, and logout.
- Username validation and availability checks during registration.
- PNG and JPEG uploads with a progress indicator.
- A live photo feed, ordered newest first, using Firestore subscriptions.
- Likes and comments, with counts on each post.
- Controls for deleting your own posts and comments.
- A user directory and individual profiles showing posts, post counts, and join dates.
- Profile avatar uploads with a preview before saving.
- Responsive layouts built with Chakra UI.

## Tech stack

| Area | Technology |
| --- | --- |
| Frontend | React 18, Create React App 5 |
| UI | Chakra UI 2, Emotion, React Icons |
| Routing | React Router 6 |
| Authentication | Firebase Authentication |
| Database and file storage | Cloud Firestore, Firebase Storage |
| Forms and data hooks | React Hook Form, React Firebase Hooks |
| Dates | date-fns |

## Getting started

### 1. Install dependencies

Install Node.js and npm, then clone the repository:

```bash
git clone https://github.com/daman-m/notInsta.git
cd notInsta
npm ci
```

The repository does not pin a Node.js version. Dependencies are locked in `package-lock.json`.

### 2. Configure Firebase

The app connects directly to Firebase from the browser. There is no separate backend server to run.

1. Create a Firebase project and register a web app.
2. Enable the **Email/Password** sign-in provider in Firebase Authentication.
3. Create a Cloud Firestore database and a Firebase Storage bucket.
4. Replace the existing `firebaseConfig` object in [`src/firebase/config.js`](src/firebase/config.js) with your web app configuration. Use the storage bucket value supplied by your project.
5. Add the local and deployed app domains to Firebase Authentication's authorized domains as needed.
6. Configure Firestore and Storage security rules for the app's reads and writes, including ownership checks for user content.

**Configuration is currently hardcoded in `src/firebase/config.js`.** The app does not read Firebase settings from environment variables. Use your own Firebase project when running a copy.

Security rules and index definitions are not included in this repository. The queries that filter and sort profile posts and comments may require these composite indexes:

| Collection | Fields |
| --- | --- |
| `images` | `uid` ascending, `createdAt` descending |
| `comments` | `postID` ascending, `date` ascending |

If Firestore reports a missing index, follow the index creation link in its error message.

### 3. Run locally

```bash
npm start
```

Open [localhost:3000](http://localhost:3000). Register an account, upload an image, and use the user directory to explore profiles.

Registration requires an alphanumeric username of at least six characters and a password of at least six characters.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm start` | Start the development server. |
| `npm run build` | Create a production bundle in `build/`. |
| `npm test` | Start the Create React App test runner in watch mode. |
| `npm run eject` | Eject the build configuration; this is irreversible. |

No application test files are currently included.

## Routes

| Path | Page |
| --- | --- |
| `/` | Landing page |
| `/login` | Login |
| `/register` | Registration |
| `/protected/mypage` | Shared photo feed and upload controls |
| `/protected/users` | User directory |
| `/protected/profile/:id` | User profile and their posts |
| `/protected/comments/:id` | Post detail and comments |

## Project structure

```text
src/
├── Routes/             # Page components and route definitions
├── comps/
│   ├── auth/           # Login and registration forms
│   ├── layout/         # Shared layout, navigation, and sidebar
│   ├── posts/          # Feed, uploads, likes, and comments
│   ├── profile/        # Profiles and avatar editing
│   └── users/          # User directory
├── firebase/config.js  # Firebase initialization and configuration
├── hooks/              # Authentication, users, uploads, and Firestore hooks
│   └── postActions/    # Post and comment operations
└── utility/            # Form validation and username lookup
```

### Data storage

| Collection or location | Contents |
| --- | --- |
| Firestore `users/{uid}` | ID, email, username, join date, and avatar URL |
| Firestore `images/{id}` | Image URL, author ID, timestamps, and an array of user IDs that liked the post |
| Firestore `comments/{id}` | Comment text, author ID, post ID, and date |
| Storage bucket root | Post images, stored using their original filenames |
| Storage `avatars/{uid}` | Profile avatar images |

## Deployment

Run `npm run build` and deploy the `build/` directory to a static host. Configure the host to serve `index.html` for client-side routes. A Netlify-style fallback is already provided in [`public/_redirects`](public/_redirects).

Use your Firebase project configuration and authorize your deployed domain before testing authentication.

## Current limitations

- The shared auth hook returns `authLoading`, while several components expect `isLoading`. The layout's redirect logic needs correction before relying on protected-page behavior; Firebase security rules must enforce data access.
- Post uploads use the original filename as the Storage path, so files with the same name can collide.
- Deleting a post removes its Firestore document and initiates deletion of its comments, but does not delete the uploaded image from Storage.
- Firebase rules, indexes, and emulator configuration are not versioned in this repository.

## License

No license file is currently included in this repository.
