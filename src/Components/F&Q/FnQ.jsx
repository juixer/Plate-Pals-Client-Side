import { Accordion } from "flowbite-react";
const FnQ = () => {
  return (
    <div className="py-16">
      <div className="space-y-8">
        <h1 className="text-center text-3xl md:text-5xl font-bold">
          Your Questions Answered
        </h1>
        <Accordion collapseAll className="max-w-4xl mx-auto">
          {/* question */}
          <Accordion.Panel>
            <Accordion.Title className="text-xl font-bold">
              1. How does the platform work?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-lg text-gray-500 dark:text-gray-400">
                Our platform connects food donors with recipients in the
                community. Donors can list surplus food items, and recipients
                can browse and request those items. Volunteers play a crucial
                role in ensuring food reaches those in need.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          {/* question */}
          <Accordion.Panel>
            <Accordion.Title className="text-xl font-bold">
              2. How can I donate surplus food?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-lg text-gray-500 dark:text-gray-400">
                Donating food is easy! Simply create an account, list the
                surplus food items you have, and our system will match you with
                nearby recipients. You can then arrange a convenient drop-off or
                pickup.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          {/* question */}
          <Accordion.Panel>
            <Accordion.Title className="text-xl font-bold">
              3. How do I find food resources near me?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-lg text-gray-500 dark:text-gray-400">
                To find food resources near you, use our search feature. Enter
                your location, and it will display nearby donation centers,
                community kitchens, and food distribution points.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          {/* question */}
          <Accordion.Panel>
            <Accordion.Title className="text-xl font-bold">
              4. Can I volunteer with your organization?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-lg text-gray-500 dark:text-gray-400">
                Yes, we welcome volunteers! We have various volunteer
                opportunities, from food collection and distribution to
                administrative tasks. Please visit our Volunteer page to learn
                more.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          {/* question */}
          <Accordion.Panel>
            <Accordion.Title className="text-xl font-bold">
              5. What types of food are accepted for donations?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-lg text-gray-500 dark:text-gray-400">
                We accept a wide range of surplus food, including non-perishable
                items, fresh produce, canned goods, and more. However, please
                ensure that all food items are safe, within their expiration
                dates, and in good condition.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};
export default FnQ;
