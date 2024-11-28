type SearchBarProps = {
    searchValue: string;
    onSearchChange: (value: string) => void;
  };
  
  export default function SearchBar({ searchValue, onSearchChange }: SearchBarProps) {
    return (
      <input
        type="text"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search products..."
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
      />
    );
  }
  