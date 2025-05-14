
import { Button } from '@/components/ui/button';
import { Copyright } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/95 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 text-sm text-muted-foreground">
        <div className="flex items-center space-x-1 mb-4 md:mb-0">
          <Copyright className="h-4 w-4" />
          <span>{currentYear} Vistra. All rights reserved.</span>
        </div>
        <div className="flex items-center space-x-4">
          {/* <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link> */}
          <Button variant="outline" size="sm" disabled>
            Admin Login
          </Button>
        </div>
      </div>
    </footer>
  );
}
