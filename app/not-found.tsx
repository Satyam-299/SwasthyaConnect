
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FileQuestion } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center gap-6 p-4 text-center">
        <FileQuestion className="w-24 h-24 text-primary/50" />
      <h2 className="text-4xl font-bold font-headline">404 - Page Not Found</h2>
      <p className="text-muted-foreground max-w-md">
        The page you are looking for does not exist. It might have been moved or you may have typed the address incorrectly.
      </p>
      <Button asChild>
        <Link href="/">Return to Homepage</Link>
      </Button>
    </div>
  )
}
