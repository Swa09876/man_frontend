import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Omkareshwar Dam Project & Hydroelectric Power - River Narmada",
  description: "Learn about the Omkareshwar Dam project, reservoir water levels, floating solar park, and environmental harmony.",
};

export default function DamProjectPage() {
  return (
    <ContentPageTemplate
      title="The Omkareshwar Dam & Hydroelectric Project"
      subtitle="A major multipurpose gravity dam on the Narmada River upstream of Mandhata island, providing clean renewable hydroelectric power and extensive irrigation."
      category="About"
      categoryHref="/about/main-temple"
      keyFacts={[
        { label: "Dam Type", value: "Concrete Gravity Dam", icon: "🏗️" },
        { label: "Installed Capacity", value: "520 MW Hydro Power", icon: "⚡" },
        { label: "Dam Height", value: "33 meters above riverbed", icon: "📏" },
        { label: "Floating Solar", value: "World's Largest Reservoir Array", icon: "☀️" },
      ]}
      sections={[
        {
          title: "About the Omkareshwar Dam Project",
          content:
            "Constructed by NHDC Limited (a joint venture of NHPC and the Government of Madhya Pradesh), the Omkareshwar Dam is situated approximately 1.5 km upstream from the main temple. Commissioned in 2007, the project generates 520 megawatts of clean hydroelectric energy and irrigates over 2.8 lakh hectares of agricultural land across western Madhya Pradesh.",
          bullets: [
            "Regulates seasonal flooding of the sacred river Narmada, safeguarding ancient riverbank shrines and ghats.",
            "Features the pioneering 600 MW Omkareshwar Floating Solar Project on the reservoir surface — one of the largest floating solar arrays in the world.",
            "Water discharge and current levels at downstream pilgrim bathing ghats are continuously monitored and coordinated with Mandir Control Room sirens.",
          ],
        },
        {
          title: "Ghat Water Level Safety Sirens",
          content:
            "Whenever reservoir spillway gates are opened upstream, automated warning sirens sound across all Omkareshwar bathing ghats 30 minutes in advance. Pilgrims must immediately adhere to safety boundaries and avoid deep river currents.",
        },
      ]}
      ctaButton={{
        label: "Contact Control Room 24x7",
        href: "/helpline",
      }}
    />
  );
}
