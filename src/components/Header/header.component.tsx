import Link from "next/link"

const HeaderComponent = () => {
  return <>
    <section className="border-b">
      <header className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">Blog Site</Link>
        <Link href="/blog/new" className="cursor-pointer font-bold bg-indigo-700 px-6 py-2 hover:bg-indigo-600 rounded-xl text-white">New Article</Link>
      </header>
    </section>
  </>
}

export default HeaderComponent