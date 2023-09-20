import { BsSend } from 'react-icons/bs'
import Loading from './Loading'

interface submitButtonProps {
  submitStatus: string
}

export default function SubmitButton({ submitStatus }: submitButtonProps) {
  return (
    <button
      type="submit"
      className="text-md group  relative w-full max-w-[500px] rounded-md bg-color1 pb-4 pt-4 font-sans font-bold text-white"
    >
      <div className="absolute top-0 h-full w-0 rounded-md bg-color2 transition-all duration-300 group-hover:w-full"></div>
      <div className="relative z-20 m-auto flex h-max w-max flex-row-reverse items-center">
        {submitStatus === 'LOADING' ? null : <BsSend size={18} />}
        <span className="ml-2 mr-2 font-sans text-sm text-white">
          {submitStatus === 'LOADING' ? <Loading /> : 'ENVIAR MENSAGEM'}
        </span>
      </div>
    </button>
  )
}
