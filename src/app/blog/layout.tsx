import FooterComponent from "@/components/Footer/footer.component";
import HeaderComponent from "@/components/Header/header.component";

export default function BlogLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <section className="main-pagebg-black flex flex-col min-h-[100vh]">
      <HeaderComponent />
      <main className="container mx-auto p-2 flex-1">
        {children}
      </main>
      <FooterComponent />
    </section>
  );
}
  