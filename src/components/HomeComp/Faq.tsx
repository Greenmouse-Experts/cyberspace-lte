import FaqItem from "./FaqItem";

function Faq() {
  return (
    <section className="bg-[#F5FBFE] mx-0 py-20 mt-32 2xl:px-36 md:px-24">
      <h4 className="text-black text-center font-semibold mb-20">
      Frequently Asked Questions
      </h4>
      <FaqItem
        open={true}
        title="How do I pay for the Cyberspace Superfast modem?"
        answer="You can determine the number of shares you hold by adding up all your share certificates and holdings in CSCS, referring to your recent dividend warrant, or by contacting."
      />
      <FaqItem
        open={false}
        title="How do I pay for the Cyberspace Superfast modem?"
        answer="You can determine the number of shares you hold by adding up all your share certificates and holdings in CSCS, referring to your recent dividend warrant, or by contacting."
      />
      <FaqItem
        open={false}
        title="How do I pay for the Cyberspace Superfast modem?"
        answer="You can determine the number of shares you hold by adding up all your share certificates and holdings in CSCS, referring to your recent dividend warrant, or by contacting."
      />
      <FaqItem
        open={false}
        title="How do I pay for the Cyberspace Superfast modem?"
        answer="You can determine the number of shares you hold by adding up all your share certificates and holdings in CSCS, referring to your recent dividend warrant, or by contacting."
      />
      <FaqItem
        open={false}
        title="How do I pay for the Cyberspace Superfast modem?"
        answer="You can determine the number of shares you hold by adding up all your share certificates and holdings in CSCS, referring to your recent dividend warrant, or by contacting."
      />
      <section>
        <div className="text-center mt-16">
          <button className="border bg-bluePrimary px-12 py-5 text-white rounded-[50px]">
            Read More {">"}
          </button>
        </div>
      </section>

    </section>
  );
}

export default Faq;
