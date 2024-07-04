// import { AlertDialogDemo } from "@/components/dialog";
import { Hero } from "@/components/hero";
// import { Accordion } from "@radix-ui/react-accordion";
import { AccordionDemo } from "./accordion";


export default function Home() {
  return (
    <div className="bg-black text-white h-screen">
      <h1 className="text-center text-lg pt-4 text-white"> Hello Nitin Singh.</h1>
      <Hero />
      <div className="p-10">
        <AccordionDemo />
      </div>
    </div>
  );
}
