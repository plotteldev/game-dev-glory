import { redirect } from "next/navigation";
import { getRoadmapSessionUrl } from "@/components/booking-link";

export default function BookPage() {
  redirect(getRoadmapSessionUrl());
}
