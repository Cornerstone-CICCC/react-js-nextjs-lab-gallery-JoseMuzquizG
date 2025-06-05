import Link from "next/link"
const Header = () => {
  return (
    <header className="py-6 px-10 mb-6 flex justify-between bg-blue-200">
      <div className="text-2xl">Developers' Gallery</div>
      <nav>
        <menu className="flex gap-6 *:px-3 *:py-2 *:rounded-lg *:hover:bg-blue-100 *:ease-in-out *:duration-250">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
        </menu>
      </nav>
    </header>
  )
}

export default Header