import Image from "next/image";
import Services from "./sections/Services";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <Services />
      <Button color="primary">Button</Button>
    </div>
  );
}
