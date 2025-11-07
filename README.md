- [Section 1: Getting Started](#section-1-getting-started)
- [Section 2: Javascript refresher](#section-2-javascript-refresher)
- [Section 3: React Enssentials - Component, JSX, Props, State and More](#section-3-react-enssentials---component-jsx-props-state-and-more)
  - [3.1 Component](#31-component)

# Section 1: Getting Started

# Section 2: Javascript refresher

# Section 3: React Enssentials - Component, JSX, Props, State and More

## 3.1 Component

**React Apps Are Built By Combining Components**

- Components
- JSX
- Props

**Build User Interfaces With Components**

- Any website or app can be broken down into smaller building blocks: Component

  ![alt text](./lecture_note/Section3_001.png)

**Why Components?**

- Reusable Building Blocks
  - Create small building blocks & compose the UI from them
  - If needed: Reuse a building block in di!erent parts of the UI (e.g., a reusable button)
- Related Code Lives Together
  - Related HTML & JS (and possibly CSS) code is stored together
  - Since JS influences the output, storing JS + HTML together makes sense
- Separation of Concerns
  - Di!erent components handle di!erent data & logic
  - Vastly simplifies the process of working on complex apps

**Describe The Target UI With JSX**

- JavaScript Syntax eXtension (JSX): Used to describe & create HTML elements in JavaScript in a declarative way
- Component Functions Must Follow Two Rules:
  - Name Starts With Uppercase Character
    - The function name must start with an uppercase character
    - Multi-word names should be written in PascalCase (e.g., “MyHeader”)
    - It’s recommended to pick a name that describes the UI building block (e.g., “Header” or “MyHeader”)
  - Returns “Renderable” Content
    - The function must return a value that can be rendered (“displayed on screen”) by React
    - In most cases: Return JSX Also allowed: string, number, boolean, null, array of allowed values

**Example react componet**

```
import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
```
