import ReactDOM from 'react-dom/client';
//import React from 'react'; phải xử lý ở babelrc và webpack.config,
// nếu không thì phải thêm import React from 'react'; ở đầu file jsx
import App from './App.jsx';
import './index.css';

const entryPoint = document.getElementById('root');
ReactDOM.createRoot(entryPoint).render(<App />);
