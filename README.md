- [Section 1: Getting Started](#section-1-getting-started)
- [Section 2: Javascript refresher](#section-2-javascript-refresher)
- [Section 3: React Enssentials - Component, JSX, Props, State and More](#section-3-react-enssentials---component-jsx-props-state-and-more)
  - [3.1 React component](#31-react-component)

# Section 1: Getting Started

# Section 2: Javascript refresher

# Section 3: React Enssentials - Component, JSX, Props, State and More

## 3.1 React component

Example react componet

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
