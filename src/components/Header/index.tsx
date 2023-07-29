import { HeaderContainer } from "./styles";
import Image from 'next/image';
import logoImg from '../../assets/logo.svg';
import { Cart } from "../Cart";
import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
    const { pathname } = useRouter();

    const showCartButton = pathname != '/success'

    return(
        <HeaderContainer>
        <Link href="/">
          <div>
            <Image src={logoImg} alt="" />
          </div>
        </Link>

        {showCartButton && <Cart/>}
    </HeaderContainer>

    )
}