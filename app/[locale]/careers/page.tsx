import { setRequestLocale } from "next-intl/server";
import { PageStub } from "@/components/PageStub";

export default function CareersPage({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  return (
    <PageStub
      title="Join the team that grows F&B businesses"
      subtitle="Open roles + application form — in progress."
    />
  );
}
