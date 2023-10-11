// Components
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import PreviewImage from "@/components/preview-image/preview-image";

// Icons
import { ArrowRight } from "lucide-react";

// Next
import Link from "next/link";

const StartButton = () => {
  return (
    <Link
      className={buttonVariants({
        size: "lg",
        className: "mt-5",
      })}
      href='/dashboard'
      target='_blank'
    >
      Iniciar <ArrowRight className='ml-2 h-5 w-5' />
    </Link>
  );
};

const TitleAndSub = () => {
  return (
    <>
      <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
        Converse com os seus <span className='text-blue-600'>documentos</span>{" "}
        em segundos.
      </h1>
      <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
        NexChat possiblita que você tenha conversações com qualquer documento
        PDF. Faça o upload do seu arquivo e começe a fazer perguntas em seguida.
      </p>
    </>
  );
};

export default function GetStart() {
  return (
    <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
      <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
        <p className='text-sm font-semibold text-gray-700'>NexChat</p>
      </div>

      <TitleAndSub />

      <StartButton />

      <PreviewImage
        src='/dashboard-preview.jpg'
        alt='product preview'
        width={1364}
        height={866}
      />
    </MaxWidthWrapper>
  );
}
