# Dynamic List in React

## **Project Overview**

This is a simple React application that demonstrates rendering a dynamic list using JSX. The list items are hardcoded in the application and displayed using React’s declarative approach.

The project helps beginners understand:

* React component structure
* JSX syntax
* Mapping over arrays to render lists
* Using `key` attributes for list items

---

## **Features**

* Renders a list of three items: **React**, **JavaScript**, **CSS**.
* Uses **JSX** to dynamically generate list elements.
* Demonstrates proper **React component structure**.
* Includes **CSS styling** for better readability.

---

## **Folder Structure**

```
dynamic-list/
├── package.json          # Project metadata and dependencies
├── public/
│   └── index.html        # HTML entry point
├── src/
│   ├── App.js            # Main React component
│   ├── index.js          # ReactDOM entry point
│   └── index.css         # Basic styling
└── README.md             # Project documentation
```

---

## **Prerequisites**

Before running this project, ensure the following are installed:

1. **Node.js** (v14 or higher recommended)
2. **npm** (comes with Node.js)

Check installation:

```bash
node -v
npm -v
```

---

## **Installation Steps**

1. **Download and extract** the `dynamic-list.zip` file.
2. Open a terminal and navigate to the project folder:

```bash
cd path/to/dynamic-list
```

3. Install all dependencies:

```bash
npm install
```

---

## **Running the Project**

Start the development server with:

```bash
npm start
```

* Your default browser should automatically open and display:

```
Dynamic List Example
- React
- JavaScript
- CSS
```

* Any changes made in `App.js` or `index.css` will **automatically update** in the browser.

---

## **Code Explanation**

### `src/App.js`

* Contains the main component `App`.
* Hardcoded array `items = ["React", "JavaScript", "CSS"]`.
* Uses `map()` to dynamically create `<li>` elements for each item.
* `key` attribute is used to avoid React warnings when rendering lists.

### `src/index.js`

* Entry point of the application.
* Renders the `App` component using `ReactDOM.createRoot`.

### `src/index.css`

* Basic styling for `body`, `h1`, and `ul/li` elements for readability.

---

## **Project Highlights**

* Demonstrates **React's declarative approach** over vanilla JavaScript.
* Provides **dynamic list rendering** using `map()` function.
* Properly structured for learning and submission to repositories.

---

## **Additional Notes**

* Compatible with **React 18** and **latest browsers**.
* Can be extended to include dynamic input lists or API fetched data.

---

## **Author**

**Lakshya Marodia**

* GitHub: [https://github.com/LAKSHYAMARODIA01](https://github.com/LAKSHYAMARODIA01)
* LinkedIn: [www.linkedin.com/in/lakshya-marodia](https://www.linkedin.com/in/lakshya-marodia)

