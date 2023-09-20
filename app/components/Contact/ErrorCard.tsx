import { useEffect } from 'react'

interface Props {
  submitStatus: string
  setSubmitStatus?: (e: string) => void
}

export default function ErrorCard({ submitStatus, setSubmitStatus }: Props) {
  useEffect(() => {
    if (submitStatus === 'ERROR') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [submitStatus])

  function closeErrorCard() {
    if(setSubmitStatus) {
      setSubmitStatus('')
    }
  }

  return (
    <div
      className={`h-screen w-full  ${
        submitStatus === 'ERROR' ? 'flex' : 'hidden'
      } fixed top-0 z-50 flex items-center justify-center bg-[#ffffff1c] p-1 backdrop-blur-sm`}
    >
      <div className="flex w-full max-w-[320px] flex-col items-center space-y-6 rounded-2xl bg-color5 p-8  shadow-3xl">
        <div className="mb-4 h-20 w-20 bg-[url('/assets/error.svg')] bg-cover bg-center bg-no-repeat "></div>
        <span className="text-center font-sans text-2xl font-semibold text-white">
          O ENVIO FALHOU!
        </span>
        <span className="text-center font-sans text-slate-300">
          Ocorreu algum erro ao enviar a mensagem. Por favor, tente novamente.
        </span>
        <button
          onClick={closeErrorCard}
          className="w-full bg-[#fa5252] p-2 font-bold text-white hover:bg-[#bf3f3f]"
        >
          OK
        </button>
      </div>
    </div>
  )
}
