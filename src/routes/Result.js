import { Link } from 'react-router-dom'

function Result() {
  return (
    <div className="Result">
      <header className="Result-header">
        <p>
          Result.js Page
        </p>
        <Link to={'/'}>Home</Link>
      </header>
    </div>
  );
}

export default Result;
