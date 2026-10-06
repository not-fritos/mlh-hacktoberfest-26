import './neo-brutalist.css'
import TypewriterCanvas from './TypewriterCanvas'

function App() {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h1 className="brutal-title">Hacktoberfest: Shopping for Skills</h1>
          <div id="typewriter-container" className="brutal-box">
            {/* Text fallback not needed - p5.js handles visual */}
          </div>
          <div className="cta-group">
            <a href="#lesson-plan" className="brutal-button">Lesson Plan</a>
            <a href="#resources" className="brutal-button secondary">Resources</a>
          </div>
        </div>
        <div className="hero-graphic">
          <div id="p5-canvas">
            <TypewriterCanvas />
          </div>
        </div>
      </header>

      <main>
        <section id="lesson-plan" className="brutal-section">
          <h2 className="brutal-heading">Lesson Plan</h2>
          <div className="brutal-box">
            <ol className="lesson-outline">
              <li>
                <h3>Intro (5 min)</h3>
                <p>What is Hacktoberfest and why skill-building matters.</p>
              </li>
              <li>
                <h3>Finding Issues (10 min)</h3>
                <p>Searching labels, good-first-issue, maintainer expectations.</p>
              </li>
              <li>
                <h3>Reading Codebases (15 min)</h3>
                <p>Quick repo tour, entry points, docs, and contribution flow.</p>
              </li>
              <li>
                <h3>Making a Small PR (20 min)</h3>
                <p>Branching, commits, scope, testing, and opening PRs.</p>
              </li>
              <li>
                <h3>Beyond PRs (10 min)</h3>
                <p>Reviews, feedback loops, and leveling up skills.</p>
              </li>
            </ol>
          </div>
        </section>

        <section id="resources" className="brutal-section">
          <h2 className="brutal-heading">Resources</h2>
          <ul className="resource-list">
            <li>
              <a className="brutal-link" href="https://hacktoberfest.com/" target="_blank" rel="noopener noreferrer">
                Hacktoberfest Official Site
              </a>
            </li>
            <li>
              <a className="brutal-link" href="https://github.com/" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a className="brutal-link" href="https://docs.github.com/en/contributing" target="_blank" rel="noopener noreferrer">
                GitHub Contributing Docs
              </a>
            </li>
            <li>
              <a className="brutal-link" href="https://github.com/issues?q=is%3Aopen+label%3A%22good+first+issue%22" target="_blank" rel="noopener noreferrer">
                Good First Issues
              </a>
            </li>
            <li>
              <a className="brutal-link" href="https://opensource.guide/" target="_blank" rel="noopener noreferrer">
                Open Source Guides
              </a>
            </li>
            <li>
              <a className="brutal-link" href="https://www.p5js.org/" target="_blank" rel="noopener noreferrer">
                p5.js
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="brutal-footer">
        <p>Build skills. Ship code. Do Hacktoberfest.</p>
      </footer>
    </>
  )
}

export default App
