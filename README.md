# Recipe Book - Angular Recipe Management Application

A full-featured recipe management web application built with Angular 19, NgRx state management, and Firebase backend. Users can create, edit, and manage recipes, automatically generate shopping lists from recipe ingredients, and securely authenticate with email/password.

**[View Live Application](https://ng-course-recipe-book-7f112.web.app)**

![Recipe Book](./screenshots/recipe-list.png)

---

## ✨ Features

### 🔐 Authentication & Security

- User registration and login with Firebase Authentication
- JWT token-based authentication
- Auto-login functionality with persistent sessions
- Route guards protecting authenticated routes
- Automatic token refresh and expiration handling

### 📖 Recipe Management

- Create, edit, and delete custom recipes
- Add recipe details: name, description, and image URL
- Dynamic ingredient list with add/remove functionality
- Detailed recipe view with complete ingredient list and cooking instructions
- Data persistence with Firebase Realtime Database

### 🛒 Shopping List

- Automatically add recipe ingredients to shopping list
- Edit ingredient quantities and names
- Delete individual items or clear entire list
- Real-time updates with Firebase backend

### 🏗️ Architecture & Best Practices

- **NgRx** for centralized state management (Store, Actions, Effects)
- **Reactive Forms** with FormBuilder and FormArray for dynamic forms
- **Lazy Loading** modules for optimized performance
- **HTTP Interceptors** for automatic JWT token attachment
- **Resolvers** for pre-loading route data
- **Route Guards** for authentication protection
- **Service-based** architecture for separation of concerns

---

## 🛠️ Technologies Used

- **Frontend Framework:** Angular 19
- **State Management:** NgRx (Store, Effects, Actions)
- **Backend & Database:** Firebase (Authentication, Realtime Database, Hosting)
- **Language:** TypeScript 5.7
- **Reactive Programming:** RxJS
- **Forms:** Angular Reactive Forms
- **Styling:** Bootstrap 5
- **Build Tool:** Angular CLI
- **Deployment:** Firebase Hosting

---

## 📦 Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (`npm install -g @angular/cli`)

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ameerovich/RecipeBook.git
   cd RecipeBook
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Firebase**

   Create `src/environments/environment.ts`:

   ```typescript
   export const environment = {
     production: false,
     firebaseAPIKey: "YOUR_FIREBASE_API_KEY",
   };
   ```

   Create `src/environments/environment.prod.ts`:

   ```typescript
   export const environment = {
     production: true,
     firebaseAPIKey: "YOUR_FIREBASE_API_KEY",
   };
   ```

   **Note:** Get your Firebase API key from [Firebase Console](https://console.firebase.google.com/)

4. **Run development server**

   ```bash
   ng serve
   ```

   Navigate to `http://localhost:4200/`

5. **Build for production**
   ```bash
   ng build --configuration production
   ```

---

## 📸 Screenshots

### Recipe List

![Recipe List](./screenshots/recipe-list.png)
_Browse and manage all your recipes_

### Recipe Detail

![Recipe Detail](./screenshots/recipe-detail.png)
_View complete recipe with ingredients and instructions_

### Create/Edit Recipe

![Recipe Form](./screenshots/recipe-form.png)
_Dynamic form with add/remove ingredient functionality_

### Shopping List

![Shopping List](./screenshots/shopping-list.png)
_Manage your shopping list with ingredients from recipes_

### Authentication

![Login](./screenshots/login.png)
_Secure login with Firebase Authentication_

---

## 📁 Project Structure

```
RecipeBook/
├── src/
│   ├── app/
│   │   ├── auth/                    # Authentication module
│   │   │   ├── auth.component.*
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.guard.ts
│   │   │   ├── auth-interceptor.service.ts
│   │   │   └── store/              # Auth NgRx store
│   │   ├── recipes/                # Recipes feature module
│   │   │   ├── recipe-list/
│   │   │   ├── recipe-detail/
│   │   │   ├── recipe-edit/
│   │   │   ├── recipe.service.ts
│   │   │   └── store/              # Recipes NgRx store
│   │   ├── shopping-list/          # Shopping list module
│   │   │   ├── shopping-edit/
│   │   │   └── store/              # Shopping list NgRx store
│   │   ├── shared/                 # Shared components & directives
│   │   └── header/                 # Navigation header
│   ├── environments/               # Environment configurations
│   └── assets/                     # Static assets
├── screenshots/                    # Application screenshots
├── firebase.json                   # Firebase hosting config
└── angular.json                    # Angular workspace config
```

---

## 🔒 Security Features

- **Environment Variables:** Sensitive API keys stored in environment files (not committed to Git)
- **HTTP-Only Tokens:** JWT tokens managed securely
- **Route Guards:** Unauthorized access prevention
- **Input Validation:** Form validation on all user inputs
- **Firebase Security Rules:** Database access restricted to authenticated users

---

## 🚀 Deployment

This application is deployed on **Firebase Hosting**.

**Live URL:** https://ng-course-recipe-book-7f112.web.app

### Deploy Your Own Instance

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase (select Hosting)
firebase init

# Build production bundle
ng build --configuration production

# Deploy to Firebase
firebase deploy
```

---

## 🎓 What I Learned

### Technical Skills

- **NgRx State Management:** Implemented complex state management with Store, Actions, and Effects for handling async operations
- **Firebase Integration:** Configured and integrated Firebase Authentication and Realtime Database
- **Reactive Programming:** Leveraged RxJS operators for handling async data streams and HTTP requests
- **Advanced Angular Forms:** Built dynamic forms using FormArray for variable-length ingredient lists
- **HTTP Interceptors:** Implemented automatic JWT token attachment to authenticated requests
- **Route Guards & Resolvers:** Protected routes and pre-loaded data for better UX

### Architecture & Design Patterns

- **Feature Module Architecture:** Organized code into lazy-loaded feature modules
- **Service-Oriented Design:** Separated business logic from components
- **Immutable State Updates:** Maintained predictable state with NgRx patterns
- **Separation of Concerns:** Clear distinction between presentation and business logic

### Development Practices

- **TypeScript Best Practices:** Strong typing, interfaces, and type safety
- **Error Handling:** Comprehensive error handling in HTTP requests and NgRx effects
- **Code Organization:** Clean, maintainable, and scalable project structure
- **Git Workflow:** Version control with meaningful commits
- **Production Deployment:** Built and deployed optimized production bundle

---

## 🔮 Future Improvements

- [ ] Add unit tests (Jasmine/Karma) and E2E tests (Cypress)
- [ ] Implement recipe search and filtering
- [ ] Add recipe categories and tags
- [ ] Enable recipe image uploads (Firebase Storage)
- [ ] Add user profile page with avatar
- [ ] Implement recipe rating and reviews
- [ ] Add recipe sharing functionality
- [ ] Create mobile-responsive design improvements
- [ ] Add dark mode toggle
- [ ] Implement recipe printing feature
- [ ] Add nutrition information calculator
- [ ] Enable offline mode with service workers
- [ ] Add recipe import/export functionality
- [ ] Implement social media sharing

---

## 👨‍💻 Author

**Ameer Yousef**

- GitHub: [@Ameerovich](https://github.com/Ameerovich)
- Email: ameer.n.yousef@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- [Angular Documentation](https://angular.io/docs)
- [NgRx Documentation](https://ngrx.io/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Bootstrap](https://getbootstrap.com/)

---

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub or contact me directly.

**⭐ If you like this project, please give it a star on GitHub! ⭐**
