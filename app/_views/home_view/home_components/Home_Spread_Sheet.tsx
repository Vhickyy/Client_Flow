import App_Text from "@/app/_components/app_ui/App_Text";

const Home_Spread_Sheet = () => {
  const cards = [
    {
      title: "Scattered customer information",
      problem:
        "Customer details are scattered across spreadsheets, emails, conversations, and notes.",
      solution:
        "Keep contact information, customer notes, communication history, and related activities together in one place.",
    },
    {
      title: "Lost sales opportunities",
      problem:
        "You cannot easily tell which leads need attention or where potential deals stand.",
      solution:
        "Organize leads and move opportunities through a clear sales pipeline with transparent stage visibility.",
    },
    {
      title: "Forgotten follow-ups",
      problem:
        "Important calls, meetings, and customer follow-ups get forgotten when everything is managed manually.",
      solution:
        "Create tasks, schedule activities, assign responsibilities, and keep track of what needs attention.",
    },
  ];
  return (
    <section className="py-32 containerclass">
      <div className="text-center grid gap-6">
        <App_Text
          variant="badge"
          className="bg-grayish w-fit py-2 px-4 mx-auto rounded-full"
        >
          LESS CHAOS. MORE CUSTOMER CONNECTIONS.
        </App_Text>
        <div className="w-[60%] mx-auto text-center grid gap-4">
          <App_Text variant="heading">
            Your customers deserve more than scattered spreadsheets.
          </App_Text>
          <App_Text>
            When customer information is spread across different tools,
            opportunities get missed and follow-ups become difficult to manage.
            ClientFlow gives your business one organized place to manage every
            customer relationship.
          </App_Text>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-16">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border bg-white grid gap-4"
          >
            <App_Text variant="subheading">{card.title}</App_Text>
            <div className="bg-red-300 p-2">
              <App_Text variant="cardTitle">The Problem</App_Text>
              <App_Text variant="cardTitle">{card.problem}</App_Text>
            </div>
            <div className="bg-red-300 p-2">
              <App_Text variant="cardTitle">The Solution</App_Text>
              <App_Text variant="cardTitle">{card.solution}</App_Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home_Spread_Sheet;
