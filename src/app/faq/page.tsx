import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import FaqGenerator from '@/components/faq-generator';

export default function FaqPage() {
  return (
    <>
      <Header title="Frequently Asked Questions" />
      <main className="flex-1 py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight font-headline">
              AI-Powered FAQ
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Have a question? Our AI can help. Click the button below to
              generate answers to common questions based on our website's
              content.
            </p>
          </div>
          <FaqGenerator />
        </div>
      </main>
      <Footer />
    </>
  );
}
