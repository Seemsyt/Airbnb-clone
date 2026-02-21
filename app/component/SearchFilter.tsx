import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

type SearchFilterProps = {
  className?: string;
  inputClassName?: string;
};

const SearchFilter = ({ className, inputClassName }: SearchFilterProps) => {
  return (
    <form className={cn("flex items-center gap-2", className)}>
      <input
        type="text"
        placeholder="Search place..."
        className={cn(
          "h-10 rounded-full border border-zinc-300 bg-white px-4 text-sm font-medium outline-none transition focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30",
          inputClassName
        )}
      />
      <button
        type="submit"
        aria-label="Search"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white transition hover:bg-zinc-100"
      >
        <Search className="h-4 w-4" />
      </button>
    </form>
  );
};

export default SearchFilter;
