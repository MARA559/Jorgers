import React, { useState, useRef, useEffect } from 'react';

function EditableText({ value, onSave, multiline = false, className = '' }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(value);
  const inputRef = useRef(null);
  
  useEffect(() => {
    setText(value);
  }, [value]);
  
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      
      // Position cursor at the end
      if (inputRef.current.tagName === 'INPUT') {
        const length = inputRef.current.value.length;
        inputRef.current.setSelectionRange(length, length);
      }
    }
  }, [isEditing]);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (text !== value) {
      onSave(text);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !multiline) {
      handleBlur();
    }
    if (e.key === 'Escape') {
      setText(value);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    if (multiline) {
      return (
        <textarea
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className={className}
          rows={3}
        />
      );
    }
    
    return (
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={className}
      />
    );
  }

  // Display mode
  return (
    <div
      onClick={handleClick}
      className={`cursor-text ${className}`}
    >
      {multiline ? (
        <div style={{ whiteSpace: 'pre-wrap' }}>{text || 'Click to edit'}</div>
      ) : (
        text || 'Click to edit'
      )}
    </div>
  );
}

export default EditableText;