import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
    return (
        <section className="h-screen grid place-items-center">
            <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
                <h4 className="font-bold text-2xl">Sign in</h4>
                <LoginForm />

                <div className="text-center text-xs text-gray-500">
                    <Link href={"/registration"} className="text-primary me-1">
                        Registration
                    </Link>
                     or Signup with
                </div>
                <div className="flex gap-4">
                    <button className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
                        <Image src="/fb.png" alt="" width={25} height={25} />
                        <span>Facebook</span>
                    </button>
                    <button className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
                        <Image
                            src="/google.png"
                            alt=""
                            width={25}
                            height={25}
                        />
                        <span>Google</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
