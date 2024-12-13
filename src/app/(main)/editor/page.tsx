import { Metadata } from "next";
import ResumeEditor from "./ResumeEditor";

export const metadata: Metadata = {
  title: "Craft Your Resume",
};
export default function Page() {
  return <ResumeEditor />;
}