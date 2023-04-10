import Head from 'next/head'
import Link from 'next/link'
import withoutAuth from '../utils/withoutAuth'

function Home() {

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Head>
        <title>TheProjectX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen p-4 flex flex-col items-center justify-center">
        <h1 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-purple-600">Project</h1>
        <h1 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-600">X</h1>

        {/* <p className="my-12 md:text-2xl md:w-10/12 text-gray-400 text-center">This is the Project X</p>
        <p className="mt-12 md:text-2xl md:w-10/12 text-gray-400 text-center">Made by&nbsp;
          <a href="https://github.com/OnoSaburo940516" target="_blank" className="font-extrabold text-blue-500 cursor-pointer hover:underline">
            @OnoSaburo940516
          </a>
        </p>
        <p className="mb-12 md:text-2xl md:w-10/12 text-gray-400 text-center">Project GitHub Repo&nbsp;
          <a href="https://github.com/OnoSaburo940516/dev-case-app" target="_blank" className="font-extrabold text-blue-500 cursor-pointer hover:underline">
            @develop-mode
          </a>
        </p> */}

        <div className="flex items-center flex-col md:flex-row">
          <button className="btn btn-wide bg-gradient-to-br from-red-500 to-purple-600 rounded-full font-semibold text-xl md:mr-4 text-white border-0">
            <Link href="/auth/register">
              Register Now!
            </Link>
          </button>
          <Link href="/auth">
            <button className="btn btn-wide bg-gradient-to-br from-blue-500 to-green-600 rounded-full font-semibold text-xl my-2 md:ml-4 text-white border-0">
              Login Now!
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default withoutAuth(Home)