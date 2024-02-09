import { useState } from "react";
import PropTypes from "prop-types";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" rounded-lg mb-4">
      <button
        className="w-full text-left py-2 px-4   text-white hover:bg-purple-950 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="float-right">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="p-4  w-full">
          <p className="text-gray-400 w-4/5  text-wrap">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const pregnancyFAQ = [
    {
      question: "What physical changes can I expect during pregnancy?",
      answer:
        "During pregnancy, you may experience physical changes such as weight gain, hormonal shifts, changes in breast size, stretch marks, and increased fatigue. It's important to embrace these changes as a natural part of the journey to motherhood.",
    },
    {
      question: "How can I manage morning sickness?",
      answer:
        "Morning sickness, which may occur at any time of the day, can be managed by eating small, frequent meals, staying hydrated, getting plenty of rest, and avoiding triggers such as strong odors. If morning sickness becomes severe or persistent, consult with your healthcare provider.",
    },
    {
      question: "What emotions are common during pregnancy?",
      answer:
        "Pregnancy can bring a wide range of emotions, including joy, excitement, anxiety, and occasional mood swings. It's normal to experience fluctuating emotions as you navigate this new chapter in your life. Connecting with other expectant mothers, practicing self-care, and communicating openly with your partner can help manage these emotions.",
    },
    {
      question: "How can I prepare for childbirth?",
      answer:
        "Preparing for childbirth involves educating yourself about the process of labor and delivery, attending prenatal classes, creating a birth plan, and discussing your options with your healthcare provider. It's also important to take care of your physical and emotional well-being leading up to the birth of your baby.",
    },
    {
      question: "What should I include in my prenatal care routine?",
      answer:
        "Your prenatal care routine should include regular check-ups with your healthcare provider, taking prenatal vitamins, eating a balanced diet, staying active with safe exercises, getting enough rest, and avoiding harmful substances such as alcohol and tobacco. Your healthcare provider will monitor your health and the development of your baby throughout your pregnancy.",
    },
  ];

  return (
    <div className="my-10 mt-32 flex flex-col w-full">
      <h2 className="px-32 text-5xl  font-bold text-white mb-8">
        Frequently Asked Questions
      </h2>
      <div className="px-40 text-lg">
        {pregnancyFAQ.map(({ question, answer }) => {
          return (
            <FaqItem
              key={question + answer}
              question={question}
              answer={answer}
            />
          );
        })}
      </div>
    </div>
  );
};

FaqItem.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

export default FAQ;
