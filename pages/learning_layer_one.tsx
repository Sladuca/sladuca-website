import Wrapper from '../components/wrapper';

export default function LearningLayerOne() {
  return (
    <Wrapper>
      <div className="grid grid-cols-1 gap-4 py-16">
        <div className="flex justify-center py-8 text-3xl lg:font-thin lg:text-6xl">
          <h1>Learning Layer One</h1>
        </div>
        <div className="flex justify-center">
          <img src="/monogram.svg" className="h-32"/>
        </div>
        <div className="flex justify-center">
          <div className="max-w-sm overflow-hidden md:max-w-lg lg:max-w-3xl">
            <div className="grid grid-cols-1 gap-2 px-6 py-4">
              <p>
                In mid-late spring of 2020, I started really getting involved in the blockchain industry, including participating in hackathons, tinkering with smart contracts, and spending an exhorbitant amount of time trying to figure out how to design economic games. Now I'm beginning to become more interested in layer one technology, but unfortunately I have absolutely no experience with distributed systems, cryptography, or protocol design. But waiting until the fall and wasting a lot of time doing unnecessary work for CMU's distributed systems course isn't exactly the most efficient use of my time. So I decided I would instead try to teach myself with very specific goals in mind.
              </p>
              <p>
                My interest is specifically in distributed ledgers, and it takes a very <em>entrepreneurial</em> perspective. By this, I mean that I'm learning with the intent to be able to work at a layer one blockchain startup or start my own. In the case where I'm joining one, I'd need to be able to be productive with the languages, development patterns, and tech stacks they use. 
                In the case where I'm starting my own company, I can use whatever languages, development patterns, and tech stacks that I want. Taking this into account, I want to focus on the following goals:
              </p>
              <ul className="py-4 list-disc list-inside">
                <li className="py-2">Build MVP's that work and doing so quickly. Favor crates, tools, and code patterns that minimize cognitive load, and leave nitty-gritty details, optimization, and analysis to friends who are way smarter than I am.</li>
                <li className="py-2">Be fluent in Rust and commonly-utilized crates like tokio, actix, rayon, serde, etc.</li>
                <li className="py-2">Have enough understanding of protocols to explain them to someone else and make very crude implementations of them, not to design them. Again, leave that for the people who are way smarter than I am.</li>
                <li className="py-2">Understand all of the most commonly used cryptographic primitives and schemes used in blockchains enough to know when/how to use them when building products.</li>
              </ul>
              <p>
                Goals established, I've decided to write a series of short blogs as I carry out the process of meeting them. I hope they serve two partiuclar purposes:
              </p>
              <ul className="py-4 list-disc list-inside">
                <li className="py-2">Provide useful content and structure to anyone wishing to do a similar learning project</li>
                <li className="py-2">Enhance my own learning process (feynman technique)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
