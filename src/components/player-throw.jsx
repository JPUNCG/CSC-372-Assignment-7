/**
 * Name: Jeethesh Pallinti
 * Date: 04.14.2026
 * CSC 372-01
 * * Component that displays clickable images for the player to make a selection.
 */

/**
 * @param {Object} props
 * @param {function} props.onSelect - Callback for when an image is clicked.
 * @param {string} props.selected - The currently selected throw.
 */
function PlayerThrow({ onSelect, selected }) {
  let choices = ['rock', 'paper', 'scissors'];

  return (
    <section id="player-section">
      <h2>Your Throw</h2>
      <div id="choices-list">
        {choices.map((item) => (
          <img
            key={item}
            src={`/images/${item}.PNG`}
            alt={item}
            className={selected === item ? "selected-image choice-image" : "choice-image"}
            onClick={() => onSelect(item)}
          />
        ))}
      </div>
    </section>
  );
}

export default PlayerThrow;