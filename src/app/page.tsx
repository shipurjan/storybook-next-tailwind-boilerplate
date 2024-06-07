import { Button } from "@/stories/Button";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col p-4">
      <div>
        <Button variants={{ theme: "warning", size: "sm" }}>Warning</Button>
      </div>
      <div>
        This is the app home page. To run storybook for designing components,
        run <code>pnpm storybook</code>.
      </div>
    </main>
  );
}
