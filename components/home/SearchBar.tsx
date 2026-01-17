import Input from "../ui/Input"

export default function SearchBar({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}){
    return (
        <Input
            label=""
            placeholder={placeholder}
            value={value}
            onChange={(e)=>{
                onChange(e.target.value)
            }}
         />
    );
}