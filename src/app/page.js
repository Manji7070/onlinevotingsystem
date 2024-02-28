import Image from "next/image";
import Vote from "./vote";
import VotingForm from "@/components/VotingForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       
       <Vote/>  
      <VotingForm/>
       <button>Vote now</button>
        
    </main>
  );
}
