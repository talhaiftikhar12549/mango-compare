import { useRef } from 'react';

const RichTextEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);

  const format = (command, value = null) => {
    document.execCommand(command, false, value);
    onChange(editorRef.current.innerHTML);
  };

  const handleInput = () => {
    onChange(editorRef.current.innerHTML);
  };

  return (
    <div className="space-y-2">
      <div className="flex space-x-2 mb-2">
        <button type="button" onClick={() => format('bold')}><b>B</b></button>
        <button type="button" onClick={() => format('italic')}><i>I</i></button>
        <button type="button" onClick={() => format('underline')}><u>U</u></button>
        <button type="button" onClick={() => format('formatBlock', 'h1')}>H1</button>
        <button type="button" onClick={() => format('formatBlock', 'h2')}>H2</button>
        <button type="button" onClick={() => format('formatBlock', 'p')}>P</button>
      </div>
      <div
        ref={editorRef}
        contentEditable={true}
        onInput={handleInput}
        dangerouslySetInnerHTML={{ __html: value }}
        className="border p-3 min-h-[150px] rounded"
      />
    </div>
  );
};

export default RichTextEditor;