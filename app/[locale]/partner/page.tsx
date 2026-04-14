import { setRequestLocale } from "next-intl/server";
import { PageStub } from "@/components/PageStub";

export default function PartnerPage({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  return (
    <PageStub
      title="Become an authorised partner"
      subtitle="Partner programme + inquiry form — in progress."
    />
  );
}
