'use client'
import { BsLinkedin } from 'react-icons/bs'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import ConfirmCard from './ConfirmCard'
import ErrorCard from './ErrorCard'
import SubmitButton from './SubmitButton'

export default function Form() {
  const [submitStatus, setSubmitStatus] = useState('')

  const contectFormSchema = z.object({
    name: z
      .string()
      .nonempty('Insira seu nome')
      .transform((name) => {
        return name
          .trim()
          .split(' ')
          .map((word) => {
            return word[0].toLocaleUpperCase().concat(word.substring(1))
          })
          .join(' ')
      }),
    email: z
      .string()
      .nonempty('Insira seu e-mail')
      .email('Esse e-mail não é válido')
      .toLowerCase(),
    message: z.string().nonempty('Preencha o campo de mensagem'),
  })

  type contactFormData = z.infer<typeof contectFormSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<contactFormData>({
    resolver: zodResolver(contectFormSchema),
  })

  function submitContact(data: any) {
    const templateParams = {
      from_name: data.name,
      message: data.message,
      email: data.email,
    }

    setSubmitStatus('LOADING')

    emailjs
      .send(
        'service_n8jocgl',
        'template_z14w91k',
        templateParams,
        'T5Jfo1MOuJ9yGkVki',
      )
      /* eslint n/handle-callback-err: "error" */
      .then((reponse) => {
        setSubmitStatus('OK')
      })
      /* eslint n/handle-callback-err: "error" */
      .catch((error) => {
        setSubmitStatus('ERROR')
      })
  }

  return (
    <div
      id="contact"
      className="flex h-full w-full flex-col justify-center gap-12 bg-color3 pb-16 pl-4 pr-4 pt-16 display1:pb-12 display1:pt-12 "
    >
      <span className="block text-center font-nunito text-4xl font-bold text-gray-200 display1:text-3xl">
        Vamos trabalhar juntos 🚀
      </span>
      <div className="m-auto flex h-max w-full max-w-[500px] flex-col gap-4 rounded-[15px] border-[1px] border-gray-600 bg-color4 p-8 display1:pl-5 display1:pr-5">
        <span className="mb-4 font-nunito text-2xl font-bold text-gray-200">
          Entrar em contato
        </span>
        <form
          onSubmit={handleSubmit(submitContact)}
          className="flex w-full flex-col gap-4 "
        >
          <label
            htmlFor="name"
            className="w-full font-nunito text-lg text-gray-200"
          >
            Nome
          </label>
          <input
            {...register('name')}
            className=" w-full border-b-2 border-gray-400 bg-transparent pb-2 font-nunito text-base text-gray-300 outline-none placeholder:text-gray-300 focus:border-color2 "
            type="text"
            placeholder="Seu nome"
            autoComplete="off"
          />
          {errors.email && (
            <span className="font-nunito text-sm text-red-500">
              {errors.name?.message}
            </span>
          )}
          <label
            htmlFor="email"
            className="relative w-full font-nunito text-lg text-gray-200"
          >
            E-mail
          </label>
          <input
            {...register('email')}
            className="w-full border-b-2 border-gray-400 bg-transparent pb-2 font-nunito text-base text-gray-300 outline-none placeholder:text-gray-300 focus:border-color2 "
            type="text"
            placeholder="Insira seu e-mail para contato"
            autoComplete="off"
          />
          {errors.email && (
            <span className="font-nunito text-sm text-red-500">
              {errors.email.message}
            </span>
          )}
          <label
            htmlFor="message"
            className="w-full font-nunito text-lg text-gray-200"
          >
            Mensagem
          </label>
          {errors.email && (
            <span className="font-nunito text-sm text-red-500">
              {errors.message?.message}
            </span>
          )}
          <textarea
            id="text-area"
            {...register('message')}
            className="placeholder:text-md  h-[200px] w-full overflow-auto rounded-md border-2 border-b-2 border-gray-400 bg-transparent pl-3  pt-3 font-nunito text-base text-gray-300 outline-none placeholder:text-gray-300 focus:border-color2"
            placeholder="Deixe sua mensagem"
          />
          <SubmitButton submitStatus={submitStatus} />
        </form>
        <a
          href="https://www.linkedin.com/in/matteus-gustavo/"
          target="_blank"
          rel="noopener noreferrer"
          className="group m-auto flex h-max w-max cursor-pointer items-center space-x-2"
        >
          <BsLinkedin
            size={20}
            className="text-gray-200 group-hover:text-color2"
          />
          <span className="font-base cursor-pointer font-nunito text-base text-gray-200 group-hover:text-color2">
            Linkedin
          </span>
        </a>
      </div>
      <ConfirmCard
        setSubmitStatus={setSubmitStatus}
        submitStatus={submitStatus}
      />
      <ErrorCard
        setSubmitStatus={setSubmitStatus}
        submitStatus={submitStatus}
      />
    </div>
  )
}
