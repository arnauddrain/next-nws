import Image from 'next/image';
import PandaPicture from './panda.jpg'

export default function About() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center min-h-screen ">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="text-lg">
                We are a team of passionate developers dedicated to building amazing
                applications.
            </p>
            <p className="text-lg">
                Our mission is to create user-friendly and efficient software solutions
                that make a difference.
            </p>
            <div className="w-36">
                <Image src={PandaPicture} alt="Panda" width={200} />
            </div>
        </div>
    );
}