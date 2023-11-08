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
      question: 'What types of corporate events does your company manage?',
      answer:
        'Our company specializes in managing a wide range of corporate events, including conferences, seminars, product launches, team-building activities, and more. We tailor our services to meet the unique needs of each event.',
    },
    {
      question: 'How can I request a quote for corporate event management services?',
      answer:
        'Requesting a quote is easy! Simply visit our Contact Us page and fill out the inquiry form. We will get back to you promptly with a customized quote based on your event requirements.',
    },
    {
      question: 'What sets your corporate event management services apart?',
      answer:
        'What sets us apart is our attention to detail, creativity, and commitment to delivering memorable experiences. We work closely with our clients to ensure that every aspect of their event is executed flawlessly.',
    },
    {
      question: 'Can you handle both small and large-scale corporate events?',
      answer:
        'Yes, we have experience in managing events of all sizes. Whether you are planning an intimate corporate gathering or a large-scale conference, our team has the expertise and resources to make it a success.',
    },
    {
      question: 'Do you provide event planning and coordination services?',
      answer:
        'Absolutely! Our services encompass event planning, coordination, logistics, and execution. We take care of everything from venue selection and catering to audiovisual setups and entertainment, allowing you to focus on your guests and objectives.',
    },
    {
      question: 'What is the typical timeline for planning a corporate event with your company?',
      answer:
        'The timeline can vary depending on the complexity of the event. However, we recommend contacting us at least six months in advance for large-scale events. For smaller events, we can often accommodate shorter lead times.',
    },
    {
      question: 'How can I get in touch with your team to discuss my corporate event needs?',
      answer:
        'Getting in touch is easy! You can reach us through our Contact page, where you can submit your details and event requirements. Alternatively, you can give us a call, and one of our event specialists will be happy to assist you.',
    },
  ];
  
  
  

  return (
    <div className="lg:w-[50%] w-[90%] mx-auto mb-[10vh] ">
        <h1 className="text-3xl 2xl:text-5xl text-gray-600   text-center text-gradient mb-8 font-bold pt-16 "><span className="text-teal-500">FAQ</span> from us</h1>
      {faqItems.map((item, index) => (
        <div className={`collapse collapse-plus my-5 drop-shadow-xl shadow-md shadow-teal-400 bg-base-200 ${index === openAccordion ? 'open' : ''}`} key={index}>
        
         <input type="radio" name={`my-accordion-${index}`} checked={index === openAccordion} onChange={() => handleAccordionClick(index)} />
        
         <div className="collapse-title 2xl:text-xl   font-medium" onClick={() => handleAccordionClick(index)}>
            {item.question}
          </div>
         
          <div className="collapse-content 2xl:text-xl  drop-shadow-xl shadow-xl">
            <p>{item.answer}</p>
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default Faq;
