import Button from "@/components/common/Button";
import Card from "@/components/common/Card";

export default function Home() {
  return (
    <div>
      <Card
        title="Modern Loft in Addis"
        description="Spacious 2-bedroom apartment with skyline views."
        imageUrl="/assets/Book-1.png"
      />

      <Button label="Book Now" styles="bg-green-600 hover:bg-green-700" />
      <Button label="Details" styles="bg-gray-500 hover:bg-gray-600" />
    </div>
  );
}


