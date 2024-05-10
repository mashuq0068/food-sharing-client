import { useState } from "react";


const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    if (openAccordion === index) {
     
      setOpenAccordion(null);
    } else {
     
      setOpenAccordion(index);
    }
  };

  const faqItems = [
    {
      question: 'How does this website work?',
      answer:
        'Provide a brief overview of how users can share their surplus food and how individuals in need can access it. Explain the key steps in the process.',
    },
    {
      question: 'Is it safe to share food on this platform?',
      answer:
        'Assure users of the safety measures in place, such as food safety guidelines, user reviews, and verification processes, to ensure that shared food is safe to consume.',
    },
    {
      question: 'Who can use this website?',
      answer:
        'Describe the target audience and eligibility criteria, if any. Let users know if it is open to individuals, organizations, or specific communities.'
    },
    {
      question: 'How can I donate food?',
      answer:
        'Provide clear instructions on how users can create listings, including adding details about the food they wish to share, specifying pickup or delivery options, and setting availability times.',
    },
    {
      question: 'How can I request food?',
      answer:
        'Explain the process for those in need to browse and request available food. Describe how requests are processed and how users can communicate with food donors. Go to Add food page',
    },
    {
      question: 'Is there a cost to use this service?',
      answer:
        'Clarify if there are any fees associated with using the website, and if there are any optional donation features or premium memberships.',
    },
    {
      question: 'What measures are in place to reduce food waste?',
      answer:
        'Share information on how the platform promotes responsible food sharing, including recommendations for portion sizes, food handling best practices, and collaboration with local food banks or charities.',
    },
  ];
  
  
  

  return (
    <div className="lg:w-[50%] w-[90%] mx-auto mt-[10vh] mb-[15vh] ">
        <h1 className="text-3xl 2xl:text-5xl text-gray-600   text-center text-gradient mb-8 font-bold pt-16 "><span className="text-yellow-500">FAQ</span> from us</h1>
      {faqItems.map((item, index) => (
        <div className={`collapse collapse-plus my-5 drop-shadow-xl shadow-xl  bg-base-200 ${index === openAccordion ? 'open' : ''}`} key={index}>
        
         <input type="radio" name={`my-accordion-${index}`} checked={index === openAccordion} onChange={() => handleAccordionClick(index)} />
        
         <div className="collapse-title  xl:  font-medium" onClick={() => handleAccordionClick(index)}>
            {item.question}
          </div>
         
          <div className="collapse-content  xl:  drop-shadow-xl shadow-xl">
            <p>{item.answer}</p>
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default Faq;
