import { useRef } from "react";
import EmojiPicker from "./EmojiPicker";

export default function EmojiPickerInput() {
  const inputRef = useRef(null);
  return (
    <div className='container'>
      <h1>Emoji Picker</h1>
      <input className="text" ref={inputRef} placeholder='Your text here...'/>
      <EmojiPicker ref={inputRef} />
    </div>
  );
}