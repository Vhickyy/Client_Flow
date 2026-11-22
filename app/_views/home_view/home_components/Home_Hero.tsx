import App_Text from "@/app/_components/app_ui/App_Text";
import Image from "next/image";

const Home_Hero = () => {
  return (
    <section className="containerclass flex justify-between items-center py-20 gap-6">
      <div className="w-[45%] grid gap-6">
        <div className="bg-grayish border border-[#D8C4A2] py-1 px-4 rounded-full w-fit">
          <App_Text className="" variant="badge">
            THE CRM THAT KEEPS YOUR BUSINESS MOVING
          </App_Text>
        </div>
        <div className="grid gap-4">
          <App_Text className="" variant="hero">
            Turn more conversations into customers.
          </App_Text>
          <App_Text className="">
            Keep your contacts organized, manage every lead, track your sales
            pipeline, and stay on top of customer follow-ups — all from one
            simple workspace.
          </App_Text>
        </div>
      </div>
      <div className="w-[53%]">
        <Image src="/images/Dash.png" alt="hero" width={800} height={800} />
      </div>
    </section>
  );
};

export default Home_Hero;
