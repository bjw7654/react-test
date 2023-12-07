import JsLogo from './skills/javaScript.png';
import TsLogo from './skills/typeScript.png';
import HTMLLogo from './skills/html.png';
import CSSLogo from './skills/css.png';
import ReactLogo from './skills/react.png';
import PythonLogo from './skills/python.png';
import CppLogo from './skills/cpp.png';
import NodeJsLogo from './skills/nodeJs.png';
import ExpressLogo from './skills/express.png';
import PostgreSQLLogo from './skills/postgresql.png';
import GitLogo from './skills/git.png';
import NPMLogo from './skills/npm.png';
import VueLogo from './skills/vue.png';
import DockerLogo from './skills/docker.png';
import VisualStudioLogo from './skills/visualStudio.png';
import FigmaLogo from './skills/figma.png';
import WebpackLogo from './skills/webpack.png';
import PycharmLogo from './skills/pycharm.png';
import VimLogo from './skills/vim.png';
import AwsLogo from './skills/aws.png';
import TailwindLogo from './skills/tailwind.png';
import './Skills.css';

export default function Skill() {
  return (
    <div>
      <h1>Tech Stack</h1>
      <div className="skill-container">
        <a
          href="https://262.ecma-international.org/6.0/"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container">
          <img className="js-logo" src={JsLogo} alt="javascript logo" />
          <h2
            className="JsLogo"
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              margin: '1.2rem 0 1rem 0',
            }}>
            ES6
          </h2>
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container">
          <img className="ts-logo" src={TsLogo} alt="TypeScript logo" />
          <h2
            className="TsLogo"
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              margin: '1.2rem 0 1rem 0',
            }}>
            TypeScript
          </h2>
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container">
          <img className="html-logo html" src={HTMLLogo} alt="html logo" />
          <h2
            className="HTMLLogo"
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              margin: '.5rem 0 1rem 0',
            }}>
            HTML5
          </h2>
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container">
          <img className="css-logo css" src={CSSLogo} alt="css logo" />
          <h2
            className="CSSLogo"
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              margin: '.5rem 0 1rem 0',
            }}>
            CSS3
          </h2>
        </a>
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container">
          <img className="react-logo react" src={ReactLogo} alt="react logo" />
          <h2
            className="ReactLogo"
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              margin: '2rem 0 1rem 0',
            }}>
            React
          </h2>
        </a>
        <a
          href="https://www.python.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container">
          <img
            className="python-logo react"
            src={PythonLogo}
            alt="python logo"
          />
          <h2
            className="PythonLogo"
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              margin: '1.2rem 0 1rem 0',
            }}>
            Python
          </h2>
        </a>
        <a
          href="https://isocpp.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container">
          <img className="cpp-logo react" src={CppLogo} alt="cpp logo" />
          <h2
            className="CppLogo"
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              margin: '1.3rem 0 1rem 0',
            }}>
            C++
          </h2>
        </a>
        <a
          href="https://nodejs.org/en"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container">
          <img className="node-logo react" src={NodeJsLogo} alt="node logo" />
          <h2
            className="NodeLogo"
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              margin: '.8rem 0 1rem 0',
            }}>
            Node.js
          </h2>
        </a>
        <a
          href="https://www.postgresql.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container">
          <img
            className="postgresql-logo react"
            src={PostgreSQLLogo}
            alt="postgresql logo"
          />
          <h2
            className="PostgreSQLLogo"
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              margin: '.8rem 0 1rem 0',
            }}>
            PostgreSQL
          </h2>
        </a>
        <a
          href="https://git-scm.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container">
          <img className="git-logo react" src={GitLogo} alt="git logo" />
          <h2
            className="GitLogo"
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              margin: '1.5rem 0 1rem 0',
            }}>
            Git
          </h2>
        </a>
        <a
          href="https://www.npmjs.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container">
          <img className="npm-logo react" src={NPMLogo} alt="npm logo" />
          <h2
            className="NPMLogo"
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              margin: '3rem 0 1rem 0',
            }}>
            NPM
          </h2>
        </a>
        <a
          href="https://vuejs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container">
          <img className="vue-logo react" src={VueLogo} alt="vue logo" />
          <h2
            className="VueLogo"
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              margin: '1.5rem 0 1rem 0',
            }}>
            Vue.js
          </h2>
        </a>
        <a
          href="https://www.docker.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container">
          <img
            className="docker-logo react"
            src={DockerLogo}
            alt="docker logo"
          />
          <h2
            className="DockerLogo"
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              margin: '2.5rem 0 1rem 0',
            }}>
            Docker
          </h2>
        </a>
        <a
          href="https://expressjs.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container">
          <img
            className="express-logo react"
            src={ExpressLogo}
            alt="express logo"
          />
          <h2
            className="ExpressLogo"
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              margin: '2.5rem 0 1rem 0',
            }}>
            Express
          </h2>
        </a>
        <a
          href="https://aws.amazon.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container">
          <img className="aws-logo react" src={AwsLogo} alt="aws logo" />
          <h2
            className="AwsLogo"
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              margin: '1.5rem 0 1rem 0',
            }}>
            AWS
          </h2>
        </a>
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container">
          <img className="vs-logo react" src={VisualStudioLogo} alt="vs logo" />
          <h2
            className="VisualStudioLogo"
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              margin: '1.5rem 0 1rem 0',
            }}>
            Visual Studio
          </h2>
        </a>
        <a
          href="https://www.jetbrains.com/pycharm/"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container">
          <img
            className="pycharm-logo react"
            src={PycharmLogo}
            alt="pycharm logo"
          />
          <h2
            className="PycharmLogo"
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              margin: '1.5rem 0 1rem 0',
            }}>
            Pycharm
          </h2>
        </a>
        <a
          href="https://www.vim.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container">
          <img className="vim-logo react" src={VimLogo} alt="vim logo" />
          <h2
            className="VimLogo"
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              margin: '1.5rem 0 1rem 0',
            }}>
            Vim
          </h2>
        </a>
        <a
          href="https://www.figma.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container">
          <img className="figma-logo figma" src={FigmaLogo} alt="figma logo" />
          <h2
            className="FigmaLogo"
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              margin: '1.5rem 0 1rem 0',
            }}>
            Figma
          </h2>
        </a>
        <a
          href="https://webpack.js.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container">
          <img
            className="webpack-logo react"
            src={WebpackLogo}
            alt="webpack logo"
          />
          <h2
            className="WebpackLogo"
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              margin: '.9rem 0 1rem 0',
            }}>
            Webpack
          </h2>
        </a>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container">
          <img
            className="tailwind-logo tailwind"
            src={TailwindLogo}
            alt="Tailwind logo"
          />
          <h2
            className="TailwindLogo"
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              margin: '2.5rem 0 1rem 0',
            }}>
            Tailwind
          </h2>
        </a>
      </div>
    </div>
  );
}
