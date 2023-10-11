// Components
import About from "@/components/@fragments/home/about";
import GetStart from "@/components/@fragments/home/getStart";
import BlurHome from "@/components/blur-home/blur-home";

export default function Home() {
  return (
    <>
      <GetStart />

      <div>
        <div className='relative isolate'>
          <BlurHome />

          <About />
        </div>
      </div>
    </>
  );
}
