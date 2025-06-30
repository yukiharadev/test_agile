import { useState, useRef, useEffect } from "react";
import styles from "./SelectedInput.module.css";

interface SelectedInputProps {
  className?: string | null;
  allOptions: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
}

const SelectedInput = ({
  className,
  allOptions,
  selected,
  onChange,
  placeholder = "Chọn trạng thái",
}: SelectedInputProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef(null);

  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((s) => s !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  const removeOption = (option: string) => {
    onChange(selected.filter((s) => s !== option));
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !(containerRef.current as any).contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`${styles.select_wrapper} ${className}`} ref={containerRef}>
      <div
        className={styles.selected_input}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {selected.length === 0 ? (
          <span className={styles.placeholder}>{placeholder}</span>
        ) : (
          selected.map((item) => (
            <span className={styles.tag} key={item}>
              {item}
              <span
                className={styles.remove}
                onClick={(e) => {
                  e.stopPropagation();
                  removeOption(item);
                }}
              >
                ×
              </span>
            </span>
          ))
        )}
      </div>

      {dropdownOpen && (
        <div className={styles.dropdown}>
          {allOptions.map((option) => (
            <div
              key={option}
              className={`${styles.dropdown_item} ${selected.includes(option) ? styles.active : ""}`}
              onClick={() => toggleOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedInput;
