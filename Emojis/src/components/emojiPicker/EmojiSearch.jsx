export default function EmojiSearch({ onSearch }) {
    return <input className="search-emoji" onChange={onSearch} placeholder='Search emojis'/>;
  }