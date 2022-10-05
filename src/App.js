import React from 'react'
import './App.css';
import Questions from './Questions'
import {useGeneralContext} from './context'
function App() {
  const {getQuestions} = useGeneralContext()
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about login</h3>

        <section className="info">
          {getQuestions.map((question) => {
            return <Questions {...question} key={question.id}/>;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
