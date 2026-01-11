import { FAQAccordion } from "./Accordion";

export default {
  title: "Components/FAQAccordion",
  component: FAQAccordion,
  decorators: [
    (Story) => (
      <div className="bg-purple-100 min-h-[100vh] p-10 flex items-start justify-center font-sans">
        <Story />
      </div>
    ),
  ],
};

const mockData = [
  {
    question: "What is Frontend Mentor?",
    answer: "A platform to improve coding skills.",
  },
  { question: "Is it free?", answer: "Yes, there is a free tier." },
];

export const Default = {
  args: { items: mockData, isLoading: false },
};

export const Loading = {
  args: { items: [], isLoading: true },
};
