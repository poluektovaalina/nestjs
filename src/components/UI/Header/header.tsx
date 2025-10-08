'use client'

import { siteConfig } from "@/config/site.config";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation";
import styles from "./header.module.css"
import RegistractionModal from "../modals/Registraction.modal.tsx/registraction.modal";

export const Logo = () => {
    return (
        <Image
            src='/phoenix-logo-clip-art-flame-football-pictures-daqu.png'
            alt="bird"
            width={50}
            height={50}
            priority
        />
    );
};
// export const AcmeLogo = () => {
//   return (
//     <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
//       <path
//         clipRule="evenodd"
//         d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
//         fill="currentColor"
//         fillRule="evenodd"
//       />
//     </svg>
//   );
// };

export default function Header() {



    const pathName = usePathname();

    return (
        <Navbar className={styles.header} position="static">
            <NavbarBrand className={styles.headerone}>
                <Logo />
                <p className="font-bold text-inherit">{siteConfig.title}</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {
                    siteConfig.navigation.map(item => {
                        const isActive = item.href === pathName
                        return (
                            <NavbarItem key={item.name}>
                                <Link color="foreground" href={item.href} className={`px-3 py1 ${isActive ? "text-blue-300" : "text-white"}`}>
                                    Features
                                </Link>
                            </NavbarItem>
                        )
                    })
                }
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <RegistractionModal />

        </Navbar>
    );
}
