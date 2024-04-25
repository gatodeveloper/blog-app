import Link from "next/link"

const HeaderComponent = () => {
  return <>
    <section className="border-b">
      <header className="container mx-auto p-4">
        <Link href="/" className="font-bold">Blog Site</Link>
      </header>
    </section>
  </>
}

export default HeaderComponent