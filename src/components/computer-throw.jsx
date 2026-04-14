/**
 * Name: Jeethesh Pallinti
 * Date: 04.14.2026
 * CSC 372-01
 * * Component that displays the computer's selection or a shuffle animation.
 */

/**
 * @param {Object} props
 * @param {string} props.choice - Current computer choice or '?'.
 * @param {boolean} props.animating - Whether the shuffle is active.
 */
function ComputerThrow({ choice, animating }) {
  return (
    <section id="computer-section">
      <h2>Computer's Throw</h2>
      <div id="computer-display">
        {choice === '?' ? (
          <img 
            src="/images/question-mark.PNG" 
            alt="Waiting for computer" 
            className="choice-image"
          />
        ) : (
          <img 
            src={`/images/${choice}.PNG`} 
            alt={`Computer chose ${choice}`} 
            className="choice-image"
          />
        )}
      </div>
    </section>
  );
}

export default ComputerThrow;