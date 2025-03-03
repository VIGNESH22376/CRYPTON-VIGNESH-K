import { useState } from 'react';


function Task4() {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');

  const calculate = (question) => {
    const match = question.toLowerCase().match(/(\d+)\s*(plus|minus|times|divided by)\s*(\d+)/);

    if (!match) return "Invalid format. Use 'plus', 'minus', 'times', 'divided by'.";

    const [, num1, operation, num2] = match;
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    switch (operation) {
      case 'plus': return `${a} plus ${b} is ${a + b}`;
      case 'minus': return `${a} minus ${b} is ${a - b}`;
      case 'times': return `${a} times ${b} is ${a * b}`;
      case 'divided by': return `${a} divided by ${b} is ${a / b}`;
      default: return "unknown operation.";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(calculate(question));
  };

  return (
    <div>
      <h1>Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g., What is 5 plus 7?"
        />
        <button type="submit">Calculate</button>
      </form>
      <p>{result}</p>
    </div>
  );
}

export default Task4;
