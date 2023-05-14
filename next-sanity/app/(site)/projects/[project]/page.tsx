import { getProject } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import Image from "next/image"

type Props = {
  params: { project: string }
}

export default async function Project({
  params,
}: Props) {
  const slug = params.project

  const project = await getProject(slug)

  return (
    <div className="mr-5 ml-5">
      <header className="flex item-center justify-between items-center">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow">
          {project.name}
        </h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferre"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-orange-500 hover:text-orange-100 transition"
        >
          View Project
        </a>
      </header>

      {/* content goes here */}

      <div className="text-lg text-grey-700 mt-5">
        {<PortableText value={project.content} />}
      </div>

      {/* image goes here*/}
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      />
    </div>
  )
}
