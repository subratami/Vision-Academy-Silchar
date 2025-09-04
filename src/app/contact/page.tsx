import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="flex-1 py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight font-headline">
            Get In Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We're here to help. Reach out to us with any questions or for
            more information about our coaching programs.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="text-center p-6">
            <CardContent className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">Our Location</h3>
              <p className="text-muted-foreground">
                2nd Floor, Kusum Mansion, Hospital Road
                <br />
                Silchar-1, Barak Valley
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">Call Us</h3>
              <p className="text-muted-foreground">9401811385 / 8133868186</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">Email Us</h3>
              <p className="text-muted-foreground">
                visionacademy.silchar@gmail.com
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
