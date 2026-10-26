# HourX - Skill-Sharing React Web Application 🎓⏳

Welcome to **HourX**, a college peer-to-peer skill-exchange platform built with **React**, **React Router**, and **Vanilla CSS**.

HourX operates on a **1:1 timebanking concept**:
1. You teach a skill to a peer.
2. You earn **Time Credits** (1 Hour Taught = 1 Time Credit).
3. You use your Time Credits to learn another skill from someone else.

---

## 📚 React Learning Guide & Concepts Demonstrated

This project is built explicitly to showcase core React fundamentals in a clean, readable manner. Below is the beginner guide explaining every major React concept used in this repository.

### 1. Components
React apps are built by composing small, isolated pieces of UI called **Components**. Components let us break down complex UIs into reusable code blocks.
- **Example Component**: `<SkillCard skill={skill} />` in [`src/components/SkillCard.jsx`](file:///c:/Users/My%20PC/Documents/HourX/src/components/SkillCard.jsx)
- **Why we use it**: Instead of repeating HTML structure for 10 different skills, we write the card layout once and re-use it across the Home and Discover pages.

### 2. JSX (JavaScript XML)
JSX allows us to write HTML-like markup directly inside JavaScript files.
- **Example**: `<h1>Good afternoon 👋</h1>`
- **How it works**: Under the hood, React transforms JSX into JavaScript functions (`React.createElement(...)`).

### 3. Props (Properties)
Props are inputs passed from parent components to child components. Data in React flows **one-way** (downwards from parent to child).
- **Example**:
  ```jsx
  <CreditBalance credits={4.5} variant="card" />
  ```
- **How it works**: The child `CreditBalance` component receives an object `{ credits: 4.5, variant: "card" }` and renders the UI accordingly.

### 4. useState
`useState` is a React Hook that allows components to store and remember interactive data (state). When state changes, React automatically re-renders the component to update the UI.
- **Example**:
  ```jsx
  const [credits, setCredits] = useState(4.5);
  ```
- **How it works**: Calling `setCredits(5.5)` updates the `credits` variable and triggers a UI update.

### 5. Events
Event handlers respond to user interactions like clicking buttons or typing into input fields.
- **`onClick`**: Triggers when a button is clicked.
- **`onChange`**: Triggers on every keystroke in input fields.
- **`onSubmit`**: Triggers when a form is submitted.

### 6. Conditional Rendering
Rendering different UI elements based on simple boolean conditions.
- **Ternary Operator (`? :`)**:
  ```jsx
  {credits > 0 ? <p>You can book a session</p> : <p>Teach a skill to earn credits</p>}
  ```
- **Logical AND (`&&`)**:
  ```jsx
  {isBooked && <div className="alert-success">Session booked successfully 🎉</div>}
  ```

### 7. Lists and `.map()`
In React, we use the standard JavaScript `.map()` array method to transform array items into JSX elements.
- **Example**:
  ```jsx
  {skills.map((skill) => (
    <SkillCard key={skill.id} skill={skill} />
  ))}
  ```
- **Why `key` is required**: The `key` prop gives each item a stable identity so React knows which items changed, were added, or were removed during updates.

### 8. Controlled Forms
In a controlled form, input values are bound to React `useState`. The state serves as the "single source of truth".
- **Example**: [`src/pages/Teach.jsx`](file:///c:/Users/My%20PC/Documents/HourX/src/pages/Teach.jsx) uses controlled inputs where `value={formData.name}` and `onChange={handleChange}` sync user input directly into state.

### 9. React Router
React Router enables Single Page Application (SPA) navigation without page reloads.
- `<BrowserRouter>`: Wraps the app and listens to URL changes.
- `<Routes>` & `<Route>`: Maps specific paths (`/`, `/discover`, `/wallet`) to page components.
- `<Link to="/discover">`: Navigates cleanly between pages.
- `useNavigate()`: Programmatically redirects users (e.g. `navigate('/discover')`).

### 10. Dynamic Routes & `useParams()`
Dynamic routes allow path parameters like `/skill/:id`.
- **Example**: Path `/skill/2` loads the `SkillDetails` page.
- **`useParams()`**: Extracts `{ id: "2" }` from the URL so we can lookup and render the corresponding skill details.

### 11. useEffect (Side Effects)
`useEffect` handles side effects outside of component rendering, such as updating tab titles or syncing mock data.
- **Example**: [`src/App.jsx`](file:///c:/Users/My%20PC/Documents/HourX/src/App.jsx)
  ```jsx
  useEffect(() => {
    document.title = `HourX (${credits} Hours Credit) - Skill Exchange`;
  }, [credits]);
  ```

---

## ⚡ Concept: What is the Virtual DOM?

1. **The Real DOM**: The browser's tree representation of HTML elements. Modifying real DOM nodes directly is computationally expensive.
2. **The Virtual DOM**: A lightweight copy of the real DOM kept in memory by React.
3. **How React Updates the UI**:
   ```text
   User clicks "Book Session"
           ↓
   Event handler runs (onClick)
           ↓
   setIsBooked(true) / setCredits(newCredits)
           ↓
   React updates State
           ↓
   React re-renders Virtual DOM tree
           ↓
   React compares (diffs) new Virtual DOM with previous Virtual DOM
           ↓
   React updates ONLY the changed real DOM elements
   ```

---

## 📁 Project Structure & File Guide

```text
src/
├── components/
│   ├── Navbar.jsx         # Header navigation bar with credit badge & route links
│   ├── Button.jsx         # Reusable button with variants (primary, secondary, outline)
│   ├── SkillCard.jsx      # Reusable card displaying skill summary & detail link
│   ├── UserCard.jsx       # Student profile header showing stats & bio
│   ├── SessionCard.jsx    # Card showing confirmed upcoming 1-on-1 sessions
│   └── CreditBalance.jsx  # Reusable badge & dashboard balance card
├── pages/
│   ├── Home.jsx           # Dashboard greeting, balance, upcoming sessions, recommended skills
│   ├── Discover.jsx       # Skill search bar, category pills, & filtered skill grid
│   ├── SkillDetails.jsx   # Dynamic route (/skill/:id) with detailed info & booking state
│   ├── Teach.jsx          # Controlled form for listing a new skill and earning credits
│   ├── Wallet.jsx         # Credit balance breakdown and transaction history
│   └── Profile.jsx        # User reputation, skills taught, skills wanted, & student reviews
├── data/
│   ├── skills.js          # Mock list of skills
│   ├── users.js           # Mock student user data
│   └── sessions.js        # Mock upcoming sessions & transaction logs
├── App.jsx                # Top-level state (credits, skills list) & React Router paths
├── main.jsx               # Entry point mounting App into root DOM node
└── index.css              # Vanilla CSS variables, responsive grid, & modern styling
```

---

## 🚀 Running the Project Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and visit:
   `http://localhost:5173`
