import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <Link href="/">
                {/* <Image
                    src="/logo.png"
                    alt="Stay Swift Logo"
                    width={200}
                    height={200}
                /> */}
                <h2 className="text-3xl font-bold text-primary border-2 p-2 py-1 rounded border-primary">
                    Gogo
                </h2>
            </Link>

            <ul>
                <li>
                    <Link href="#">Recommended Places</Link>
                </li>

                <li>
                    <Link href="#">About Us</Link>
                </li>

                <li>
                    <Link href="#">Contact us</Link>
                </li>

                <li>
                    <Link href="/bookings">Bookings</Link>
                </li>

                <li>
                    <Link href="/login" class="login">
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
