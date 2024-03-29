import Featured from "@/components/Featured";
import Header from "@/components/Header";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Featured />
    </div>
  );
}

export function getServerSideProps() {
  
}