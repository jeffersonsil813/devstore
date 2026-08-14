import Skeleton from "@/components/skeleton";

const SearchLoading = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">Buscando produtos...</p>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-95" />
        <Skeleton className="h-95" />
        <Skeleton className="h-95" />
        <Skeleton className="h-95" />
        <Skeleton className="h-95" />
        <Skeleton className="h-95" />
      </div>
    </div>
  );
};

export default SearchLoading;
