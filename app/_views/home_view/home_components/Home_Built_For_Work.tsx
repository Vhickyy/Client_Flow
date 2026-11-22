import App_Text from "@/app/_components/app_ui/App_Text";
import { built_cards, plans } from "../home_data";

const Home_Built_For_Work = () => {
  return (
    <>
      <section className="py-32 bg-sec-bg">
        <div className="containerclass">
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
                opportunities get missed and follow-ups become difficult to
                manage. ClientFlow gives your business one organized place to
                manage every customer relationship.
              </App_Text>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6 mt-12">
            {built_cards.map((card, index) => (
              <div
                className="bg-white border p-6 rounded-xl grid gap-3"
                key={index}
              >
                <App_Text variant="subheading">{card.title}</App_Text>
                <App_Text>{card.description}</App_Text>
                <div className="flex gap-2 items-center border-t pt-3">
                  <App_Text
                    variant="badge"
                    className="text-primary text-[12px]"
                  >
                    {card.tags[0]}
                  </App_Text>
                  <span className="bg-primary h-1 w-1 inline rounded-full"></span>
                  <App_Text
                    variant="badge"
                    className="text-primary text-[12px]"
                  >
                    {card.tags[1]}
                  </App_Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="flex gap-4 w-[75%] mx-auto py-32">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="p-6 border bg-white flex-1 rounded-xl grid gap-4"
            >
              <div className="flex items-end">
                <App_Text variant="heading">{plan.price}</App_Text>
                <App_Text>/ {plan.billing}</App_Text>
              </div>
              <App_Text>{plan.description}</App_Text>
              <div>
                {plan.features.map((feat, index) => (
                  <div className="" key={index}>
                    <App_Text>{feat}</App_Text>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="containerclass bg-primary-dark p-12 rounded-xl flex justify-between mb-32">
        <div className="grid gap-6 w-[50%]">
          <App_Text
            variant="badge"
            className="bg-grayish w-fit py-2 px-4 rounded-full"
          >
            LESS CHAOS. MORE CUSTOMER CONNECTIONS.
          </App_Text>
          <div className="grid gap-4">
            <App_Text variant="heading" className="text-white">
              Your customers deserve more than scattered spreadsheets.
            </App_Text>
            <App_Text>
              When customer information is spread across different tools,
              opportunities get missed and follow-ups become difficult to
              manage. ClientFlow gives your business one organized place to
              manage every customer relationship.
            </App_Text>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default Home_Built_For_Work;
