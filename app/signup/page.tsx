
import UserSignupForm from '../../src/components/UserSignupForm';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';


export default function SignupPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
          <Navbar />
            <main className="flex-grow flex items-center justify-center p-4">
                <UserSignupForm />
            </main>
          <Footer />
        </div>
    );
}
