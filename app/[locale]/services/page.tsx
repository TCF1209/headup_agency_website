import { setRequestLocale } from "next-intl/server";
import { PageStub } from "@/components/PageStub";

export default function ServicesPage({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  return (
    <PageStub
      title="Services"
      subtitle="GrabFood & Foodpanda marketing + POS solutions — detailed page in progress."
    />
  );
}
