/* Frameworks */
import React from "react";
import Link from "next/link";

/* Icons */
import { SiTwitter, SiFacebook, SiMedium, SiTwitch, SiInstagram} from 'react-icons/si';

const Social = (props) => {
  return (
    <div className="social">
      <ul>
        <li>
            <Link href="https://twitter.com/archtyped">
              <a target="_blank" rel="noreferrer">
              <SiTwitter />
              </a>
            </Link>
          </li>
        <li>
            <Link href="https://www.facebook.com/archtyped/">
              <a target="_blank" rel="noreferrer">
              <SiFacebook />
              </a>
            </Link>
          </li>
        <li>
            <Link href="https://www.instagram.com/archtyped/">
              <a target="_blank" rel="noreferrer">
              <SiInstagram />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://medium.com/@archtyped">
              <a target="_blank" rel="noreferrer">
              <SiMedium />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.twitch.tv/archtyped/">
              <a target="_blank" rel="noreferrer">
                <SiTwitch />
              </a>
            </Link>
          </li>
          
      </ul>
    </div>
  );
};

export default Social;
