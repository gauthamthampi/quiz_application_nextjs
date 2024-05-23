import Link from "next/link"

const Home = () => {
  return (
    <main>
      <div className="container">
      <h1>Quiz App</h1>
        <Link href='/quiz' >
        <button>Start Quiz</button>
        </Link>
      </div>
    </main>
  )
}

export default Home
