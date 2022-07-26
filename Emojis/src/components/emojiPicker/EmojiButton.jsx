export default function EmojiButton({ emoji, onClick }) {
    function handleOnClick() {
      onClick(emoji);
    }

    return (
      <button onClick={handleOnClick}>
        {emoji.symbol}
      </button>
    );
  }