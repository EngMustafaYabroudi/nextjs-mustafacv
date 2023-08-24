
import Informations from "./components/informations"

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-2xl text-center dark:text-white">
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Mustafa Yabroudi, </span>
           a master's student in artificial intelligence at Damascus University.<br/>
           I have experience in Laravel FrameWork and Symfony FrameWork.
        </span>
      </p>
      <Informations />
    </main>
  )
}
