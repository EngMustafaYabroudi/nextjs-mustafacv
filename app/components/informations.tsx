import Link from "next/link"
export default function Informations() {
   

    return (
        <section className="mt-6 mx-auto max-w-2xl">

            <ul >
                <li><Link href={"/education"}><h2 className="text-2xl font-bold dark:text-blue-300 hover:text-blue-500  active:text-red-500 mb-10">Education</h2></Link></li>
                <li><Link href={"/skills"}><h2 className="text-2xl font-bold dark:text-blue-300 hover:text-blue-500 active:text-red-500 mb-10">Skills</h2></Link></li>
                <li><Link href={"/workexperience"}><h2 className="text-2xl font-bold dark:text-blue-300 hover:text-blue-500  active:text-red-500 mb-10">Work Experience</h2></Link></li>
            </ul>
        </section>
    )
}