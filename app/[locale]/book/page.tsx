import { setRequestLocale } from "next-intl/server";
import { PageStub } from "@/components/PageStub";

export default function BookPage({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  return (
    <PageStub
      title="Book your free consultation"
      subtitle="30-minute session · No commitment · Booking form in progress."
    />
  );
}
