//import React from 'react'; phải xử lý ở babelrc và webpack.config,
// nếu không thì phải thêm import React from 'react'; ở đầu file jsx

//import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState, Fragment } from 'react';

const list = CORE_CONCEPTS.map((item) => {
  return <CoreConcept key={item.title} {...item}></CoreConcept>;
});

function App() {
  const [tabContent, setTabContent] = useState();

  function handleClick(selectedButton) {
    setTabContent(selectedButton);
  }

  let tabContentMarkup = <p>Please click a button</p>;
  if (EXAMPLES[tabContent]) {
    tabContentMarkup = (
      <div id="tab-content">
        <h3>{EXAMPLES[tabContent].title}</h3>
        <p>{EXAMPLES[tabContent].description}</p>
        <pre>
          <code>{EXAMPLES[tabContent].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Fragment>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            ></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept> */}
            {list}
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton
              isActive={tabContent === 'components'}
              onSelect={() => handleClick('components')}
            >
              Components
            </TabButton>
            <TabButton
              isActive={tabContent === 'jsx'}
              onSelect={() => handleClick('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isActive={tabContent === 'props'}
              onSelect={() => handleClick('props')}
            >
              Props
            </TabButton>
            <TabButton
              isActive={tabContent === 'state'}
              onSelect={() => handleClick('state')}
            >
              Sate
            </TabButton>
          </menu>
          {tabContentMarkup}
        </section>
      </main>
    </Fragment>
  );
}

export default App;
