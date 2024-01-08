import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-center font-bold text-4xl my-10">
        Home page is comming soon
      </h1>
      <Button className="bg-green-400 hover:bg-green-700 hover:text-black hover:scale-125 transform text-black m-10">
        {" "}
        ShadCn Button Test{" "}
      </Button>
    </main>
  );
}
