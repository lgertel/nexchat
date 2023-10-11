// Next
import Link from "next/link";

// Components
import PreviewImage from "@/components/preview-image/preview-image";
import Step from "@/components/step/step";

export default function About() {
  return (
    <div className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
      <div className='mb-12 px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
            Começe a conversação em segundos.
          </h2>
          <p className='mt-4 text-lg text-gray-600'>
            Conversar com seus arquivos PDF nunca foi tão fácil mais fácil do
            que com NexChat.
          </p>
        </div>
      </div>

      <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
        <Step
          stepNumber={1}
          title='Registre-se e crie uma conta'
          description='Começando com um plano gratuito ou escolha o nosso'
        >
          <Link
            href='/pricing'
            className='text-blue-700 underline underline-offset-2'
          >
            {" "}
            pro plan.
          </Link>
        </Step>

        <Step
          stepNumber={2}
          title='Carregue seu arquivo PDF'
          description='Processaremos seu arquivo e o tornaremos pronto para você
          conversar.'
        />

        <Step
          stepNumber={3}
          title='Comece a fazer perguntas'
          description='É simples assim. Experimente o NexChat hoje - realmente leva menos
          de um minuto.'
        />
      </ol>

      <PreviewImage
        src='/file-upload-preview.jpg'
        alt='uploading preview'
        width={1419}
        height={732}
      />
    </div>
  );
}
