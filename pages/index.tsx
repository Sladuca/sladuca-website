import Head from 'next/head';

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="flex justify-center py-8">
        <h1>Sebastien La Duca</h1>
      </div>
      <div className="flex justify-center">
        <img src="/monogram.svg" className="h-32"/>
      </div>
      <div className="flex justify-center">
        <div className="max-w-sm overflow-hidden">
          <div className="grid grid-cols-1 gap-2 px-6 py-4">
            <p>
              Hi! My name is Sebastien.
            </p>
            <p>
              I'm a computer engineering student, blockchain evangelist, armchair philosopher, and budding entrepreneur on a mission to build a future where everyone can make a living by being themseleves.
            </p>
            <p>
              I'm using this website primarily as a place for me to share what I'm doing, what I'm learning, and what I'm thinking about with anyone who wishes to read.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
