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
                being able to work at a layer one blockchain startup or start my own. In the case where I'm joining one, I'd need to be able to be productive with the languages, development 
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
                <h2>The Plan</h2>
              </div>
              <p>
                The simplest way for me to prioritize actually building layer one technology, is to be direct about it. However, I can't just jump straight into 
                implementing something crazy like a sharded delegated-proof-of-stake chain using verifiable delay functions and expect to accomplish anything. At the same 
                time, I don't want to waste my time re-learning how the internet works. To keep that balance while maintaining directness towards building layer one tech, 
                I'm segmenting the learning process into sub-goals, each to implement very barebones versions of progressively more sophistocated distributed consensus protocols. 
                They're ordered in such a way that each uses progressively more sophistocated primitives and concepts. In no way am I intending them to be secure, production-worthy,
                or even testnet-worthy. In real life, I'd be just one member of a team filled with people who are smarter than I am.
              </p>
              <div className="py-8">
                <h6>Raft - Non-Byzantine Distributed Consensus:</h6>
                <ul>
                  <li>first principles</li>
                  <li>network models</li>
                  <li>2PC</li>
                  <li>Paxos</li>
                  <li>highly concurrent Rust with Tokio</li>
                  <li>gRPC with tonic and serde</li>
                </ul>
                <h6>PoW Bitcoin clone - Nakamoto Consensus:</h6>
                <ul>
                  <li>Byzantine Generals Problem</li>
                  <li>ECDSA and Schnorr Signatures</li>
                  <li>MPT / State Proofs</li>
                  <li>Block reward mechanisms</li>
                  <li>P2P Networking Concepts</li>
                  <li>rust-libp2p</li>
                  <li>Testing p2p distributed systems</li>
                </ul>
                <h6>PoA Tendermint - (Partially) Synchronous BFT Consensus:</h6>
                <ul>
                  <li>Partial Synchrony</li>
                  <li>PoS In Practice</li>
                  <li>Economic design and analysis with cadCAD</li>
                  <li>PBFT</li>
                  <li>HotStuff / LibraBFT</li>
                  <li>BLS Signatures</li>
                </ul>
                <h6>"State of the art" (understand, don't implement):</h6>
                <ul>
                  <li>Erasure Codes</li>
                  <li>Verifiable Random Functions</li>
                  <li>Requirements for a good sharding scheme</li>
                  <li>Cosmos Network (IBC)</li>
                  <li>Polkadot</li>
                  <li>Ethereum 2.0</li>
                  <li>Harmony One</li>
                  <li>NEAR Protocol</li>
                  <li>Solana</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
