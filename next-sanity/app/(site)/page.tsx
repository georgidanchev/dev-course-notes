import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image"
import Link from "next/link"

export default async function Home() {
  const projects = await getProjects()

  return (
    <div className="mr-5 ml-5">
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          GEORGi
        </span>
        !
      </h1>

      <p className="mt-3 text-xl text-grey-600">
        Aloha everyone! Checkout my project!
      </p>

      <h2 className="mt-24 font-bold-text-gray-700 text-3xl">
        My Projects
      </h2>

      <div className="mt-5 grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          return (
            <Link
              href={`/projects/${project.slug}`}
              key={project._id}
              className="border-2 border-gray-500 rounded-lg p-3 hover:scale-105 hover:border-blue-500 transition"
            >
              {project.image && (
                <Image
                  className="object-cover rounded-lg border border-grey-500"
                  src={project.image}
                  alt={project.name}
                  width={750}
                  height={300}
                />
              )}

              <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                {project.name}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
