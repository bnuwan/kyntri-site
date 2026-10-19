import {
  Users,
  Receipt,
  ScanLine,
  Bell,
  CreditCard,
  Boxes,
} from "lucide-react";

const features = [
  {
    icon: Users,
    badge: "Engagement",
    title: "Elevate Customer Experience",
    description:
      "Build lasting relationships with automated updates, loyalty rewards and personalized customer engagement.",
    points: [
      "WhatsApp Notifications",
      "Online Appointments",
      "Digital Inspections",
      "Customer Loyalty",
    ],
  },
  {
    icon: Receipt,
    badge: "Billing",
    title: "Quick Billing & Print Receipts",
    description:
      "Generate invoices instantly with multiple payment options and printable or digital receipts.",
    points: [
      "Fast Barcode Billing",
      "Cash & Card Payments",
      "Receipt Printing",
      "Instant Receipt Generation",
    ],
  },
  {
    icon: ScanLine,
    badge: "Inventory",
    title: "Barcode Scanning Facility",
    description:
      "Built-in barcode scanning keeps inventory accurate while speeding up billing operations.",
    points: [
      "Instant Product Detection",
      "Stock Accuracy",
      "Faster Checkout",
      "Barcode Support",
    ],
  },
  {
    icon: Bell,
    badge: "Automation",
    title: "Smart Notifications",
    description:
      "Automatically notify customers about invoices, deliveries and order status updates.",
    points: [
      "SMS Alerts",
      "WhatsApp",
      "Email Notifications",
      "Custom Templates",
    ],
  },
  {
    icon: CreditCard,
    badge: "Payments",
    title: "Multiple Payment Methods",
    description:
      "Accept cash, card, QR payments and digital wallets with one seamless workflow.",
    points: [
      "Visa / Master",
      "QR Payments",
      "Cash Payments",
      "Online Payments",
    ],
  },
  {
    icon: Boxes,
    badge: "Stock",
    title: "Inventory Management",
    description:
      "Track stock levels, low-stock alerts and supplier management in real time.",
    points: [
      "Low Stock Alerts",
      "Purchase Orders",
      "Supplier Management",
      "Warehouse Tracking",
    ],
  },
];

function MposFeatures() {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-16 lg:py-20">

      {/* Glow */}

      <div className="absolute left-0 top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-20 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-[1450px] px-8">

        <div className="text-center">

          <span className="uppercase tracking-[5px] text-cyan-400 text-sm">

            Features

          </span>

          <h2 className="mt-5 text-5xl font-black text-white">

            Powerful Features For Modern Businesses

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">

            Everything you need to manage billing, inventory,
            customers and reporting from one intelligent platform.

          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <div
                key={index}
                className="
                rounded-3xl
                border
                border-white/10
                bg-[#0B1120]
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-cyan-500/30
                hover:shadow-[0_25px_60px_rgba(34,211,238,.12)]
                "
              >

                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[3px] text-cyan-400">

                  {feature.badge}

                </span>

                <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20">

                  <Icon className="h-8 w-8 text-cyan-400" />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">

                  {feature.title}

                </h3>

                <p className="mt-4 text-gray-400 leading-8">

                  {feature.description}

                </p>

                <div className="mt-8 space-y-4">

                  {feature.points.map((point) => (

                    <div
                      key={point}
                      className="flex items-center gap-3"
                    >

                      <div className="h-2 w-2 rounded-full bg-cyan-400" />

                      <span className="text-gray-300">

                        {point}

                      </span>

                    </div>

                  ))}

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default MposFeatures;
