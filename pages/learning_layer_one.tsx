import Wrapper from '../components/wrapper';

export default function LearningLayerOne() {
  return (
    <Wrapper>
      <div className="grid grid-cols-1 gap-4 py-16">
        <div className="flex justify-center py-8 text-3xl lg:font-thin lg:text-6xl">
          <h1>Learning Layer One</h1>
        </div>
        <div className="flex justify-center">
          <object data="/monogram.svg" className="h-32" type="image/svg+xml">
            <img src="/monogram.svg"/>
          </object>
        </div>
        <div className="flex justify-center">
          <div className="max-w-sm overflow-hidden md:max-w-lg lg:max-w-3xl">
            <div className="grid grid-cols-1 gap-2 px-6 py-4">
              <p>
                During the summer of 2020 I decided I would try to learn the distributed systems and cryptography beind layer one blockchain technology, focusing on 
                being able to work at a layer one blockchain startup or start my own (if you're curious why, read this). In the case where I'm joining one, I'd need to be able to be productive with the languages, development 
                patterns, and tech stacks they use. In the case where I'm starting my own company, I can use whatever languages, development patterns, and tech stacks that I want. Taking 
                this into account, I want to focus on the following goals:
              </p>
              <ul>
                <li>Build MVP's that work and doing so quickly. Favor crates, tools, and code patterns that minimize cognitive load, and leave nitty-gritty details, optimization, and analysis to friends who are way smarter than I am.</li>
                <li>Focus primarily on consensus and consensus-related cryptography/economics.</li>
                <li>Be fluent in Rust and commonly-utilized crates like tokio, actix, rayon, serde, etc.</li>
                <li>Understand the current "state of the art" in layer one tech</li>
              </ul>
              <p>
                Goals established, I've decided to write a series of short blogs as I carry out the process of meeting them. I hope they serve two partiuclar purposes:
              </p>
              <ul>
                <li>Provide useful content and structure to anyone wishing to do a similar learning project</li>
                <li>Enhance my own learning process (feynman technique)</li>
              </ul>
              <div className="flex justify-center py-8 text-3xl lg:font-thin lg:text-6xl">
                <h2>The Plan (WIP)</h2>
              </div>
              <p>
                The simplest way for me to prioritize actually building layer one technology, is to be direct about it. However, I can't just jump straight into 
                implementing something crazy like a sharded delegated-proof-of-stake chain using verifiable delay functions and expect to accomplish anything. At the same 
                time, I don't want to waste my time re-learning how the internet works. To keep that balance while maintaining directness towards building layer one tech, 
                I'm segmenting the learning process into sub-goals, each to implement / understand important primitives that go into layer one protocols.
              </p>
              <div className="py-8">
                <h6>Raft - Non-Byzantine Distributed Consensus:</h6>
                <h6>PoW Bitcoin clone - Nakamoto Consensus:</h6>
                <h6>PoA Tendermint - (Partially) Synchronous BFT Consensus:</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
