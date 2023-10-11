import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <MaxWidthWrapper 
        className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
        <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
          <p className='text-sm font-semibold text-gray-700'>NexChat</p>
        </div>
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          Converse com os seus <span className='text-blue-600'>documentos</span> em segundos.
        </h1>
        <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
          NexChat possiblita que você tenha conversações com qualquer documento PDF. Faça o upload do seu arquivo e começe a fazer perguntas em seguida.
        </p>

        <Link className={buttonVariants({
          size: "lg",
          className: "mt-5"
        })} href="/dashboard" target='_blank'>
          Iniciar <ArrowRight className='ml-2 h-5 w-5'/>
        </Link>
      </MaxWidthWrapper>

      <div>
        <div className='relative isolate'>
          <div 
            aria-hidden='true' 
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
              <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
            </div>

            <div>
            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
              <div className='mt-16 flow-root sm:mt-24'>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <Image
                    src='/dashboard-preview.jpg'
                    alt='product preview'
                    width={1364}
                    height={866}
                    quality={100}
                    className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
            <div className='mb-12 px-6 lg:px-8'>
              <div className='mx-auto max-w-2xl sm:text-center'>
                <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
                  Começe a conversação em segundos.
                </h2>
                <p className='mt-4 text-lg text-gray-600'>
                Conversar com seus arquivos PDF nunca foi tão fácil
                  mais fácil do que com NexChat.
                </p>
              </div>
            </div>

            <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
              <li className='md:flex-1'>
                <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                  <span className='text-sm font-medium text-blue-600'>
                    Etapa 1
                  </span>
                  <span className='text-xl font-semibold'>
                    Registre-se e crie uma conta
                  </span>
                  <span className='mt-2 text-zinc-700'>
                  Começando com um plano gratuito ou
                    escolha o nosso{' '}
                    <Link
                      href='/pricing'
                      className='text-blue-700 underline underline-offset-2'>
                      pro plan
                    </Link>
                    .
                  </span>
                </div>
              </li>
              <li className='md:flex-1'>
                <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                  <span className='text-sm font-medium text-blue-600'>
                    Etapa 2
                  </span>
                  <span className='text-xl font-semibold'>
                    Carregue seu arquivo PDF
                  </span>
                  <span className='mt-2 text-zinc-700'>
                    Processaremos seu arquivo e o tornaremos
                    pronto para você conversar.
                  </span>
                </div>
              </li>
              <li className='md:flex-1'>
                <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                  <span className='text-sm font-medium text-blue-600'>
                    Etapa 3
                  </span>
                  <span className='text-xl font-semibold'>
                    Comece a fazer perguntas
                  </span>
                  <span className='mt-2 text-zinc-700'>
                    É simples assim. Experimente o NexChat hoje - realmente leva menos de um minuto.
                  </span>
                </div>
              </li>
            </ol>

            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
              <div className='mt-16 flow-root sm:mt-24'>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <Image
                    src='/file-upload-preview.jpg'
                    alt='uploading preview'
                    width={1419}
                    height={732}
                    quality={100}
                    className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
