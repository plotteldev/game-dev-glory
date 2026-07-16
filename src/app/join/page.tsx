import { redirect } from "next/navigation";
import { getCoachingUrl } from "@/components/booking-link";

export default function JoinPage() {
  redirect(getCoachingUrl());
}
