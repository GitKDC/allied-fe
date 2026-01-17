import InspectionItem from "./InspectionItem";

export default function InspectionList({ data }: any) {
  return (
     <div className="space-y-3">
      {data.map((item: any) => (
        <InspectionItem key={item.id} item={item} />
      ))}
    </div>
  );
}
