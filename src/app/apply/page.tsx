import { redirect } from "next/navigation";
import { getBookingUrl } from "@/components/booking-link";

export default function ApplyPage() {
  redirect(getBookingUrl());
}
