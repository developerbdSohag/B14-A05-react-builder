# Dev site Builder with react

Dev site Builder with react is an interactive web platform that helps developers explore, select, and assemble custom software technology stacks across front-end, back-end, database, language, styling, and DevOps layers.

## Technologies Used
- React.js (Vite)
- Tailwind CSS
- React-Toastify
- Lucide React

## 3 Key Features
1. **Interactive Stack Selection Panel:** Real-time stack counter and selection management with single-click removal and bulk clear.
2. **Duplicate Prevention:** Cards track added status and trigger warning notifications if clicked again.
3. **Responsive Brand UI:** Mobile-first layout with custom badges, magnetic hover interactions, and sticky header.

---

## React Questions & Answers

### What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It allows developers to write HTML-like markup directly inside JavaScript files.

### What is the difference between props and state?
- **Props:** Read-only data passed from a parent component down to a child component. A child cannot directly modify props.
- **State:** Internal, reactive data managed directly inside a component. Changing state causes the component to re-render.

### What does the useState hook do, and where did you use it in this project?
The `useState` hook allows functional components to store and update reactive variables. In this project, `useState` is used in `App.jsx` to manage the loaded technologies list, the user's selected stack array, and the loading spinner state.

### What does the useEffect hook do, and why did you need it to load the JSON data?
The `useEffect` hook runs side effects in a component (such as data fetching, timers, or DOM subscriptions). In this project, `useEffect` was needed to fetch data from `technologies.json` once when the component first mounts.

### Why does every item in a .map() list need a unique key prop?
React uses the unique `key` prop to identify which items have changed, been added, or been removed. This enables fast Virtual DOM comparisons and prevents unnecessary DOM re-renders.

### What is conditional rendering? Show one place you used it.
Conditional rendering is displaying different UI output depending on boolean logic or data conditions. In `YourStack.jsx`, it renders the empty text message when `stack.length === 0`, and renders the list of cards when `stack.length > 0`.

### How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- **Parent to Child:** The parent passes data as **attributes/props** (e.g., `<TechCard tech={tech} />`).
- **Child to Parent:** The parent passes a callback function via props (e.g., `onAdd={handleAddToStack}`), and the child invokes it with arguments (e.g., `onAdd(tech)`) when an event occurs.