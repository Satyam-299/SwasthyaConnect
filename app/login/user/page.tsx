
import UserLoginForm from '../../../src/components/UserLoginForm';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';

export default function UserLoginPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
          <Navbar />
            <main className="flex-grow flex items-center justify-center p-4">
                <UserLoginForm />
            </main>
          <Footer />
        </div>
    );
}
