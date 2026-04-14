import { setRequestLocale } from "next-intl/server";
import { PageStub } from "@/components/PageStub";

export default function SolutionsPage({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  return (
    <PageStub
      title="Real problems. Real solutions."
      subtitle="Case studies and client testimonials — in progress."
    />
  );
}
